const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearAll = document.getElementById('clear')
const itemFilter = document.getElementById('filter')
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

const createListItem = item => {
	const li = document.createElement('li')
	const btn = document.createElement('button')
	const i = document.createElement('i')

	li.appendChild(document.createTextNode(item))
	btn.className = 'remove-item btn-link text-red'
	i.className = 'fa-solid fa-xmark'

	btn.appendChild(i)
	li.appendChild(btn)
	itemList.appendChild(li)
}

const displayItems = () => {
	const itemsFromStorage = getItemsFromStorage();

	itemsFromStorage.forEach((item) => addItemToDOM(item));

	checkUI();
}

const onAddItemSubmit = e => {
	e.preventDefault()

	const newItem = itemInput.value

	// Validate Input
	if (newItem === '') {
		alert('Please add an item.')
		return
	}

	// Check for edit mode
	if (isEditMode) {
		const itemToEdit = itemList.querySelector('.edit-mode');

		removeItemFromStorage(itemToEdit.textContent);
		itemToEdit.classList.remove('edit-mode');
		itemToEdit.remove();
		isEditMode = false;
	} else {
		if (checkIfItemExists(newItem)) {
			alert('That item already exists!');
			return;
		}
	}

	// Create item DOM element
	addItemToDOM(newItem)

	// Add item to local storage
	addItemToStorage(newItem)

	checkUI()

	itemInput.value = ''
}

const addItemToDOM = item => {
	createListItem(item)
}

const addItemToStorage = item => {
	const itemsFromStorage = getItemsFromStorage();

	// Add new item to array
	itemsFromStorage.push(item)

	// Convert to JSON string and set to local storage
	localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

const getItemsFromStorage = () => {
	let itemsFromStorage;

	if (localStorage.getItem('items') === null) {
		itemsFromStorage = []
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'))
	}

	return itemsFromStorage;
}

const onClickItem = (e) => {
	if (e.target.parentElement.classList.contains('remove-item')) {
		removeItem(e.target.parentElement.parentElement);
	} else {
		setItemToEdit(e.target);
	}
}

const checkIfItemExists = (item) => {
	const itemsFromStorage = getItemsFromStorage();

	return itemsFromStorage.includes(item);
}

const setItemToEdit = (item) => {
	isEditMode = true;

	itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));

	item.classList.add('edit-mode');
	formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
	formBtn.style.backgroundColor = '#228b22';
	itemInput.value = item.textContent;
}

const removeItem = item => {
	if (confirm('Are you sure?')) {
		// Remove item from DOM
		item.remove();

		// Remove item from storage
		removeItemFromStorage(item.textContent);

		checkUI();
	}
}

const removeItemFromStorage = item => {
	let itemsFromStorage = getItemsFromStorage();

	// Filter item to be removed
	itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

	// Re-set to local storage
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

const clearAllItems = () => {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild)
	}

	// Clear from local storage
	localStorage.removeItem('items');

	checkUI()
}

const filterItems = e => {
	const items = itemList.querySelectorAll('li')
	const text = e.target.value.toLowerCase()

	items.forEach(item => {
		const itemName = item.firstChild.textContent.toLowerCase()

		if (itemName.indexOf(text) != -1) {
			item.style.display = 'flex'
		} else {
			item.style.display = 'none'
		}
	})
}

const checkUI = () => {
	itemInput.value = '';

	const items = itemList.querySelectorAll('li')

	if (items.length === 0) {
		clearAll.style.display = 'none'
		itemFilter.style.display = 'none'
	} else {
		clearAll.style.display = 'block'
		itemFilter.style.display = 'block'
	}

	formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
	formBtn.style.backgroundColor = '#333';

	isEditMode = false;
}

/* Initialize App */
const init = () => {
	/* Event Listeners */
	itemForm.addEventListener('submit', onAddItemSubmit)
	itemList.addEventListener('click', onClickItem)
	clearAll.addEventListener('click', clearAllItems)
	itemFilter.addEventListener('input', filterItems)
	document.addEventListener('DOMContentLoaded', displayItems)

	checkUI()
}

init();
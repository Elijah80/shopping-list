const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearAll = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

const createListItem = (item) => {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const i = document.createElement('i');

  li.appendChild(document.createTextNode(item));
  btn.className = 'remove-item btn-link text-red';
  i.className = 'fa-solid fa-xmark';

  btn.appendChild(i);
  li.appendChild(btn);
  itemList.appendChild(li);
}

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if(newItem === ''){
    alert('Please add an item.');
    return;
  }

  createListItem(newItem);

  checkUI();

  itemInput.value = '';
}

const removeItem = (e) => {
  if(e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      checkUI();
    }
  }
}

const clearAllItems = () => {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  checkUI();
}

const filterItems = (e) => {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if(itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  })
}

const checkUI = () => {
  const items = itemList.querySelectorAll('li');

  if(items.length === 0) {
    clearAll.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearAll.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}


/* Event Listeners */
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearAll.addEventListener('click', clearAllItems);
itemFilter.addEventListener('input', filterItems);

checkUI();
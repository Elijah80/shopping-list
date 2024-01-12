const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const createListItem = (item) => {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const i = document.createElement('i');

  li.textContent = item;
  btn.className = 'remove-item btn-link text-red';
  i.className = 'fa-solid fa-xmark';

  btn.appendChild(i);
  li.appendChild(btn);
  itemList.appendChild(li);
}

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  if(newItem === ''){
    alert('Please add an item.');
    return;
  } else {
    createListItem(newItem);
    itemInput.value = '';
  }
}

/* Event Listeners */
itemForm.addEventListener('submit', addItem);
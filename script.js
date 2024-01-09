// Generate the page
const createPage = () => {
  const container = document.querySelector('.container');
  const btn = document.createElement('button');

  createHeader(container);
  createForm(container);
  createFilter(container);
  createListItems(container);

  btn.id = 'clear';
  btn.className = 'btn-clear';
  btn.textContent = 'Clear All';

  container.appendChild(btn);
}

const createHeader = (parent) => {
  const header = document.createElement('header');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');

  img.setAttribute('src', 'images/note.png');
  img.setAttribute('alt', 'Notepad');

  h1.textContent = 'Shopping List';

  header.appendChild(img);
  header.appendChild(h1);
  parent.appendChild(header);
}

const createForm = (parent) => {
  const form = document.createElement('form');
  const formItems = ['input', 'button'];

  form.id = 'item-form';

  formItems.forEach(item => {
    const div = document.createElement('div');
    const element = document.createElement(item);

    div.className = 'form-control';

    if (item === 'input') {
      element.setAttribute('type', 'text')
      element.className = 'form-input';
      element.id = 'item-input';
      element.setAttribute('name', 'item');
      element.setAttribute('placeholder', 'Enter Item');
    } else {
      const i = document.createElement('i');
      const text = document.createTextNode(' Add Item');

      element.setAttribute('type', 'submit');
      element.className = 'btn';
      i.className = 'fa-solid fa-plus';

      element.appendChild(i);
      element.appendChild(text);
    }

    div.appendChild(element);
    form.appendChild(div);
  })

  parent.appendChild(form);
}

const createFilter = (parent) => {
  const div = document.createElement('div');
  const input = document.createElement('input');

  div.className = 'filter';
  input.setAttribute('type', 'text');
  input.className = 'form-input-filter';
  input.id = 'filter';
  input.setAttribute('placeholder', 'Filter Items');

  div.appendChild(input);
  parent.appendChild(div);
}

const createListItems = (parent) => {
  const items = ['Apples', 'Orange Juice', 'Oreos'];
  const ul = document.createElement('ul');

  ul.id = 'item-list';
  ul.className = 'items';

  items.forEach(item => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const i = document.createElement('i');

    li.textContent = item;
    btn.className = 'remove-item btn-link text-red';
    i.className = 'fa-solid fa-xmark';

    btn.appendChild(i);
    li.appendChild(btn);
    ul.appendChild(li);
  })

  parent.appendChild(ul);
}

createPage();

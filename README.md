# Simple Shopping List App

A simple shopping list application implemented in HTML, CSS, and JavaScript.

## Features

-    Add new items to the list
-    Edit existing items
-    Remove items
-    Filter items

## Usage

1. Clone the repository
2. Open `index.html` in your browser
3. Start managing your shopping list

## Code Overview

The JavaScript code is organized into different functions for better readability and maintenance.

### Functions

-    `createListItem(item)`: Creates a new list item element.
-    `displayItems()`: Displays items from local storage on page load.
-    `onAddItemSubmit(e)`: Handles the form submission for adding/editing items.
-    `addItemToDOM(item)`: Adds a new item to the DOM.
-    `addItemToStorage(item)`: Adds a new item to local storage.
-    `getItemsFromStorage()`: Retrieves items from local storage.
-    `onClickItem(e)`: Handles click events on list items for removal or editing.
-    `checkIfItemExists(item)`: Checks if an item already exists in the list.
-    `setItemToEdit(item)`: Sets an item to edit mode.
-    `removeItem(item)`: Removes an item from the list and local storage.
-    `removeItemFromStorage(item)`: Removes an item from local storage.
-    `clearAllItems()`: Clears all items from the list and local storage.
-    `filterItems(e)`: Filters items based on user input.
-    `checkUI()`: Checks and updates the UI based on the list state.

### Initialization

The `init()` function sets up event listeners and initializes the application on DOMContentLoaded.

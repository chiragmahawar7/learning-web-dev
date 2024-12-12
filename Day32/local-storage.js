// Local Storage
// part of the Web Storage API
// allows web applications to store data locally within the user’s browser
// data stored in local storage is retained across sessions and is not transmitted to the server

// Features-
// Persistence: Data stored in localStorage persists even when the browser is closed and reopened.
// This feature is clarity for saving user preferences or application states.

// Simplicity: LocalStorage offers a straightforward API with methods to set, retrieve, and remove data,
// making it easy to implement.

// Capacity: Unlike cookies, which are limited to 4KB of data, localStorage typically allows up to 5MB 
// of storage per domain, providing ample space for many use cases.

// 1. Setting Data - Use localStorage.setItem(key, value) to store data

localStorage.setItem('username', 'JohnDoe');

// 2. Getting Data: Retrieve data using localStorage.getItem(key)

const username = localStorage.getItem('username');
console.log(username);

// 3. Removing Data: Remove specific items with localStorage.removeItem(key)

localStorage.removeItem('username');

// 4. Clearing All Data: Clear all data using localStorage.clear()

localStorage.clear();
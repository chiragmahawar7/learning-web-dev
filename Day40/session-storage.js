// Session Storage
// Session storage stores data in key-value pairs within the web browser,
// but unlike localStorage, the data persists only as long as the browser tab remains open.

// Key characteristics include:
// 1. Storage capacity: 5 MB
// 2. Data Persistence: Data stored in session storage remains until the browser tab is open.
// 3. Client-side storage: It stores data entirely on the client side,
//    meaning it’s not automatically sent to the server with each request.
// 4. Domain-specific: Data in local storage is scoped to the domain it was created on,
//    ensuring security by preventing other websites from accessing it.

// Session storage also, only allows data to be stored in string format.

// Storing a simple string
sessionStorage.setItem('username', 'JohnDoe');

// Storing an object (need to stringify the object)
const user = {
    name: 'John Doe',
    age: 30
};
sessionStorage.setItem('user', JSON.stringify(user));

// Retrieving the object
const storedUser = JSON.parse(sessionStorage.getItem('user'));
// Working with Dates & Times in JS

// 1. Creating a Date Object
// Current Date and Time:
let currentDate = new Date();
console.log(currentDate);
// Specific Date and Time:
let specificDate = new Date('2024-01-05T10:00:00');
console.log(specificDate);

// 2. Accessing Date Components
// Once a Date object is created, you can access various components of the date
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());

// 3. Changing Date Components
// You can alter specific components of a Date object:
currentDate.setFullYear(2025); // Set Year
currentDate.setMonth(11); // (Sets to December) // Set Month
currentDate.setDate(15); // Set Day
console.log(currentDate);

// 4. Adding and Subtracting Dates
currentDate.setDate(currentDate.getDate() + 10);
currentDate.setDate(currentDate.getDate() - 10);
console.log(currentDate);

// 5. Formatting Dates and Times
currentDate.toLocaleDateString();
console.log(currentDate);
currentDate.toLocaleTimeString();
console.log(currentDate);

// 6.Comparing Dates
// Comparison:
console.log(currentDate.getTime() === specificDate.getTime());

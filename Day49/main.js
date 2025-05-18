// em Units: A Parent-Dependent Approach

// The em unit is relative to the font size of its parent element when used for font-size.
// For other properties like padding, margin, or width, it is relative to the element’s own font-size.
// example-
// .parent {
//     font-size: 18px;
//   }
//   .child {
//     font-size: 1.5em; /* 1.5 * 18px = 27px */
//   }

// rem: The Root-Based Savior

// The rem unit (short for root em) is always relative to the font-size of the root (<html>) element,
// making it more predictable.
// example-
// html {
//     font-size: 16px;
//   }
//   .child {
//     font-size: 2rem; /* 2 * 16px = 32px */
//   }
//   .sub-child {
//     font-size: 2rem; /* Still 32px, no unexpected scaling */
//   }


//  Use rem for:
// Global typography (font-size, line-height)
// Padding, margin, and layout-related properties where you want consistency
// Ensuring accessibility and scalability

// Use em for:
// Components that should scale relative to their parent (e.g., buttons, modals)
// Spacing inside elements where local context matters
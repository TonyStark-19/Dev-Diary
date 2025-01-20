// Logic to sort the list

// Select container and items
const container = document.querySelector('.search-list-container');
const items = Array.from(document.querySelectorAll('.search-list-item'));

// Sort items by their text content
items.sort((a, b) => a.textContent.trim().localeCompare(b.textContent.trim()));

// Clear the container and append sorted items
container.innerHTML = '';
items.forEach(item => container.appendChild(item));

// Logic for seach box

const searchInput = document.querySelector('.search-box input'); // The input element
const listItems = document.querySelectorAll('.search-list-item'); // All the list items
const notFoundMessage = document.querySelector('.not-found'); // "Not Found" message

// Add an event listener for the 'input' event on the search box
searchInput.addEventListener('input', () => {
    // Get the search query and convert to lowercase
    const query = searchInput.value.toLowerCase();
    let hasMatch = false; // Track if any items match

    // Loop through each list item
    listItems.forEach(item => {
        // Get the text content of the <p> tag inside the list item
        const text = item.querySelector('p').textContent.toLowerCase();

        // Check if the text includes the query
        if (text.includes(query)) {
            // Show the item if it matches
            item.style.display = 'block';
            hasMatch = true; // Mark that we found a match
        } else {
            // Hide the item if it doesn't match
            item.style.display = 'none';
        }
    });
    // Show "Not Found" message if no matches are found
    if (hasMatch) {
        notFoundMessage.style.display = 'none';
    } else {
        notFoundMessage.style.display = 'block';
    }
});
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

// Logic for linking pages

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".search-list-item a");
    const pages = document.querySelectorAll(".page");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove 'active' class from all links
            links.forEach(item => item.parentElement.classList.remove("active"));

            // Add 'active' class to the clicked link
            this.parentElement.classList.add("active");

            // Hide all pages
            pages.forEach(page => page.classList.add("hidden"));

            // Show the target page
            const targetId = this.getAttribute("href").substring(1);
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.remove("hidden");
            }
        });
    });
});

// Logic to make sure dev diary page is default active

const defaultActive = document.querySelector(".search-list-item.default-active");
if (defaultActive) {
    const defaultPageId = defaultActive.querySelector("a").getAttribute("href").substring(1);
    document.getElementById(defaultPageId)?.classList.remove("hidden");
    defaultActive.classList.add("active");
}

// JavaScript logic to toggle the menu
document.querySelector('.menu-btn').addEventListener('click', function () {
    const menu = document.querySelector('.left-column');
    menu.classList.toggle('active');
});

// js logic to add navbar below 790px screen width

function toggleNavbarVisibility() {
    const navbar = document.querySelector(".navbar");

    if (window.innerWidth <= 790) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
}

// Run on page load
toggleNavbarVisibility();

// Run whenever the window is resized
window.addEventListener("resize", toggleNavbarVisibility);

// js logic to hide left column when a list item is clicked

// Function to hide the left column when a list item is clicked
document.querySelectorAll('.search-list-item a').forEach(item => {
    item.addEventListener('click', function () {
        const menu = document.querySelector('.left-column');
        menu.classList.remove('active'); // Hides the left column
    });
});

// js logic to move through pages

document.querySelectorAll('.text-content a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Extract target page ID
        const targetPage = document.getElementById(targetId);
        const currentPage = document.querySelector('.page:not(.hidden)'); // Find currently visible page

        if (currentPage) {
            currentPage.classList.add('hidden'); // Hide current page
        }

        if (targetPage) {
            targetPage.classList.remove('hidden'); // Show new page
        }

        // Update active list item
        document.querySelectorAll('.search-list-item').forEach(item => {
            item.classList.remove('active'); // Remove active class from all
        });

        // Find and activate the corresponding list item for the new page
        const newActiveItem = document.querySelector(`.search-list-item a[href="#${targetId}"]`);
        if (newActiveItem) {
            newActiveItem.parentElement.classList.add('active'); // Add active class
        }
    });
});

// js logic to toggle theme btn1 (in navbar)

var currentTheme = 'light';

document.querySelector('.theme-toggle-btn').addEventListener('click', function () {
    const menu = document.querySelector('.container');
    if (currentTheme == 'light') {
        menu.classList.remove("light");
        currentTheme = 'dark';
    } else {
        menu.classList.add("light");
        currentTheme = 'light';
    }
});

// js logic to toggle theme btn 2 (in left column)

var currentTheme = 'light';

document.querySelector('.theme-toggle-btn-2').addEventListener('click', function () {
    const menu = document.querySelector('.container');
    if (currentTheme == 'light') {
        menu.classList.remove("light");
        currentTheme = 'dark';
    } else {
        menu.classList.add("light");
        currentTheme = 'light';
    }
});
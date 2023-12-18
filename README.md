# Web Development Project

## AUEB | Web Development | Semester 7 | 2023 - 2024

## Classified Ads Platform

The Classified Ads Platform is a web application that facilitates the exploration of various categories, subcategories, and advertisements. Users can seamlessly navigate through the platform to discover a wide range of products and services. The application leverages the Handlebars.js templating engine for dynamic rendering and fetches data from an external API (https://wiki-ads.onrender.com).

### Technologies Used:
Frontend: HTML, CSS, JavaScript, Handlebars.js
Backend: Node.js, Express.js
API: External API for fetching category, subcategory, and ad data

### Project Highlights:
Client-Side Templating: Utilizes Handlebars.js for efficient client-side templating, providing a seamless and dynamic user experience.
External API Integration: Fetches data from an external API to dynamically update the content, ensuring the latest information is displayed.
Modular Structure: Organized backend routes and frontend templates for scalable and maintainable code.

### server.js:
This file sets up a basic Express.js server. It serves static files from the 'views' directory and defines routes for the home page (/), category page (/category), and subcategory page (/subcategory). When a user accesses the root URL, the server responds by sending the index.html file. The server listens on port 3000.

### index.html:
This HTML file defines the structure of the home page. It includes a Handlebars template (categories-template) for rendering categories and subcategories. The script at the end of the file fetches data from https://wiki-ads.onrender.com/categories, fetches subcategories for each category, and renders the data dynamically on the page.

### category.html:
This HTML file represents the category page. It includes a Handlebars template (ads-template) for rendering ads belonging to a specific category. The script at the end of the file fetches ads data based on the category ID from the URL query parameters and dynamically renders the ads on the page.

### subcategory.html:
Similar to category.html, this file represents the subcategory page. It includes a Handlebars template (ads-template) for rendering ads belonging to a specific subcategory. The script fetches ads data based on the subcategory ID from the URL query parameters and renders the ads on the page.

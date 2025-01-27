# Fake Store Product Catalog 🛍️

### Idea 💡

The Fake Store Product Catalog is a web application that simulates an online store experience. It allows users to browse through a variety of products, filter them by categories, add items to a shopping cart, and simulate a purchase. This project serves as a foundation for understanding e-commerce functionalities and can be used as a template for building more complex online shopping platforms.

### Requirements 🗺

The web page should be:
* Single page application
* There should be only one main page with dynamic content
* The store name or logo should be displayed at the top of the page
* On the page there should be a grid of product cards and a category menu
* Product Cards should display:
  * Product Image
  * Title
  * Price
  * Category
  * Add to Cart button
* Categories:
  * All categories should be displayed in a menu
  * Clicking a category should filter the products
* Cart:
  * Should display added items
  * Have a "Make Purchase" button
* Pagination:
  * Display 8 products per page
  * Have Previous and Next buttons to navigate pages

###   Flow 🌈

1. User opens the web app
2. The store name/logo is shown at the top, followed by the category menu and a grid of product cards
3. User can scroll through the products or click on a category to filter them
4. Clicking the Next button shows the next page of products
5. Clicking the Previous button (when available) shows the previous page
6. User clicks the "Add to Cart" button on a product
7. The product is added to the cart, which updates to show the item and new total
8. User can continue shopping or click "Make Purchase"
9. If "Make Purchase" is clicked, the cart is cleared and user is returned to the main product view
10. User can repeat the process of browsing, filtering, and adding to cart as desired
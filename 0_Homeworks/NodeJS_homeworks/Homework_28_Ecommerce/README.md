# Extra Homework

## E-Commerce app

E-Commerce is rocking both on the web and mobile and we can’t ignore the massive size of this industry. Knowing how to build and maintain e-commerce apps is going to help you a lot as a developer.

Key requirements and features:

_Product Management:_

- Product Model: Define a schema for products including fields like name, description, price, quantity, reviews, rating and category.
- CRUD Operations: Implement CRUD operation (get all products, get product by id, create product, update product, delete product) for managing products in the database.
- Search Functionality: Enable search functionality to allow users to find products based on category and name.
  - You can implement search functionality via query params or by creating a separate route (post request) where you will send the search value in the body

BONUS: _Cart Management_

- Shopping Cart Model: Define a schema for the shopping cart to store items. The shopping cart should have a field "products" that will be of type array and will contain the id's (Object id's) of the products added to cart.
- Add to Cart: Implement functionality to add products to the shopping cart.
- Get cart by id
- Get all carts

Feel free to experiment and add additional features

### Libraries and Tools:

- Express.js: Use Express.js for building the backend server and handling HTTP requests.
- MongoDB Atlas: Host your MongoDB database on the cloud for scalability and reliability.
- Mongoose: Use Mongoose for modeling and interacting with MongoDB data in Node.js.

* Feel free to add additional libraries that you consider useful

### Don't forget to send the Postman Collectionalong with your solution!

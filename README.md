Product Management Application
This is a simple Product Management application built using Node.js, Express, and MongoDB. The application allows you to manage users, categories, subcategories, products, and a wishlist.
Features
User Management: User authentication and authorization using JWT.
Category & Subcategory Management: Add and manage categories and subcategories.
Product Management: Add, edit, and retrieve products, and associate them with categories and subcategories.
Wishlist Management: Add products to the wishlist and view the wishlist.
Search Functionality: Search for products by name.

Technologies Used
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JSON Web Token (JWT)
Others: dotenv for environment variable management


The server will run on http://localhost:3000.

   Endpoints
User Routes:

POST /register - Register a new user
POST /login - Log in an existing user
Category Routes:

POST /addcategory - Add a new category
GET /allcategory - Get all categories
Subcategory Routes:

POST /addsubcat - Add a new subcategory
GET /getsubcat - Get all subcategories
Product Routes:

POST /addproduct - Add a new product
GET /allproducts - Get all products
PUT /editproduct/:id - Edit a product by its ID
GET /search - Search products by name
Wishlist Routes:

POST /addwishlist - Add a product to the wishlist
GET /getwishlist - Get all products in the user's wishlist



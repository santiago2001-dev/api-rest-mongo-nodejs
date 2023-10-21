# api-rest-mongo-nodejs

#installation
1. clone to repository , open to the folder in vs code and open terminal.
2. execute npm i for install node moules.
3.execute to proyect with comand node index if you have install nodemon ,execute nodemon index.
- 4.create to file .env with string conexion.
#implementation
With the server ready we can consume the endpoints

#endpoints 
1.http://localhost:3000/api/products
this endpoint answer with list to the products in stock
-not have params
-type petition http : GET

2.http://localhost:3000/api/price

-this endpoint it brings the products that have a discount by user and product name the user has a discount on that product it will show the offer otherwise if it does not have an offer Show the product with its original price

#params 

-idUser : Number 
-nameProduct :String

#example

-http://localhost:3000/api/price?idUser=1&nameProduct=Adidas Stan Smiths
-type petition http : GET


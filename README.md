# An E-Commerce Management Application

Designed a single page web application for product management and user checkout.

It has got different features both for Admin (owner) as well as users.

Mainly **CRUD** operations are involved in all these features.

***
Features for Admin :
* Login and Logout
* Admin can _add_ new product
* Admin can _update_ new product
* Admin can _delete_ any existing product
* Admin can view list of all the products
***
Features for User :
* Login and Logout
* User can view list of all products
* User can add the product to the cart
***
I  have made use of mock JSON server to store the data of all the products in the store as well as all the products which are added in the cart

For using the json server, you can install it globallly in your directory using below command:

```npm install -g json-server```

To run you JSON server you can use the following command:

```json-server --watch db.json```

This command will run your JSON server in default port i.e; 3000, But if any other application is already running on that port then you can run you JSON server in different port using below command :

```json-server --watch db.json --port 3004```
***
## Output :
### Login Page 

### When Admin logs in :

### When user logs in :



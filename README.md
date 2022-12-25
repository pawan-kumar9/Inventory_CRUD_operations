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
<img width="600" alt="image" src="https://user-images.githubusercontent.com/70126570/209477551-71171afb-1040-4538-85f3-bf99cc6c88f3.png">

### When Admin logs in :
<img width="600" alt="image" src="https://user-images.githubusercontent.com/70126570/209477610-9a98d1a8-c068-4d9a-9324-0d81ed5f28b0.png">

<img width="600" alt="image" src="https://user-images.githubusercontent.com/70126570/209477626-6115e252-70e5-4c4a-ab28-7e02bf2aea2e.png">

### When user logs in :
<img width="600" alt="image" src="https://user-images.githubusercontent.com/70126570/209477697-2b85429f-ec89-40a0-aac8-994737d2475a.png">

<img width="600" alt="image" src="https://user-images.githubusercontent.com/70126570/209477716-d2049a8e-5cff-4aba-ba4f-6bbfe71e9f3c.png">



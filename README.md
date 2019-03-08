# The Car Server
 
 _Introduction_
 
 In this short lab you will write endpoints (route handlers) for interacting with a Car resource.  The model and express boilerplate has been provided.  Only the routes for INDEX, SHOW, POST, and (bonus) DELETE need to be added.
 
### Set up

- clone down this repo
- `cd` into the repo and run `npm install`
- create the database with `createdb cars_lab_db`
- set up the schema with `npm run resetDb`
- Review the existing code
- open a terminal window and start the dev server with `npm start`


### The Post route

- Write a route handler for `CREATE` for the Car resource.  Since the `Car` model is already imported into `server.js`, you can just use it directly in a route handler.  What is the verb and path for this route?  What sequelize method should be called on the `Car` model?
- Try testing the route when you're done with `axios`

### The INDEX route
- Write a route handler for `INDEX` for the Car resource.  The route should be GET `/cars`.
- Test this with axios or the browser

### The SHOW route
- Add a route for `SHOW`.  The route should be GET `/cars/:id`.  
- Feel free to either use `findByPk` or `findOne` methods on the Car resource

#### Bonus

- Write a `DELETE` route handler.  What is the route verb and path?  
- What should it return?
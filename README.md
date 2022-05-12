

## Sample Node JS REST API application with PostgreSQL integration

### How to use
   * Download application 
   * Open queries.js file and update data base information
   * Install packages by running bellow command 
       npm install
       
   * Run the application using bellow command 
       node index.js
       
   * Using browser call http://localhost:3000
   
   * Create user by calling POST API using curl
   
       curl --data "name=<name>&email=<email>" http://localhost:3000/users
  
   * List created user by calling GET API using curl or browser
  
       http://localhost:3000/users
   
   * Get users by user is by calling GET API with ID
  
       http://localhost:3000/users/ID
  
   * Update user by ID by calling PUT API using curl.
  
       curl -X PUT -d "name=<name>" -d "email=<emial>"  http://localhost:3000/users/1
   
   * Delete user by ID by calling DELETE API using curl 
  
       curl -X "DELETE" http://localhost:3000/users/1
  
 
 ### Create data base schema
     *  create database <database name>;
     *  create user <username> with encrypted password 'password';
     *  grant all privileges on database <database name> to <user name>;
  
     
       
   

# library-db

In order to run the project make sure you have node_modules installed 
    npm install

You need at least Node.js 16.14.2 in order to run the commands, so if you are getting issues run 
    nvm install 16.14.2 

If the Express.js and node-postgres (pg) dependencies aren't installed, run 
    npm i express pg

To run an indiviual file: node book.model.js

To run the whole project: DEBUG=express-library_db:* npm run devstart and navigate to http://localhost:4040/catalog

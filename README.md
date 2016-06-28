# Generic Quiz portal backend

This is the generic quiz portal's backend that is going to be used in Buzz. It would be used for events like Gordian Knot, Cache In, etc.

Based on [meghprkh/express-auth-starter](https://github.com/meghprkh/express-auth-starter)

## Setting Up
```
npm i
```

## Running in dev mode
Please make sure the frontend server is also running in dev mode
```
npm start
```
The API will now be available at http://localhost:3000/api

## Running in prod mode
Please build the frontend and copy the files from the `dist` folder there to the `public` folder here. Then run the following command
```
npm run prod
```
Now go to http://localhost:3000/

## Libraries & Devtools Used
- [ExpressJS](http://www.expressjs.com/): The most popular NodeJS microframework
- [Sequelize](http://docs.sequelizejs.com/en/latest/): A good ORM for NodeJS
- [SQLite](https://sqlite.org/): A good small database that is used so that much setup is not required for trying this out. In production I switch to MariaDB
- [JWT](https://jwt.io/): A standard for *signing* JSON tokens and verifying them
- [Nodemon](https://github.com/remy/nodemon): A good tool for development and keeping your server running forever
- [Morgan](https://github.com/expressjs/morgan): Simple logger for ExpressJS
- [ESLint](http://www.eslint.org/): The source code linter used to notice mistakes and a few styling rules
- [Postman](https://www.getpostman.com/): Tool used for testing the API while development

## License
The code is provided under the ISC license

# rest-api-node.js
Build a simple REST API using Node.js with Express for the back-end.
Hello!
This is an Budget API, made with Node.js, Express, and Firebase Realtime Database.

objectives: save and get information about:
            -Users (people)
            -Income (money coming in)
            -Expenses (money going out)

How to Start
Download the project from GitHub and open it in VS Code.
Make a file called .env in the root folder.
Put your Firebase keys inside it (I already have mine in my .env).

Open the terminal and run:
npm install
To run my API:
node index.js
Then you will see: Server running on port 5000
Endpoints
When my API is running, you can open a tool like Postman or Thunder Client to test.

Home
GET, You will See a welcome message and list of endpoints.

Users
GET /users to See all users.
POST /users to Add a new user.
PUT /users/:id to Change a user.
DELETE /users/:id to Remove a user.

Example user:

json
Copier le code
{
  "name": "Femi Ola",
  "username": "Femi",
  "email": "oluwafemi@sozentech.com",
  "address": {
    "street": "Panatella Drive",
    "suite": "Apt. 556",
    "city": "Calgary",
    "zipcode": "T3I 3W2"
  }
}
Income
GET /income to See all incomes.
POST /income to Add new income.
PUT /income/:id to Change income.
DELETE /income/:id to Remove income.

Example income:

json
Copier le code
{
  "wages": 1400,
  "secondary_income": 700,
  "Interest": 120,
  "support_payment": 40,
  "others": 100
}
Expenses
GET /expenses to See all expenses.
POST /expenses to Add new expenses.
PUT /expenses/:id to Change expenses.
DELETE /expenses/:id to Remove expenses.

Example expenses:



The Tools I Used for this project are:
Node.js to run JavaScript on my computer.
Express to make the server and routes.
Firebase Realtime Database to save my data.
dotenv to keep my Firebase keys safe.

How it Works
When I send data with POST, it goes to Firebase.
Then I get data with GET, and it comes back from Firebase.
To change data i use PUT and it updates in Firebase.
To remove data i use DELETE and it disappears from Firebase.

My Goal
this project is made to learn backend development.
Now I know how to:
Make an API with Node.js and Express.
Connect to Firebase Realtime Database.
Proper use of Add, get, change, and delete data.(CRUD)
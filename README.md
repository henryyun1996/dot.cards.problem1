### dot.Cards Technical Backend Assessment

I have created a generic RESTful API that has basic CRUD capabilities. When the server is started, you will be greeted with a generic greeting, which I implemented at the start of building this program to help me ensure that the server was in fact starting and running properly!

To get started - simply run the command:

"npm install"

** 

when testing the program - I found that sometimes there are some dependencies that may need to be installed - simply run

"npm install {module name}"

**

in the terminal or command line. This should start the server, and there will be some logs that helped me track and catch any errors that came my way. The log message that indicates the server is online will read 

"Server online at http://localhost:3000"

Once you see this message - you can test these CRUD actions. I used the POSTMAN application.

*** You can find all the code I worked in the server directory, which will contain the ts.files directory. All typescript files within this directory are the code that I have worked and built! ***

## CRUD actions for this API

URL (localhost:3000)
- GET or READ request: general GET request at the start of the program to help tell me that the server was online

- POST or CREATE request: POST request that allows you to add entries to a sqlite database
    - the key or property for the body must be as issued ("name")
    - the value of said key or property can be whatever you'd like to be as long as it's a string (enclosed in " ")

URL (localhost:3000/collections/:id)
- GET or READ request: GET request by ID (which auto increments). This allows the user to fetch and receive the object in the datbase by ID

- PATCH or UPDATE request: PATCH request by ID. This allows the user to edit or patch up the value of any property as long as the ID is known

- DELETE request: DELETE request ID. This allows the user to delete any key and value by using its respective ID.

URL (localhost:3000/collections)
- GET or READ request: GET request that allows the user to receive all data on the database

## Conclusion

Thank you for looking through my code as well as the opportunity to apply for this role!

This entire problem took me about 10 hours - mainly because I had to teach myself on how to build backend code using typescript!

I am proficient in building backend code using Flask and Python - but regardless, this was a fun problem, and I hope to hear back from you soon!

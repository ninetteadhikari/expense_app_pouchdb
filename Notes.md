# Notes
Following are some notes on the process and issues faced during the making of the project.

## Process
### Understanding of the project
- The approach taken at the beginning was to understand the use case of the project. Time was spent to understand that in additional to showing the expenses list it was also important to make the app available offline.
- Time was spent to explore PouchDB and how the database is setup and linked to the front-end framework. PouchDB main website tutorials, Neighbourhoodie blog post, and Youtube tutorials were consulted. The resources are listed here as reference:
    - PouchDB getting started guide: https://pouchdb.com/getting-started.html
    - Neighbourhoodie blog post: https://neighbourhood.ie/blog/2019/05/10/an-offline-first-todo-list-with-svelte-pouchdb-and-couchdb/
    - Youtube tutorial: https://www.youtube.com/watch?v=Ik2abkbVfd8 

### Front-end framework/library
- After getting a fair understanding of the project, next step was to choose a front-end framework for the project. Reactjs was chosen as it is one of the leading front-end libraries available. It is light and works well to create simple apps. I also have previous experience working with it which made is a easy choice.
- Before building the app, required components were mapped out and required states were identified based on the project needs. To keep it simple 2 components were identified: InputForm and ExpenseList linked to the App.js file
- State is managed from the main App.js file to ensure all the `items` created could be stored in the main parent file which can be shared as `props` to the components files.
- Create and delete function of CRUD was implemented using basic React `onClick` and `handleChanges`. 

### Database setup
- Before setting up the database, dummy data was added to the `state` to ensure the app was running properly.
- Once this was working the database was setup by creating a separate `db.js` file.
- Three main actions is required by the app: 
    - get all data 
    - add new data 
    - remove data
- Based on the required actions the 3 functions were written accordingly.

### Linking the database to the app
- Once the database functions were ready the related sections of the App.js file was replaced to ensure that data was being called and saved to the database.
- The initial data import is done `componentDidMount` life-cycle method of React to ensure the available data in the database was being populated instead of showing a blank page at page loading.
- The use of PouchDB ensured that data was being saved without the need of network connectivity. Data remained there even after page refresh.

## Issues
- The React setup for the front-end was pretty straight forward to do simple add and delete functions, however to setup the database and calling it in the App.js file needed something learning from my end.
- One issue I had was on the format of the data passed. For `allDocs` method in PouchDB I had to change the returned items object to an array for it to match the items state type in the app.
- The opposite had to be done for `remove` method to pass the specific object instead of the array
- I also had to account for empty arrays in the ExpenseList component, so that running map or filter function will not return error for undefined arrays.
- One silly issue that took some of my time was forgetting to add a `return` to the functions in my db.js file, which did not send any data and created confusion.

## Next steps
These are the things which can be added to the project with more time.
- Complete the database setup to link PouchDB to CouchDB. Add a server-side component where you set up a CouchDB instance to sync with your local PouchDB and then add a Node.js script that reads data from the database and shows a summary of all expenses, grouped per day, week and month.
- Improve UI of the app to make it more friendly
- Add edit functionality of the items added
- Add tagging/categories, so users can mark which expenses fit into which category, and support summing up of expenses per category.
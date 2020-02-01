import PouchDB from 'pouchdb';

export default class DB {
  // Creates a database
  //   constructor(name) {
  //     this.db = new PouchDB(name);
  //   }

  db = new PouchDB('db');

  // Gets all the items from the database
  getAllToDos() {
   return this.db
      .allDocs({ include_docs: true, descending: true })
      .then(response => {
        console.log('get all docs', response.rows);
        let items=[]
        response.rows.forEach(el => {
          return items.push(el.doc);
        });
        console.log('get all items', items);
        return items;
        // return response.rows
    })
    .catch(err => {
        console.log(err);
    });
  }

  // Creates a new item
  createNewItem(item) {
    return this.db
      .put(item)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

import PouchDB from 'pouchdb';

export default class DB {
  // Creates a database
  db = new PouchDB('db');

  // Gets all the items from the database
  getAllToDos() {
    return this.db
      .allDocs({ include_docs: true, descending: true })
      .then(response => {
        let items = [];
        response.rows.forEach(el => {
          return items.push(el.doc);
        });
        return items;
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

  // Deletes an item
  deleteItem(item) {
    return this.db
      .remove(item)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

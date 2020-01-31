import PouchDB from 'pouchdb';

export default class DB {
  // Creates a database
  constructor(name) {
    this.db = new PouchDB(name);
  }

  getAllToDos() {
    this.db
      .allDocs({ include_docs: true, descending: true })
      .then(response => {
        return response.rows;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

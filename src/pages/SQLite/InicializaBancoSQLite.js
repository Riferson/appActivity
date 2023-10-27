import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('appActivity.db');

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS Pessoa (Id INTEGER PRIMARY KEY, nome TEXT, email TEXT, sexo TEXT, date TEXT);"
  );
});

export default db;
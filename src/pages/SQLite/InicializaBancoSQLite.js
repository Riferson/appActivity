import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('appActivity.db');

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS Pessoas (Id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, sexo TEXT, date TEXT);"
  );
});

export default db;
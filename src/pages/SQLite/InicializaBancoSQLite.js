import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('appActivity.db');

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS Pessoas (Id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, sexo TEXT, date TEXT, telefone TEXT);",
    [],
    () => {
      console.log("Tabela 'Pessoas' criada com sucesso.");
    },
    (error) => {
      console.log("Erro ao criar tabela 'Pessoas':", error);
    }
  );
});

export default db;
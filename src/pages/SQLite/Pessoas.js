import  db from '../SQLite/InicializaBancoSQLite';





db.transaction((tx) => {
  
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Pessoas (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, sexo TEXT, date TEXT);"
    );
  });
  
  /**
   * CRIAÇÃO DE UM NOVO REGISTRO
   * - Recebe um objeto;
   * - Retorna uma Promise:
   *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
   *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
   */
  const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Pessoas (id, nome, email, sexo, date) VALUES (?,?, ?, ?, ?);",
          [obj.id, obj.nome, obj.email, obj.sexo,obj.date],
          //-----------------------
          (_, { rowsAffected, insertId }) => {
            if (rowsAffected > 0) resolve(insertId);
            else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  
  const update = (id, obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "UPDATE pessoas SET id=?, nome=?, email=?, sexo = ?, date = ? WHERE id=?;",
          [obj.brand, obj.model, obj.hp, id],
          //-----------------------
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) resolve(rowsAffected);
            else reject("Error updating obj: id=" + id); // nenhum registro alterado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  
  
  const find = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM pessoas WHERE id=?;",
          [id],
          //-----------------------
          (_, { rows }) => {
            if (rows.length > 0) resolve(rows._array[0]);
            else reject("Obj not found: id=" + id); // nenhum registro encontrado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
   const findByBrand = (nome) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "SELECT * FROM pessoas WHERE nome LIKE ?;",
          [nome],
          (_, { rows }) => {
            if (rows.length > 0) resolve(rows._array);
            else reject("Obj not found: brand=" + nome); // nenhum registro encontrado
          },
          (_, error) => reject(error) 
        );
      });
    });
  };
  
  const all = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
          tx.executeSql(
          "SELECT * FROM pessoas;",
          [],
           (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  const remove = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM pessoas WHERE id=?;",
          [id],
          //-----------------------
          (_, { rowsAffected }) => {
            resolve(rowsAffected);
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  
  export default {
    create,
    update,
    find,
    findByBrand,
    all,
    remove,
  };
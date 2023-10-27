import db from '../SQLite/InicializaBancoSQLite';
import * as FileSystem from 'expo-file-system';

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Pessoas (nome, email, sexo, date) VALUES (?, ?, ?, ?);",
        [obj.nome, obj.email, obj.sexo,obj.date],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj));
        },
        (_, error) => reject(error)
      );
    });
  });
};

const exportDb = async () => {
  const documentDirectory = FileSystem.documentDirectory;
  const sourceDatabasePath = documentDirectory + 'SQLite/appActivity.db';
  const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(sourceDatabasePath, {
          encoding: FileSystem.EncodingType.Base64
        });

        await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, "appActivity.db", 'application/octet-stream')
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
          })
          .catch((e) => console.log(e));
          alert("Banco exportado com sucesso!");
      } else {
        console.log("Permission not granted");
      } 
};


const validationDb = async () => {
  const query = "SELECT COUNT(*) AS count FROM Pessoas";

  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, { rows }) => {
          const count = rows.item(0).count;
          resolve(count > 0);
        },
        (_, error) => {
          console.error("Erro ao verificar se a tabela tem dados:", error);
          resolve(false); 
        }
      );
    });
  });
};

const clearTable = async () => {
  const clearTableQuery = "DELETE FROM Pessoas";

  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        clearTableQuery,
        [],
        (_, { rowsAffected }) => {
          alert("Dados limpos com sucesso!");
          resolve(true);
        },
        (_, error) => {
          console.error("Erro ao excluir dados da tabela Pessoas:", error);
          resolve(false);
        }
      );
    });
  });
};

export default {
  create,
  clearTable,
  validationDb,
  exportDb,
};
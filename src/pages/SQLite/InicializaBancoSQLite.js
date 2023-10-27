import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('appActivity.db');

export default db
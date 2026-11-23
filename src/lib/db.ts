import {DatabaseSync} from "node:sqlite";
import path from "node:path";

const dbPath = path.join(process.cwd(),"data.db");
export const db = new DatabaseSync(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS steps(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    seq INTEGER NOT NULL,
    type TEXT NOT NULL,
    payload TEXT NOT NULL
 )
`) ;
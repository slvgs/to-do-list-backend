import { knex } from "knex"

export abstract class BaseDataBase{

    protected static connection  = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/to-do-list.db", //localização do seu arquivo .db
        },
        useNullAsDefault: true, // definirá NULL quando encontrar valores undefined
        pool: {
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run('PRAGMA foreign_key = ON', cb)
            }
        } // número de conexões, esses valores são os recomendados para sqlite3
    })

}

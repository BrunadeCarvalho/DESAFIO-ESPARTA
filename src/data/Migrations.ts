import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase{

    createTables = async () =>{
        await BaseDatabase.connection.raw

        (`
            CREATE TABLE Projects(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL, 
                description TEXT NOT NULL
            );
            
            CREATE TABLE Tasks(
                id VARCHAR(255) PRIMARY KEY,
                description TEXT NOT NULL,
                deadline DATE NOT NULL,
                status VARCHAR(255) NOT NULL,
                id_project VARCHAR(255) NOT NULL,
                FOREIGN KEY (id_project) REFERENCES Projects(id) 
                ON DELETE CASCADE
                ON UPDATE CASCADE
            );
        `)
        .then(()=>{
            console.log("Tables created successfully!");
            
        }).catch((error:any)=> console.log(error.sqlMessage || error.message))
    }
}

const migrations = new Migrations()
migrations.createTables()
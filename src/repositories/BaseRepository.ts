import {Connection, createConnection, MysqlError} from "mysql";
import dotenv from "dotenv";


dotenv.config();

export class BaseRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: Number(process.env.DB_PORT),
            insecureAuth: true, // The server doesn't use SSL
        });
    }

    public openConnection(): void {
        this.connection.connect((error: MysqlError) => {
            if (error) {
                console.log(`Error connecting to the database: ${error}`);
            } else {
                console.log("Database connected successfully");
            }
        });
    }

    public closeConnection(): void {
        this.connection.end();
    }

    public async executeNonQuery(query: string, params?: any[]): Promise<void> {
        try {
            this.openConnection();
            await new Promise<void>((resolve, reject) => {
                this.connection.query(query, params, (error: any) => {
                    if (error) {
                        console.error(`Error executing query: ${error}`);
                        reject(new Error("Error executing query"));
                    } else {
                        console.log("Query executed successfully");
                        resolve();
                    }
                });
            });
        } finally {
            this.closeConnection();
        }
    }

    public async executeQuery(query: string, params?: any[]): Promise<any[]> {
        try {
            this.openConnection()
            return await new Promise<any[]>((resolve, reject) => {
                this.connection.query(query, params, (error: any, results: any) => {
                    if (error) {
                        reject(new Error("Error executing query"));
                    } else {
                        resolve(results);
                    }
                });
            });
        } finally {
            this.closeConnection();
        }
    }
}
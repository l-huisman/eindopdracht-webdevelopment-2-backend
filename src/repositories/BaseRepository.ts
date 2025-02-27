import {Connection, createConnection} from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export class BaseRepository {
    private connection: Connection | null = null;

    public async executeNonQuery(query: string, params?: any[]): Promise<void> {
        await this.openConnection();
        try {
            await this.connection!.execute(query, params);
            console.log("Query executed successfully");
        } catch (error) {
            console.error(`Error executing query: ${error}`);
            throw new Error("Error executing query");
        } finally {
            await this.closeConnection();
        }
    }

    public async executeQuery(query: string, params?: any[]): Promise<any[]> {
        await this.openConnection();
        try {
            const [results] = await this.connection!.execute(query, params);
            return results as any[];
        } catch (error) {
            console.error(`Error executing query: ${error}`);
            throw new Error("Error executing query");
        } finally {
            await this.closeConnection();
        }
    }

    private async openConnection(): Promise<void> {
        if (!this.connection) {
            this.connection = await createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                port: Number(process.env.DB_PORT),
                insecureAuth: true, // The server doesn't use SSL
            });
            console.log("Database connected successfully");
        }
    }

    private async closeConnection(): Promise<void> {
        if (this.connection) {
            await this.connection.end();
            this.connection = null;
        }
    }
}
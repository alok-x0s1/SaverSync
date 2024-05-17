import { Client, Databases } from "appwrite";
import conf from "../conf/conf";


export class Service {
    client = new Client();
    database;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);

        this.database = new Databases(this.client);
    }
}
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

    async createExpense ({title, amount, content, userId, slug, status = 'active'}) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    amount,
                    content,
                    userId,
                    status,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createExpense :: error : ", error);
        }
    }

    async updateExpense (slug, {title, amount, content}) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    amount,
                    content,
                    updatedAt: new Date().toISOString()
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updateExpense :: error : ", error);
        }
    }

    async deleteExpense (slug) {
        try {
            return await this.database.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: deleteExpense :: error : ", error);
        }
    }

    async getExpense (slug) {
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getExpense :: error : ", error);
        }
    }

    async getExpenses () {
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID
            )
        } catch (error) {
            console.log("Appwrite service :: getExpenses :: error : ", error);
        }
    }
}

const service = new Service()
export default service
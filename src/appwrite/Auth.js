/* eslint-disable no-useless-catch */
import {Client,Account,ID} from "appwrite"
import conf from "../conf/conf"

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const user = await this.account.create(ID.unique(),email,password,name)
            if(user){
                return this.login({email,password})
            } else {
                return user
            }
        } catch (error) {
            throw error
            // console.log("Appwrite seriver :: createAccount :: error", error);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
            // console.log("Appwrite seriver :: login :: error", error);
        }
    }

    async getUser(){
        try {
            return await this.account.get()
            // else console.log("Appwrite seriver :: getUser :: error not loggedIn", );
        } catch (error) {
            // throw error;
            console.log("Appwrite seriver :: getUser :: error", error);
        }

        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite seriver :: logout :: error", error);
        }
    }

}

const authService = new AuthService()

export default authService;
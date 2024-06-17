import {Client,ID, Databases,Storage, Query} from "appwrite"
import conf from "../conf/conf"

export class ConfigService {
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)

        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,{
                    Title:title, Content:content, FeaturedImage:featuredImage, Status:status, UserID:userID
                }
            )
        } catch (error) {
            console.log("Appwrite seriver :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,{
                    Title:title, Content:content, FeaturedImage:featuredImage, Status:status
                }
            )
        } catch (error) {
            console.log("Appwrite seriver :: updatePost :: error", error);
        }
    }

    async deletePost(Slug){
        try {
            this.database.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Slug
            )
            return true
        } catch (error) {
            console.log("Appwrite seriver :: deletePost :: error", error);
            return false
        }
    }

    async getPost(Slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Slug
            )

        } catch (error) {
            console.log("Appwrite seriver :: getPost :: error", error);
        }
    }

    async getPosts(){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                [Query.equal("Status","active")]
            )

        } catch (error) {
            console.log("Appwrite seriver :: getPosts :: error", error);
        }
    }

    // file functions

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite seriver :: uploadFile :: error", error);
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            )

            return true
        } catch (error) {
            console.log("Appwrite seriver :: deleteFile :: error", error);
            return false
        }
    }

    showPrev(fileID){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketID,
                fileID
            )

        } catch (error) {
            console.log("Appwrite seriver :: showPrev :: error", error);
        }
    }


}

const configService = new ConfigService()

export default configService;
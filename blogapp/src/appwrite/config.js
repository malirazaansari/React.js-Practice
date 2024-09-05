import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      this.databases.getDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getDocuments() :: ", error);
      return false;
    }
  }
  async getPosts(quries = [Query.equal("status", "active")]) {
    try {
      this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        quries
      );
    } catch (error) {
      console.log("Appwrite service :: listDocuments() :: ", error);
      return false;
    }
  }
  async createPost({ slug, title, content, status, userId, featuredImage }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          userId,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createDocument() :: ", error);
      return false;
    }
  }
  async updatePost(slug, { title, content, status, featuredImage }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
        }
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: updateDoucment() :: ", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: deleteDocument() :: ", error);
      return false;
    }
  }

  // storage service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: deleteFile() :: ", error);
      return false;
    }
  }
}

const service = new Service();

export default service;

import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("67fda26d000facbfce42")
    .setPlatform("com.ponydude.bookshelf");

export const account = new Account(client);

export const avatars = new Avatars(client);

export const databases = new Databases(client);

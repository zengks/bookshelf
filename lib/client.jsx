import { Client, Account } from "react-native-appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("67fda26d000facbfce42")
    .setPlatform("com.ponydude.bookshelf");

export default client;

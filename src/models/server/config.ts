import env from "@/app/env";
import { Client, Avatars, Storage, Databases, Users } from "node-appwrite";

const client = new Client()
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apikey);

const avatars = new Avatars(client);
const storage = new Storage(client);
const databases = new Databases(client);
const users = new Users(client);

export { client, avatars, storage, databases, users };

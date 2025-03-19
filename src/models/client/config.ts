import env from "@/app/env";
import { Client, Account, Avatars, Storage, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId);

const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const databases = new Databases(client);

export { client, account, avatars, storage, databases };

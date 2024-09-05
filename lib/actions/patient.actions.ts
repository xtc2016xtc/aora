"use server"

import { BUCKET_ID,DATABASE_ID,ENDPOINT,PATIENT_COLLECTION_ID,PROJECT_ID,databases,storage,users } from "@/lib/appwrite.config";
import {ID, Query} from "node-appwrite";
import {parseStringify} from "@/lib/utils";

export const createUser = async (user:CreateUserParams) => {
    try {
        const newuser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        )

        return parseStringify(newuser);
    }catch (error:any) {
        if(error && error?.code === 409) {
            const existingUser = await users.list([
                Query.equal("email",[user.email]),
            ])
            return existingUser.users[0]
        }
        console.error("账户创建错误",error)
    }
}
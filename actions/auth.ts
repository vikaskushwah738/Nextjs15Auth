"use server";

import {signIn, signOut} from "@/lib/auth"
import { revalidatePath } from "next/cache"

export const login = async (provider: string) => {
    await signIn(provider,{redirectTo: "/"});
    revalidatePath("/");
}

export const logout = async (provider: string) =>{
    await signOut({redirectTo: "/"});
    revalidatePath("/");
}
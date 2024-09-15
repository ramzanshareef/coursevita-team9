"use server";

import { auth } from "@clerk/nextjs/server";

export async function isAuth() {
    const { userId } = auth();
    return userId !== null ? true : false;
}
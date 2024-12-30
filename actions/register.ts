"use server"

import bcrypt from 'bcryptjs'

import { RegisterFieldsValue, RegisterSchema } from "@/schemas"
import { prisma } from '@/prisma/prisma';


export const register = async (data: RegisterFieldsValue) => {
    try {

        const validatedData = RegisterSchema.parse(data)

        if (!validatedData) {
            return { error: "invalid input data" }
        }

        const { email, name, password, passwordConfirmation } = validatedData;

        if (password !== passwordConfirmation) {
            return { error: "Password do not match" }
        }

        const hashPasswrod = await bcrypt.hash(password, 10)

        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (userExists) {
            return { error: "Email already is in use, please try another one." }
        }

        const lowerCaseEmail = email.toLowerCase()

        const user = await prisma.user.create({
            data: {
                email: lowerCaseEmail,
                name,
                password: hashPasswrod
            }
        })



        return { sucess: "Email Verified was sent", user }

    } catch (error) {

        console.error("Database error", error)

        if ((error as { code: string }).code === "ETIMEDOUT") {
            return {
                error: "Unable to connect to the database. Please try again later.",
            };
        } else if ((error as { code: string }).code === "503") {
            return {
                error: "Service temporarily unavailable. Please try again later.",
            };
        } else {
            return { error: "An unexpected error occurred. Please try again later." };
        }

    }
}
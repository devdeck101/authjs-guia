import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"


import { db as prisma} from "@/lib/db"

import bcrypt from "bcrypt"


export const authOptions : NextAuthOptions = {
    // @see https://github.com/prisma/prisma/issues/16117
    // @ts-ignore
    adapter: PrismaAdapter(prisma as any),
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_CLIENTID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials, req) : Promise<any>{

                console.log("Authorize method", credentials)


                if(!credentials?.email || !credentials?.password) throw new Error("Dados de Login necessarios")

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials?.email
                    }
                })

                console.log("USER", user)

                if(!user || !user.hashedPassword) {
                    throw new Error("Usuários não registrado através de credenciais")
                }

                const matchPassword = await bcrypt.compare(credentials.password, user.hashedPassword)
                if(!matchPassword)
                    throw new Error("Senha incorreta")

                return user



            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.SECRET,
    debug: process.env.NODE_ENV === "development",
    pages: {
        signIn: "/login"
    }
}
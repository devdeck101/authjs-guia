import { Metadata } from "next";

import Link from "next/link";
import { Command } from "lucide-react";
import { UserRegisterForm } from "@/components/user-register-auth";
import AuthButton from "@/components/auth-button";

export const metadata: Metadata = {
  title: "Autenticação",
  description:
    "Autenticação utilizando Shadcs-ui Next-Auth (Authjs), prisma e Nextjs 13.4+",
};

export default async function Register() {
  return (
    <div className="container relative py-48 md:py-0  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <AuthButton page="register" />
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Command className="mr-2 h-6 w-6" /> DeveloperDeck101
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Esta apicação é um guia para utilização do Next-Auth
              (Authjs) em conjunto com Prisma (MongoDB) e NextJs 13.4+.&rdquo;
            </p>
            <footer className="text-sm">Bruno Kilian</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar Conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Entre com seus dados
            </p>
          </div>
          <UserRegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { getCurrentUser } from "@/lib/session";
import ClientComponentAuth from "@/components/client-component-auth";
import ServerComponentAuth from "@/components/server-component-auth";

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <>
      <section className="space-y-2 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="flex gap-2">
            {" "}
            <Link
              href={"https://twitter.com/devdeck101"}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no Twitter
            </Link>
            <Link
              href={"https://www.instagram.com/developerdeck101_"}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no Instagram
            </Link>
            <Link
              href={"https://www.tiktok.com/@developerdeck101"}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no TikTok
            </Link>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            O melhor de Next.js 13, Next-Auth, Prisma e Shadcn-ui.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Canal YT @DeveloperDeck101 está focado no conteúdo mais atualizado
            de desenvolvimento web. Me segue nas redes sociais e compartilha.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Entrar
            </Link>
            <Link
              href="https://github.com/devdeck101"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
            {user !== undefined && (
              <Link
                href="/api/auth/signout"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Sair
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            {/* Components */}
            <ClientComponentAuth />
            <ServerComponentAuth />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Tech Stack
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Este projeto traz várias bibliotecas em um aplicativo moderno, com
            recursos atualizados do Next.js 13 e utilizando a melhor "não"
            biblioteca do momento shadcn/ui.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  Diretório App, Roteamento, Layouts, Pages e API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">React 18</h3>
                <p className="text-sm">Server e Client Components.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Banco de Dados</h3>
                <p className="text-sm text-muted-foreground">
                  ORM usando Prisma e Mongodb.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Components</h3>
                <p className="text-sm text-muted-foreground">
                  Componentes Shacn/ui usandoRadix UI e Tailwind CSS
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Authenticação usando NextAuth.js (Authjs) e páginas
                  personalizadas.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                className="h-12 w-12 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.80493 9.01975C9.12793 10.0357 8.51893 11.0527 8.14493 11.7197L7.20593 10.7447C6.62179 10.1277 6.62179 9.16175 7.20593 8.54475C7.48241 8.25472 7.86523 8.09003 8.26593 8.08875H10.4509C10.2329 8.38775 10.0159 8.69975 9.80493 9.01975Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.98 14.1947C13.964 14.8717 12.947 15.4807 12.28 15.8547L13.255 16.7937C13.872 17.3778 14.838 17.3778 15.455 16.7937C15.7451 16.5172 15.9097 16.1344 15.911 15.7337V13.5487C15.612 13.7667 15.3 13.9837 14.98 14.1947Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.84944 13.7299C8.14227 13.437 8.14217 12.9621 7.84922 12.6693C7.55626 12.3764 7.08139 12.3765 6.78856 12.6695L7.84944 13.7299ZM4.46956 14.9895C4.17673 15.2824 4.17683 15.7573 4.46978 16.0501C4.76274 16.343 5.23761 16.3429 5.53044 16.0499L4.46956 14.9895ZM9.58856 15.4708C9.88133 15.1778 9.88112 14.7029 9.5881 14.4101C9.29508 14.1174 8.82021 14.1176 8.52744 14.4106L9.58856 15.4708ZM7.36944 15.5696C7.07667 15.8626 7.07688 16.3375 7.3699 16.6303C7.66292 16.923 8.13779 16.9228 8.43056 16.6298L7.36944 15.5696ZM8.67469 11.1847C8.38144 10.8922 7.90657 10.8928 7.61403 11.186C7.32149 11.4793 7.32206 11.9541 7.61531 12.2467L8.67469 11.1847ZM10.217 13.7827L10.748 13.253L10.7467 13.2517L10.217 13.7827ZM11.753 16.3844C12.0456 16.6776 12.5204 16.6782 12.8137 16.3857C13.1069 16.0931 13.1075 15.6183 12.815 15.325L11.753 16.3844ZM9.82849 7.66439C9.59747 8.00819 9.68889 8.47418 10.0327 8.7052C10.3765 8.93623 10.8425 8.84481 11.0735 8.50101L9.82849 7.66439ZM12.269 5.9517L11.7896 5.37492C11.7788 5.38393 11.7682 5.39325 11.7578 5.40286L12.269 5.9517ZM18.906 5.0937L19.6523 5.01934C19.6169 4.66393 19.3358 4.38281 18.9804 4.34739L18.906 5.0937ZM18.048 11.7317L18.5968 12.2429C18.6065 12.2325 18.6159 12.2218 18.625 12.2109L18.048 11.7317ZM15.4987 12.9272C15.1549 13.1582 15.0635 13.6242 15.2945 13.968C15.5255 14.3118 15.9915 14.4032 16.3353 14.1722L15.4987 12.9272ZM11.3302 17.2111C11.6232 16.9183 11.6233 16.4434 11.3304 16.1505C11.0376 15.8575 10.5627 15.8574 10.2698 16.1503L11.3302 17.2111ZM7.94978 18.4693C7.65683 18.7621 7.65673 19.237 7.94956 19.5299C8.24239 19.8229 8.71726 19.823 9.01022 19.5301L7.94978 18.4693ZM16.8613 8.19903C17.1542 7.90614 17.1542 7.43126 16.8613 7.13837C16.5684 6.84548 16.0936 6.84548 15.8007 7.13837L16.8613 8.19903ZM14.5637 8.37537C14.2708 8.66826 14.2708 9.14314 14.5637 9.43603C14.8566 9.72892 15.3314 9.72892 15.6243 9.43603L14.5637 8.37537ZM6.78856 12.6695L4.46956 14.9895L5.53044 16.0499L7.84944 13.7299L6.78856 12.6695ZM8.52744 14.4106L7.36944 15.5696L8.43056 16.6298L9.58856 15.4708L8.52744 14.4106ZM7.61531 12.2467L9.68731 14.3137L10.7467 13.2517L8.67469 11.1847L7.61531 12.2467ZM9.68603 14.3124L11.753 16.3844L12.815 15.325L10.748 13.253L9.68603 14.3124ZM11.0735 8.50101C11.564 7.7711 12.1366 7.09988 12.7802 6.50053L11.7578 5.40286C11.0303 6.08042 10.383 6.83923 9.82849 7.66439L11.0735 8.50101ZM12.7484 6.52848C12.9533 6.35813 13.3056 6.19347 13.8133 6.06099C14.3092 5.9316 14.8943 5.8478 15.5113 5.80023C16.7457 5.70506 18.0326 5.76038 18.8316 5.84L18.9804 4.34739C18.1134 4.26101 16.7363 4.20134 15.396 4.30467C14.7256 4.35635 14.0456 4.45017 13.4346 4.60959C12.8355 4.76593 12.2392 5.00126 11.7896 5.37492L12.7484 6.52848ZM18.1597 5.16806C18.2393 5.96713 18.2946 7.25397 18.1995 8.48855C18.1519 9.10561 18.0681 9.69077 17.9387 10.1868C17.8062 10.6947 17.6415 11.0473 17.471 11.2525L18.625 12.2109C18.9985 11.7611 19.2338 11.1647 19.3901 10.5655C19.5495 9.95438 19.6433 9.27429 19.695 8.60384C19.7984 7.26343 19.7387 5.88627 19.6523 5.01934L18.1597 5.16806ZM17.4992 11.2205C16.8998 11.8641 16.2286 12.4367 15.4987 12.9272L16.3353 14.1722C17.1605 13.6177 17.9193 12.9704 18.5968 12.2429L17.4992 11.2205ZM10.2698 16.1503L7.94978 18.4693L9.01022 19.5301L11.3302 17.2111L10.2698 16.1503ZM15.8007 7.13837L14.5637 8.37537L15.6243 9.43603L16.8613 8.19903L15.8007 7.13837Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Estrutura de Projeto</h3>
                <p className="text-sm text-muted-foreground">Bora organizar.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Ótimo para se atualizar nas tecnologias do momento.
          </p>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Código será disponibilizado
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Ajudem meu canal a crescer. Basta compartilhar, comentar e deixar
            seus likes O código logo será disponibilizado no{" "}
            <Link
              href={"https://github.com/devdeck101"}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}

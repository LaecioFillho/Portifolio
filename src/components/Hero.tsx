import { HiDownload } from "react-icons/hi"

export default function Hero() {
  return (
    <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-2 md:p-4 py-12 md:flex-row md:mx-20">
          <div className="p-6 md:p-10">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-normal">
                Laecio
              </span>
              <span className="font-headline text-5xl font-light text-blue-400">
                Filho
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-blue-800" />
              Desenvolvedor Web Full-Stack
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-left">
              Sou um desenvolvedor Front-End e Back-End que ama criar aplicações web de interesse e facilitação no desenvolvimento tecnológico para o mercado comercial. Atualmente trabalho como freelancer, transformando ideias em sites e aplicações web.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="#contact"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
              >
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <a
                href="../public/curriculum/profile.pdf"
                download="ProfileLaecio.pdf"
                rel="external"
                target="_blank"
                className="button flex items-center gap-2 hover:bg-blue-400"
              >
                <HiDownload />
                Baixe meu Curriculo
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </>
  )
}

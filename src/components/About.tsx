export default function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative text-blue-900 font-bold z-10">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Já foram mais de 10 projetos que saíram da imaginação sendo executados com sucesso e gostaria que o próximo projeto seja o seu!
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100" />
      </div>

      <div className="relative mx-auto my-10 max-w-lg">
        <div className="relative bg-blue-100 w-full rounded-lg p-4 ps-20 md:h-auto md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-3">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Sou o</span>
              <span className="font-headline font-bold uppercase text-blue-900 text-justify">Francisco Laécio</span>
              <span> tenho 23 anos, sou do interior do Ceará, formado em Técnico em Edificações pelo Instituto Federal de Educação, Ciências e Tecnologias (IFCE), atualmente cursando a graduação de Tecnologia em Automação Industrial, também pelo IFCE.</span>
            </p>
            <p className="mt-4 font-headline font-semibold flex items-center gap-2">
              Disponivel para projetos:
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
              </span>
            </p>

          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(./assets/profileImage.JPG)] bg-cover bg-center md:-left-7 md:-top-2 md:h-64 md:w-52">
          </div>

        </div>
      </div>
      <div className="absolute left-1/3 mt-6 h-3 w-1/3 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </section>
  )
}

import Image from "next/image";

export default function Profile() {
  return (
    <div className="container mx-auto pb-10">
      <div className="mt-5 p-5 flex flex-row bg-gray-200 rounded-[50px] justify-between items-center">
        <div className="mx-10">
          <Image
            src="/profile-image.png"
            width="937"
            height="939"
            alt="Guilherme"
            className="rounded-full"
          />
        </div>
        <p className="m-5 text-gray-600 text-[25px] text-justify font-sans">
          Guilherme Augusto tem 30 anos, Designer Gráfico mora em Belo Horizonte
          atualmente cursa Marketing Digital. Desde 2011 trabalha com
          audiovisual. Apaixonado pela criação e animação, resolveu se aventurar
          participando com histórias de seus clientes. Já trabalhou em varias
          empresas de Belo Horizonte na área de educação, tais como: Pró-labore,
          Mega Concursos, DPC Cursos Jurídicos, ESA / OAB-MG. Hoje é sócio da
          Ival Cursos Online.
        </p>
      </div>
    </div>
  );
}
import Image from "next/image";

export default function Profile() {
  return (
    <div className="px-3 md:px-0 container mx-auto pb-10">
      <div className="mt-5 p-5 flex flex-col md:flex-row bg-gray-200 rounded-[50px] justify-between items-center">
        <div className="mx-10">
          <Image
            src="/profile-image.png"
            width="937"
            height="939"
            alt="Guilherme"
            className="rounded-full object-contain md:object-scale-down"
          />
        </div>
        <p className="m-5 text-gray-600 text-[20px] md:text-[25px] text-justify font-sans">
          Guilherme Augusto é Designer Gráfico, mora em Belo Horizonte e
          atualmente cursa Marketing Digital, mas desde 2011 trabalha com
          audiovisual. Apaixonado pela criação e animação, resolveu se aventurar
          participando com as histórias dos seus clientes. Já trabalhou em
          várias empresas de Belo Horizonte na área de educação, tais como:
          Pró-labore, Mega Concursos, DPC Cursos Jurídicos, ESA / OAB-MG. Hoje é
          sócio da Ival Cursos Online.
        </p>
      </div>
    </div>
  );
}

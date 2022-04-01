import Image from "next/image";

type Info = {
  image: string;
  profile: string;
  whatsapp: string;
  email: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
};

interface ProfileProps {
  info: Info;
}

export default function Profile({ info }: ProfileProps) {
  return (
    <div className="px-3 md:px-0 container mx-auto pb-10">
      <div className="mt-5 p-5 flex flex-col md:flex-row bg-gray-200 rounded-[50px] justify-between items-center">
        <div className="mx-10">
          <Image
            src={info.image}
            width="940"
            height="940"
            alt="Guilherme Augusto"
            className="rounded-full object-contain md:object-scale-down"
          />
        </div>
        <p className="m-5 text-gray-600 text-[20px] md:text-[25px] text-justify font-sans">
          {info.profile}
        </p>
      </div>
    </div>
  );
}

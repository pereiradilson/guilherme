import { FiChevronDown } from "react-icons/fi";

import Videos from "../Videos";
import Arts from "../Arts";
import Logos from "../Logos";
import Profile from "../Profile";

type Video = {
  id: string;
  image: string;
  description: string;
  videoUrl: string;
  typeVideo: string;
};

type Art = {
  id: string;
  description: string;
  image: string;
};

type Logo = {
  id: string;
  description: string;
  image: string;
};

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

interface ContentProps {
  videos: Video[];
  arts: Art[];
  logos: Logo[];
  info: Info;
}

export default function Content({ videos, arts, logos, info }: ContentProps) {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col content-center items-center">
          <p className="text-blue-900 text-2xl font-semibold mt-5 font-sans">
            Trabalhos Recentes
          </p>
          <div className="mt-5">
            <FiChevronDown className="text-3xl text-blue-900 font-black" />
          </div>
        </div>

        <div className="text-blue-900 text-xl md:text-2xl font-semibold mt-5 pl-10 font-sans">
          Alguns dos meus vídeos editados...
        </div>

        <Videos videos={videos} />

        <div className="text-blue-900 text-xl md:text-2xl font-semibold mt-5 pl-10 mt-10 font-sans">
          Artes visuais para social mídias...
        </div>

        <Arts arts={arts} />

        <div className="text-blue-900 text-xl md:text-2xl font-semibold mt-5 pl-10 mt-10 font-sans">
          Logomarcas personalizadas...
        </div>

        <Logos logos={logos} />

        <div className="text-blue-900 text-xl md:text-2xl font-semibold mt-5 pl-10 mt-10 font-sans">
          Quem é o <span className="font-bold">Guilherme Augusto?</span>
        </div>

        <Profile info={info} />
      </div>
    </div>
  );
}

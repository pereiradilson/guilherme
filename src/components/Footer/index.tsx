import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

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

interface FooterProps {
  info: Info;
}

export default function Footer({ info }: FooterProps) {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear.toString());
  }, []);

  function formatWhatsAppNumber() {
    return info.whatsapp.replace(/\D/g, "");
  }

  return (
    <>
      <div className="bg-sky-800">
        <div className="container mx-auto p-10">
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="flex flex-col mr-0 md:mr-10">
              <p className="text-white text-2xl mb-5 font-semibold font-sans text-center md:text-left">
                Contato
              </p>
              <p className="text-white text-sm font-sans text-center md:text-left">
                <Link
                  legacyBehavior
                  href={`https://api.whatsapp.com/send?phone=55${formatWhatsAppNumber()}`}
                >
                  <a target="_blank">{info.whatsapp}</a>
                </Link>
              </p>
              <p className="text-white text-sm font-sans text-center md:text-left">
                <Link legacyBehavior href={`mailto:${info.email}`}>
                  <a target="_blank">{info.email}</a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white text-2xl mb-5 font-sans font-semibold">
                Redes Sociais
              </p>
              <div className="flex flex-row justify-between gap-2">
                <SocialIcon
                  url={info.facebook}
                  fgColor="#FFF"
                  target="_blank"
                  title="Facebook"
                />
                <SocialIcon
                  url={info.twitter}
                  fgColor="#FFF"
                  target="_blank"
                  title="Twitter"
                />
                <SocialIcon
                  url={info.instagram}
                  fgColor="#FFF"
                  target="_blank"
                  title="Instagram"
                />
                <SocialIcon
                  url={info.youtube}
                  fgColor="#FFF"
                  target="_blank"
                  title="Youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sky-900">
        <div className="container mx-auto">
          <div className="flex flex-row justify-center p-5">
            <p className="text-white font-sans font-semibold">
              Guilherme editor e ilustrador - {currentYear}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

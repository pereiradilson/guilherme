import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setCurrentYear(currentYear.toString());
  }, []);

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
                <Link href="https://api.whatsapp.com/send?phone=+553192985315">
                  <a target="_blank">(31)992985315</a>
                </Link>
              </p>
              <p className="text-white text-sm font-sans text-center md:text-left">
                <Link href="mailto:guiplayaudiovisual@gmail.com">
                  <a target="_blank">guiplayaudiovisual@gmail.com</a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white text-2xl mb-5 font-sans font-semibold">
                Redes Sociais
              </p>
              <div className="flex flex-row justify-between gap-2">
                <SocialIcon
                  url="https://www.facebook.com/guiplayaudiovisual/"
                  fgColor="#FFF"
                  target="_blank"
                  title="Facebook"
                />
                <SocialIcon
                  url="https://twitter.com/GuiPlay85334705"
                  fgColor="#FFF"
                  target="_blank"
                  title="Twitter"
                />
                <SocialIcon
                  url="https://www.instagram.com/guiplayaudiovisual/"
                  fgColor="#FFF"
                  target="_blank"
                  title="Instagram"
                />
                <SocialIcon
                  url="https://www.youtube.com/channel/UC-jNjCy6ESNdaAkSGoEhb2g"
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

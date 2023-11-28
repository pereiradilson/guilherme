import { useState } from "react";
import Image from "next/image";

import Modal from "../Modal";

interface LandpagePros {
  src: string;
  alt: string;
  link_url: string;
}

export default function Landpage(props: LandpagePros) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <Image
          className="rounded-lg cursor-pointer"
          src={props.src}
          alt={props.link_url}
          width="320"
          height="213"
          onClick={() => setOpen(true)}
        />
      </div>

      <Modal
        path={props.src}
        typeModal="photo_link"
        description={props.alt}
        showModal={open}
        setShowModal={setOpen}
        link_url={props.link_url}
      />
    </>
  );
}

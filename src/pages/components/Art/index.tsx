import { useState } from "react";
import Image from "next/image";

import Modal from "../Modal";

interface ArtPros {
  src: string;
  alt?: string;
  type?: string;
}

export default function Art(props: ArtPros) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <Image
          className="rounded-lg cursor-pointer"
          src={`/${props.src}`}
          alt={`/${props.alt}`}
          width="320"
          height="213"
          onClick={() => setOpen(true)}
        />
      </div>

      <Modal
        path={props.src}
        typeVideo={props.type}
        show={open}
        setShow={setOpen}
      />
    </>
  );
}

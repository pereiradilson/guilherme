import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";

interface VideoProps {
  src: string;
  alt?: string;
  videoUrl: string;
  typeVideo?: string;
}

export default function Video(props: VideoProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <Image
          className="rounded-lg cursor-pointer"
          src={`/${props.src}`}
          alt={`/${props.alt}`}
          width="640"
          height="427"
          onClick={() => setOpen(true)}
        />
      </div>

      <Modal
        path={props.videoUrl}
        typeVideo={props.typeVideo}
        show={open}
        setShow={setOpen}
      />
    </>
  );
}

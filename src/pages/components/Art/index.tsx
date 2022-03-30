import Image from "next/image";

interface ArtPros {
  src: string;
  alt?: string;
}

export default function Art(props: ArtPros) {
  return (
    <div className="overflow-hidden">
      <Image
        className="rounded-lg"
        src={`/${props.src}`}
        alt={`/${props.alt}`}
        width="320"
        height="213"
      />
    </div>
  );
}

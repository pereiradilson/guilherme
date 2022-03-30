import Image from "next/image";

export default function Header() {
  return (
    <div className="container mx-auto flex flex-col items-center my-10">
      <Image
        src="/logo-horizontal.png"
        alt="Guilherme"
        width="310"
        height="92"
      />
    </div>
  );
}

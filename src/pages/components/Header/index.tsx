import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto flex flex-col items-center my-10">
      <Link href="/">
        <a>
          <Image
            src="/logo-horizontal.png"
            alt="Guilherme"
            width="310"
            height="92"
          />
        </a>
      </Link>
    </div>
  );
}

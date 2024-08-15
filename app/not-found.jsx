/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div>
      <h1 className="my-6 text-center text-clip">On est perdu ?</h1>
      <div className="container mx-auto flexMid">
        <Image
          src="/images/labyrinthe.jpg"
          alt="labyrinthe"
          width={800}
          height={500}
          className="object-contain"
        />
      </div>
      <Link href="/">
        <h3 className="my-4 text-center text-clip">Retour à l'accueil !?! ICI</h3>
      </Link>
    </div>
  );
}

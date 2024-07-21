import Link from "next/link";

export default function LegalAndContact() {
  return (
    <div className="w-full p-4">
      <div className="flex">
        <h3 className="hidden text-clip sm:block">Compagnon de Com&apos;</h3>
      </div>
      <Link href="about" className="w-fit">
        <h4 className="mb-4 sm:mt-12 hover:underline w-fit">Qui suis-je ?</h4>
      </Link>
      <h4 className="mt-0 mb-2 ">
        <u>Contact :</u>
      </h4>
      <a href="mailto:contact@ducompagnon.fr">
        <h5>contact@ducompagnon.fr</h5>
      </a>

      <h5 className="mt-12">
        2024 &copy; Christophe Chiappetta - Tous droits réservés
      </h5>
    </div>
  );
}

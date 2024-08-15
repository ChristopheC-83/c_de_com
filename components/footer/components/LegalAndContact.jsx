import Link from "next/link";

export default function LegalAndContact() {
  return (
    <div className="w-full p-4">
      <div className="flex">
        <Link href="/">
          <h3 className="hidden text-clip sm:block">Compagnon de Com&apos;</h3>
        </Link>
      </div>
      <Link href="about_me" className="w-fit">
        <h4 className="mb-4 sm:mt-12 hover:underline w-fit">Qui suis-je ?</h4>
      </Link>
      <Link href="/contactez_moi">
        <h4 className="mt-0 mb-2 ">
          <u>Contact :</u>
        </h4>
      </Link>
      <Link href="mailto:contact@ducompagnon.fr">
        <h5>contact@ducompagnon.fr</h5>
      </Link>
      <a href="tel:0699812296">
        {" "}
        <b>06.99.81.22.96</b>
      </a>

      <h5 className="mt-12">
        2024 &copy; Christophe Chiappetta - Tous droits réservés
      </h5>
      <div className="flex gap-x-2">
        <Link href="/legal">
          <h5 className="">Mentions Légales</h5>
        </Link>
        <h5>/</h5>
        <Link href="/credits">
          <h5 className="">Crédits images</h5>
        </Link>
      </div>
    </div>
  );
}

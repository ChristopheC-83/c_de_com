import { Separator } from "@/components/ui/separator";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Price() {
  return (
    <div
      className={`container px-4 mt-0 overflow-x-hidden xs:px-6 md:px-8 min-h-[350px] pb-10`}
    >
      <div className="flex items-center justify-between my-6">
        <div className="gap-4 px-5 py-2 mx-auto my-3 rounded-full flexMid bg-neutral-50/50 shadow_spectre">
          <h2 className="pb-3 text-clip w-fit ">Et combien ça coûte ? </h2>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder gap-4 bg-neutral-50">
        <h3 className={`text-clip py-4`}>
          Réponse de circonstance... ça dépend !{" "}
          <span className="text-white">😅</span>
        </h3>
        <p className="text-justify">
          Le tarif de votre site web dépend effectivement de <b>plusieurs facteurs </b>: <br />
          le nombre de pages, le type de site, les fonctionnalités, le design,
          les besoins de maintenance etc.
        </p>
        <p>
          Au final, <b>la quantité de travail demandée</b> ! Pas plus pas moins que
          pour n'importe quelle prestation.
        </p>
        <p><u><b>À noter :</b></u><br /> je ne propose que des sites <b>"faits main"</b> ! <br /> <b>Pas de sites préconçus</b> de type WordPress ou équivalent.  <br />Chaque couleur, bordure, cadre, arrondi... pourra être modifié à volonté pour un <b>rendu unique</b> !</p>

        <Link
          href="/contact"
          className="p-4 mx-auto mt-3 mb-5 text-white duration-200 rounded-full shadow-lg bg-clip hover:opacity-80 w-fit"
        >
          <h4 className={`w-fit`}>
            Je vous propose un devis gratuit et sans engagement.
          </h4>
        </Link>
        <Separator />
        <p>
          <b>Pour débrousailler le sujet : </b>
        </p>
        <p>
          Comptez environ <b>1200€ HT</b> pour un{" "}
          <Link href="/prices#price_static">
            <b>
              <u>site statique</u>
            </b>
          </Link>{" "}
          de 3 pages de contenu.
          <br />
          Suffisant pour montrer à vos clients vos compétences !
        </p>
        <br />
        <p>
          Pour un{" "}
          <Link href="/prices#price_dynamic">
            <u>
              <b>site dynamique</b>
            </u>
          </Link>
          , administrable, ou couplé à un second site d'adminitration, comptez
          environ <b>2500€ HT</b>. <br />
          Là, vous pourrez gérer vos contenus, vos produits, vos clients, vos
          collaborateurs et leurs droits.
        </p>
        <br />
        <p>
          Sur ces bases, plus vous rajouterez d'options, comme pour une voiture,
          plus le devis montera. <br />
          Rien de surprenant !{" "}
        </p>
        <h5>
          Mon engagement reste, et restera, que votre site soit unique et vous
          ressemble. <br /> Le prix devra savoir se faire oublier une fois la
          prestation réalisée.
        </h5>
        <Link
          href="/prices"
          className="p-4 mx-auto mt-3 mb-5 text-white duration-200 rounded-full shadow-lg bg-clip hover:opacity-80 w-fit"
        >
          <h4 className={`w-fit`}>
            Les tarifs en détails, c'est par ici !
          </h4>
        </Link>
      </div>
    </div>
  );
}

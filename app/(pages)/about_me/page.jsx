/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import avatar from "@/public/images/about_me/avatar.png";
import { LuArrowRightCircle } from "react-icons/lu";

export default function About() {
  const arrow = (
    <LuArrowRightCircle className="inline-block w-6 h-6 pb-1 flip_hover filterShadow" />
  );

  return (
    <div className="container">
      <h1 className="my-6 text-clip w-fit">Qui suis-je ? </h1>
      <div className="flex w-full gap-4 md:gap-8 max-md:flex-col">
        <div className="flex-col">
          <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6">
            <h4>
              Vous cherchez un ingénieur de 20 d'expérience dans le domaine de
              l'informatique !?!
            </h4>
            <br />
            <p>Désolé de vous décevoir 😅 ! Sincèrement !</p>
            <br />
            <p>
              Je vous propose, en toute transparence, une expérience très
              différente !
            </p>
          </div>

          <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6">
            <h4>
              Plus qu'une longue expérience en informatique, je mets à votre
              disposition :
            </h4>
            <br />
            <p>{arrow} 10 ans de commerce spécialisé en tant que cadre </p>
            <p>
              (responsable de magasin jusqu'à 20 personnes / chef de secteur
              dans la grande distribution spécialisée)
            </p>
            <br />
            <p>{arrow} 10 années de services en tant qu'indépendant</p>
            <p>(essentiellement menuisier d'agencement / poseur de cuisine)</p>
            <br />
            <p>et évidemment un peu d'informatique ! </p>
            <p>{arrow} 3 ans de formations, d'attestations, de diplômes...</p>
            <p>Je n'arrive pas les mains vides quand même !</p>
          </div>

          <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6">
            <h4>Quel intérêt ?</h4>
            <br />
            <p>
              Je ne me limite pas aux contraintes et à la technique du code
              informatique.
            </p>
            <p>
              Comme le nom de ce site le suggère, je suis là pour vous
              accompagner dans votre projet.
            </p>
            <br />
            <p>
              Mon objectif n'est en aucun cas de vous faire un site internet
              mais d'être votre compagnon dans cette étape supplémentaire du
              parcours de votre entreprise.
            </p>
            <p>
              Etre votre associé pour créer cette vitrine, cet outil qui
              montrera à tous vos clients potentiels ce que vous proposez, ce
              dont vous êtes capables.
            </p>
            <br />
            <p>
              Lors de la construction de ce projet, je vous solliciterai, vous
              montrerai les avancées, corrigerai (dans la limite du raisonnable
              😉), vous ferai des proposition.
            </p>
            <p>Bien évidemment, vous aurez le dernier mot!</p>
          </div>
        </div>

        <div className="relative sm:py-4 lg:py-5 xl:py-6 sm:mb-5 md:mb-6">
          <div className="rounded-full sm:sticky customShadow customBorder w-fit h-fit sm:top-5 flip_hover">
            <Image
              src={avatar}
              alt="christophe c."
              width={250}
              height={250}
              className="object-contain rounded-full "
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6">
        <h3 className="mx-auto w-fit text-clip">
          Avant de se lancer, le mieux est de communiquer !
        </h3>
        <br />
        <p> N'hésitez pas à me contacter !</p>
        <p> Un mail, un petit coup de téléphone !</p>
        <br />
        <h4>J'ai même mieux !</h4>
        <br />
        <p>
          Si vous êtes dans ma zone (Ales / Arles / Monpellier / Remoulin), je
          me ferai un plaisir de passer vous voir !
        </p>
        <p>
          Nous souhaitons une communication digitale... OUI, mais au profit des
          relations humaines !
        </p>
        <br />
        <p>Le déplacement sera facturé à hauteur de : 1 café !</p>
        <p>Le temps de dégrossir votre projet et faire connaissance.</p>
        <br />
        <h4>N'hésitez pas, contactez-moi !</h4>
      </div>
      {/* <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6">
        <h3>Avant tout, quels sont vos besoins ? Quel est votre profil ?</h3>
        <br />
        <h4>Votre prestation est basée sur le service ?</h4>
        <p>
          Vous êtes dans un métier intellectuel ? Notaire, avocat, comptable...
        </p>
        <p>Vous réalisez des prestations de services ? Artisans, coach...</p>
        <h5>Un site dit "statique" pourrait vous convenir !</h5>
        <p>
          Une fois en place, il servira de vitrine de votre savoir faire auprès
          de vos clients potentiels
        </p>
        <br />
        <h4>
          Vous proposez des produits ? Un blog ? Il faut de la nouveauté, de la
          création... de l'administration !
        </h4>
        <p>
          A ce moment là, un site administrable ou un jeu de 2 sites (un pour
          les clients, un pour l'administration) sont des solutions à votre
          activité.
        </p>
        <h5>Nous parlerons ici de site "dynamique" !</h5>
        <br />
        <h3>Mais tout cela semble compliqué !</h3>
        <p>Et bien non !</p>
        <h5>Je suis là pour vous accompagner !</h5>
      </div> */}
    </div>
  );
}

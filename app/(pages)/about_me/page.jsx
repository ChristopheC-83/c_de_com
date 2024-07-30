/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import avatar from "@/public/images/about_me/avatar.png";
import { LuArrowRightCircle } from "react-icons/lu";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const arrow = (
    <LuArrowRightCircle className="inline-block w-6 h-6 pb-1 flip_hover filterShadow" />
  );

  const [time, setTime] = useState(0);

  useEffect(() => {
    // Fonction pour calculer le temps écoulé en années
    const calculateTime = () => {
      const startDate = new Date('2021-09-01');
      const now = new Date();
      const diff = now - startDate; // Différence en millisecondes

      const years = diff / (1000 * 60 * 60 * 24 * 365.25); // Conversion en années
      setTime(years+0.5);
    };

    // Calcul initial
    calculateTime();

    // Mettre à jour chaque seconde
    const intervalId = setInterval(calculateTime, 1000);

    // Nettoyage de l'intervalle quand le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1 className="my-6 text-clip w-fit">Qui suis-je ? </h1>
      <div className="flex w-full gap-4 md:gap-8 max-md:flex-col">
        <div className="flex-col">
          <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6 bg-clip-opacity-white">
            <h3 className={`text-clip w-fit`}>
              Vous cherchez un ingénieur de 20 d'expérience dans le domaine de
              l'informatique !?!
            </h3>
            <br />
            <p>Désolé de vous décevoir 😅 ! Sincèrement !</p>
            <br />
            <h4 className={`text-center`}>
              Je vous propose, en toute transparence, une expérience très
              différente !
            </h4>
          </div>

          <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6 bg-clip-opacity-white">
            <h3 className={`text-clip w-fit`}>
              Plus qu'une longue expérience en informatique, je mets à votre
              disposition :
            </h3>
            <br />
            <h4>{arrow} 10 ans de commerce spécialisé en tant que cadre </h4>
            <p>
              (responsable de magasin jusqu'à 20 personnes / chef de secteur
              dans la grande distribution spécialisée)
            </p>
            <br />
            <h4>{arrow} 10 années de services en tant qu'indépendant</h4>
            <p>(essentiellement menuisier d'agencement / poseur de cuisine)</p>
            <br />
            <p>et évidemment un peu d'informatique ! </p>
            <Link href="https://parcours.ducompagnon.fr/certif" target="_blank" >
              <h4>{arrow} {time.toFixed(0)} ans de formations de développeur web, d'attestations, de diplômes, de projets...</h4>
            </Link>
            <p>Je n'arrive pas les mains vides quand même !</p>
            <br />
            <h4 className={`text-center`}>
              Voilà donc ma proposition !  Pas que de la tech !<br />
              Mais également une vue commerciale <br /> et un savoir-être au service
              des clients.
            </h4>
          </div>

          <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6 bg-clip-opacity-white">
            <h3 className={`text-clip w-fit`}>Quel intérêt ?</h3>
            <br />
            <p>
              Je ne me limite pas aux contraintes et à la technique du code
              informatique.
            </p>
            <p>
              Comme le nom de ce site le suggère, <b>
                je suis là pour vous
                accompagner dans votre projet.
              </b>
            </p>
            <br />
            <p>
              Mon objectif n'est en aucun cas de vous faire un site internet
              mais d'être votre compagnon dans cette étape supplémentaire du
              parcours de votre entreprise.
            </p>
            <p>
              Etre votre <b>associé pour créer cette vitrine</b>, cet outil qui
              montrera à tous vos clients potentiels ce que vous proposez,<br /> <b>
                ce
                dont vous êtes capables.
              </b>
            </p>
            <br />
            <p>
              Lors de la construction de ce projet, je vous solliciterai, vous
              montrerai les avancées, corrigerai (dans la limite du raisonnable
              😉), vous ferai des proposition.
            </p>
            <p>Bien évidemment, vous aurez le dernier mot!</p>
            <br />
            <h4 className={`text-center`}>Pour un site qui vous ressemble car vous aurez participé à sa création !</h4>
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
      <div className="w-full p-3 mb-4 md:grow customShadow customBorder rounded-xl sm:p-4 lg:p-5 xl:p-6 sm:mb-5 md:mb-6 bg-clip-opacity-white">
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
          Si vous êtes dans ma zone (Ales / Arles / Monpellier / Remoulin), <b>
            je
            me ferai un plaisir de passer vous voir !
          </b>
        </p>
        <p>
          Nous souhaitons une <b>communication digitale</b>... OUI, mais au profit des
          <b> relations humaines !</b>
        </p>
        <br />
        <p><b>Le déplacement sera facturé à hauteur de : 1 café !</b></p>
        <p>Le temps de dégrossir votre projet et faire connaissance.</p>
        <br />
        <h4 className={`text-center`}>N'hésitez pas !</h4>
        <Link href="/contact">
              <h4
                className={`px-4 py-0.5 text-white rounded-full w-fit mx-auto bg-clip hover:opacity-80 duration-200 my-4`}
              >
                Contactez-moi !
              </h4>
            </Link>
      </div>
     
    </div>
  );
}

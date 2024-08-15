/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
export const faqItems = [
  {
    id: 1,
    title: "Qui suis-je pour avoir votre confiance ?",
    text: (
      <>
        <b>10 ans cadre</b> dans le commerce puis <b>10 ans</b> dans la
        prestation de
        <b> services</b>.
        <br />
        Développeur Web depuis 3 ans. <br />
        Plus que mes métiers, j'ai toujours eu à coeur de{" "}
        <b>satisfaire mes clients.</b>
        <br />
        J'ai toujours tenu mes <b>engagements</b>.
        <br />
        Je fais ce que je dis, je dis ce que je fais.
        <br />
        Pas de surprise, des résultats puis un suivi.
        <br />
        <Link href="/about_me">
          <u>
            <b>En savoir plus sur moi.</b>
          </u>
        </Link>
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: "Et en cas de problème après la mise en ligne ?",
    text: (
      <>
        Pour ce qui est de la prise en main de votre site, vous aurez{" "}
        <b>une notice explicative</b> et je reste disponible pour vous
        accompagner le cas échéant.
        <br />
        Pendant un mois complet, je corrige (évidemment <b>gratuitement</b>) les bugs
        éventuels qui seraient passés à travers les mailles du filet.
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: "Je souhaite faire évoluer mon site, comment ça se passe ?",
    text: (
      <>
        En fonction de la demande, je vous propose un devis pour{" "}
        <b>les mises à jour</b>.
        <br />
        Familier avec le code, le projet, la proposition sera adaptée. 
        <b> Nous ne repartons pas de zéro.</b>
        <br />
      </>
    ),
  },

  {
    id: 4,
    title:
      "J'ai besoin d'une évolution constante, d'un suivi, on fait comment ?",
    text: (
      <>
        Pas de soucis !<br />
        Nous déterminons ensemble la charge de travail mensuelle et mettons en
        place un <b>abonnement</b>.
        <br />
        Vous savez que tous les mois, par exemple, vous avez droit à 1 journée
        (plus ? moins ?) sur votre site pour qu'<b>
          il s'adapte en permanence à vos
          besoins.
        </b>
        <br />
        Et si besoin, en cours de route, nous ajusterons.
        <br />
        <b>Un contrat c'est bien, un partenariat c'est mieux !</b><br />
      </>
    ),
  },
  {
    id: 5,
    title: "Et si d'autres développeurs doivent accéder au code du site ?",
    text: (
      <>
        Après règlement complet de la facture, le code vous appartient !<br />
        <b>Vous en avez la propriété intellectuelle. </b><br />
        Quelqu'un doit venir y mettre son nez ?<br />
        J'aurai fait en sorte qu'il soit documenté et facile à comprendre.
        <br />
        Et en cas de besoin, je reste disponible pour répondre à ses questions.
        <br />
        Je me répète, <b>votre satisfaction est ma priorité.</b>
        <br />
      </>
    ),
  },
  {
    id: 6,
    title: "J'ai besoin de toi sur site pendant plusieurs jours.",
    text: (
      <>
        En restant dans ma zone de chalandise, <b>je peux me déplacer avec plaisir</b>.
        <br />
        Entre Nîmes et Montpellier et de Arles à Alès je suis à votre
        disposition.
        <br />
        Soit pour faire un point de vive voix sur votre projet,
        <br />
        soit pour travailler sur place, potentiellement auprès de votre équipe.
        <br />
        A l'heure du télétravail, un peu de <b>relation humaine</b> ne fera de mal à
        personne !<br />
      </>
    ),
  },
];

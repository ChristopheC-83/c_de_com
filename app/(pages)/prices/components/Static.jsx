/* eslint-disable react/no-unescaped-entities */
export default function StaticPrice() {
  return (
    <div className="container">
      <div
        className={`flex flex-col justify-between p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white mx-auto gap-y-3 my-8 md:my-12`}
      >
        <h3 className="mx-auto w-fit text-clip">Site Statique</h3>
        <p>
          <b>Il sera donc plus ou moins figé.</b> <br />
          Chaque modification devra être le fruit de quelqu'un qui mettra les
          mains dans le code ! <br />
          Mais l'objectif d'un tel site n'est pas d'évoluer fréquemment !
        </p>
        <p>
          <b>Pendant 1 mois, je m'engage à :</b> <br />
          - Corriger des bugs qui seraient apparus (ou qui m'auraient échappé 🫣)
          <br />
          - Modifier des éléments qui ne vous conviendraient pas (dans le texte
          ou les images essentiellement, et ce dans la limite de 3 heures)
          <br />
        </p>
        <p>
          Par la suite, <b>si vous avez des besoins d'évolution</b>, dès le règlement
          complet de votre facture, le code vous appartient ! <br />Libre à vous de
          faire des modifications ou de les faire faire ! <br />
          Pour ma part,<b> je reste disponible</b> pour des prestations
          complémentaires. <br />
          Vous m'avais confiance pour la création de votre site, vous pouvez me
          faire confiance pour son évolution et ma retenue quant à la
          facturation de ces modifications ou nouvelles fonctionnalités.
        </p>
        <p>
          Un partenariat sous la forme d'un abonnement annuel peut être mis en
          place si vous en ressentez le besoin.
        </p>
        <h5>
          En résumé, pour : <br />
          <br />
          - 1 site qui s'adapte sur les écrans de PC et smartphones <br />
          - 3 pages vitrines de votre activité (avec
          photos/carroussel/animations sobres) <br />
          - 1 page de mentions légales <br />
          - 1 page "à propos" de présentation
          <br />- inclusion de vos photos ou de photos d'illustration libres de
          droit <br />- développement en Nextjs (pour la rapidité et le
          référencement) <br />
          <br />
        </h5>
        <h4  className={`text-center`}>
          <u>Nous partons, dans ce cas, sur une base de 1200€ HT.</u>
        </h4>
        <h5 className={`text-center my-4`}>
          La gestion du nom de domaine, de l'hébergement et du déploiement <br />
          peuvent se faire dans le cadre d'une prestation complémentaire.
        </h5>
      </div>
    </div>
  );
}

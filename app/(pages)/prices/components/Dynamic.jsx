/* eslint-disable react/no-unescaped-entities */

export default function DynamicPrice() {
  return (
    <div className="container">
      <div
        className={`flex flex-col justify-between p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white mx-auto gap-y-3 my-8 md:my-12`}
      >
        <h3 className="mx-auto w-fit text-clip">Site Dynamique</h3>

        <p>
          <b>La tarification exacte d'un tel projet peut être plus complexe.</b>
          <br />
          Il dépendra de vos besoins, de vos envies, de vos contraintes, de vos
          objectifs...
        </p>
        <p>
          Par exemple, si vous êtes seul maître à bord ou si vous avez des
          collaborateurs avec des droits à gérer... <br />
          Si les utilisateurs / clients peuvent interagir avec votre site...{" "}
          <br />
          par des messages, des commentaires, des achats, des réservations...
        </p>
        <p>Autant de "détails" qui n'en sont pas finalement !</p>
        <h5>
          En résumé, pour : <br />
          <br />
          - 1 site qui s'adapte sur les écrans de PC et smartphones <br />
          - 3 pages administrables de votre activité (avec
          photos/carroussel/animations sobres) <br />
          - dans ces 3 pages, possibilité de gérer des articles... <br />
          ce qui peut créer un grand nombre de pages (mais c'est vous qui les
          feraient... facilement en plus 😉 !) <br />
          - 1 page de mentions légales <br />
          - 1 page "à propos" de présentation
          <br />- inclusion de vos photos ou de photos d'illustration libres de
          droit, modifiables par vos soins ! <br />- développement en Symfony{" "}
          <br />
          ou <br />- un site vitrine en Nextjs et une administration séparée en
          symfony ou php.
          <br />
          <br />
        </h5>
        <h4  className={`text-center`}>
          <u>Nous partons, ici, sur une base de 2500€ HT</u>
        </h4>
        <h5 className={`text-center my-4`}>
          La gestion du nom de domaine, de l'hébergement et du déploiement <br />
          peuvent se faire dans le cadre d'une prestation complémentaire.
        </h5>
      </div>
    </div>
  );
}

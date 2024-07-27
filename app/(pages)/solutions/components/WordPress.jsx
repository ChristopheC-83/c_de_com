/* eslint-disable react/no-unescaped-entities */
export default function WordPress() {
  return (
    <div className={`container mx-auto`}>
      <h1 className={`text-clip w-fit mx-auto my-10`}>Un site préconçu ?</h1>
      <div className="flex flex-col w-full h-auto mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder gap-4 bg-neutral-50">
        <h3 className={`text-center`}>Je ne propose pas ces services ! </h3>
        <h4 className="mb-4 text-center">(au moins c'est dit !😉)</h4>
        <p>
          <b>
            Mais par soucis de transparence et pour que vous ayez toutes les
            informations pour faire votre choix, <br />
            il existe d'autres possibilités :
          </b>
        </p>
        <h4>Les sites WordPress :</h4>
        <p>
          C'est du Low-Code. <br />
          Comprenez qu'avec une formation, vous pourrez faire votre site
          vous-même ! <br />
          WordPress est un caisse de pièces de Lego. <br />
          <b>Avantage : </b> relativement facile à prendre en main, autonomie.
          <br />
          <b>Inconvénients : </b> les pièces fonctionnelles sont souvent
          payantes, mise à jour régulière, <br />
          complexes à personnaliser comme on le souhaiterait.
        </p>
        <br />
        <h4>Les sites faits avec Wix et autres :</h4>
        <p>
          Là, c'est du no-code ! <br />
          Nous n'avons plus des pièces de Lego mais des Playmobil ! <br />
          Encore plus facile à mettre en place, mais avec plus de restrictions.{" "}
          <br />
        </p>

        <h4 className={`text-center`}>
          Finalement, toujours la même question et les mêmes dilemnes... <br />
          d'un coté de la balance : l'argent, <br />
          de l'autre : le temps et l'énergie ! <br />
        </h4>
      </div>
    </div>
  );
}

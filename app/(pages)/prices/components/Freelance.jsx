/* eslint-disable react/no-unescaped-entities */

export default function Freelance() {
  return (
    <div className="container">
      <div
        className={`flex flex-col justify-between p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white mx-auto gap-y-3 my-8 md:my-12`}
      >
        <h3 className="mx-auto w-fit text-clip">
          Petit arrangement entre amis...
        </h3>

        <p>
          Au cas où vous ne le sauriez pas, je suis à mon compte... et alors ?
        </p>
        <p>
          Et alors ? je connais vos problématiques. <br />
          Et si je ne peux pas toutes les résoudre, je peux en résoudre quelques
          unes !
        </p>
        <p>
          L'amortissement !!! <br />
          Et oui, quand on fait un investissement de plus de 500€ pour son
          entreprise, ça passe en charge sur plusieurs années. <br />
          J'ai horreur de ne pas pouvoir gérer mon budget comme je l'entends, je
          me doute que vous aussi ! <br />
          Au lieu de faire une facturation unique, je vous propose une facture
          unique de 490€ HT et le reste sous la forme d'abonnement sur plusieurs
          mois (jusqu'à 10) à votre convenance. Chaque facture sera du fait du
          développement de la maintenance de votre site. <br />
          Dès que le site est prêt, il est déployé. <br />
          Dès le paiement complété, au bout de l' "abonnement", le code vous
          appartient.
        </p>
      </div>
    </div>
  );
}

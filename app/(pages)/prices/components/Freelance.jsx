/* eslint-disable react/no-unescaped-entities */

import FrameSlideFromBottom from "@/components/commons/FrameSlideFromBottom";

export default function Freelance() {
  return (
    <FrameSlideFromBottom>
      <div className="container">
        <div
          className={`flex flex-col justify-between p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white mx-auto gap-y-3 my-8 md:my-12`}
        >
          <h3 className="mx-auto w-fit text-clip">
            Petit arrangement entre amis...
          </h3><br />
          <p>
            Au cas où vous ne le sauriez pas, je suis à mon compte... et alors ?
          </p>
          <p>
            Et alors ? je connais quelques unes de vos problématiques. <br />
            Et si je ne peux pas toutes les résoudre, je peux en résoudre quelques
            unes au moins !
          </p>
          <p>
            L'<b>amortissement</b> par exemple !!! <br />
            Et oui, quand on fait un investissement de plus de 500€ pour son
            entreprise, ça passe en charge sur plusieurs années. <br />
            J'ai horreur de ne pas pouvoir gérer mon budget comme je l'entends, je
            me doute que vous aussi ! <br />
            Au lieu de faire une facturation unique, je vous propose une facture
            unique de 490€ HT et le reste sous la forme d'abonnement sur plusieurs
            mois (jusqu'à 10) à votre convenance. Chaque facture sera du fait du
            développement de la maintenance de votre site. <br />
            <b>Dès que le site est prêt, il est déployé immédiatement.</b> <br />
            Dès le paiement complété, au bout de l' "abonnement", le code vous
            appartient.
          </p>
          <br />
          <p className={`mb-2`}>Autre cas de figure, si vous souhaitez <b>préserver votre trésorerie</b> et ne pas payer le site en une seule fois, le système d'abonnement vous permettra d'<b>étaler le règlement</b> de ma prestation en 3 ou 4 fois sans frais. Les modalités seront à déterminer ensemble pour être correctes et justes pour tout le monde.</p>
          <h5 class='text-center  my-4'>Comme d'habitude, tout est dans l'échange et la discussion ! </h5>
        </div>
      </div>
    </FrameSlideFromBottom>
  );
}

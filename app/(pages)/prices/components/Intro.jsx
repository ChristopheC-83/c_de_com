/* eslint-disable react/no-unescaped-entities */
export default function Intro() {
  return (
    <div className="container ">
      <div
        className={`flex flex-col justify-between p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white mx-auto gap-y-3 my-8 md:my-12`}
      >
        <h4 className={`textShadowClip text-center my-4`}>
          Vous avez déterminé ce dont vous aviez besoin ?
        </h4>
        <p>Si non, contactez moi ! On va mettre tout ça au clair.</p>
        <p>Si oui, continuons ensemble !</p>
        <p>
          Vous avez compris qu'un site statique de 3 à 5 pages sera une charge de
          développement beaucoup moins importante qu'un site dynamique.
        </p>
        <p>Voyons pourquoi !</p>
      </div>
    </div>
  );
}

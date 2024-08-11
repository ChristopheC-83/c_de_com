/* eslint-disable react/no-unescaped-entities */

import {thxPictures} from "@/datas/thx"

export default function Legal() {
  return (
    <div className={`container max-w-[600px]`}>
      <h1 className={`text-clip w-fit mx-auto md:mt-6`}>Mentions Légales</h1>
      <p className="text-center">En vigueur au 30/07/2024</p>
      <p className="my-8">
        Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour
        la Confiance en l’économie numérique, il est porté à la connaissance des
        utilisateurs et visiteurs, ci-après l' "Utilisateur", du site
        https://www.compagnondecom.fr/ , ci-après le "Site", les présentes
        mentions légales. La connexion et la navigation sur le Site par
        l’Utilisateur implique acceptation intégrale et sans réserve des
        présentes mentions légales. Ces dernières sont accessibles sur le Site à
        la rubrique "Mentions légales".
      </p>
      <h4 className={`my-8`}>EDITION DU SITE</h4>
      <p>
        L'édition du Site est assurée par la société eirl chiappetta, eirl au
        capital de 0 euros, immatriculée au Registre du Commerce et des Sociétés
        de 810767772 RCS Nîmes sous le numéro 810767772 dont le siège social est
        situé au 4 rue de l ile verte. 30420 Calvisson, - Numéro de téléphone :
        0699812296 - Adresse e-mail : christophe.chiappetta@gmail.com. - N° de
        TVA intracommunautaire : FR04810767772 - Directeur de la publication :
        Christophe CHIAPPETTA ci-après l'"Editeur".
      </p>
      <h4 className={`my-8`}>HEBERGEUR</h4>
      <p>
        L'hébergeur du Site est la société Vercel, dont le siège social est
        situé au 440 N Barranca Ave #4133 91723 Covina .
      </p>
      <h4 className={`my-8`}>ACCES AU SITE</h4>{" "}
      <p>
        Le Site est normalement accessible, à tout moment, à l'Utilisateur.
        Toutefois, l'Editeur pourra, à tout moment, suspendre, limiter ou
        interrompre le Site afin de procéder, notamment, à des mises à jour ou
        des modifications de son contenu. L'Editeur ne pourra en aucun cas être
        tenu responsable des conséquences éventuelles de cette indisponibilité
        sur les activités de l'Utilisateur. Toute utilisation, reproduction,
        diffusion, commercialisation, modification de toute ou partie du Site,
        sans autorisation expresse de l’Editeur est prohibée et pourra entraîner
        des actions et poursuites judiciaires telles que prévues par la
        règlementation en vigueur.
      </p>{" "}
      <br />
      <br /> Rédigé sur http://legalplace.fr
      <br />
      <br />
      <h4 className={`my-8`}>Remerciements</h4>{" "}
      <p>
        Les images d'illustrations proviennent du site{" "}
        <a href="http://unsplash.com" target="_blank" className="text-blue-500">Unplash</a>
      </p>
      <p>Les images utilisées sont de :</p>
      {thxPictures.map((item, index) => (
        <div key={index}>
          <p>{item.txt} ▶ <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">ICI</a></p>
        </div>
        
      ))}
     
    </div>
  );
}

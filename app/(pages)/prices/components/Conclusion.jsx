/* eslint-disable react/no-unescaped-entities */

import FrameSlideFromBottom from "@/components/commons/FrameSlideFromBottom";

export default function Conclusion() {
  return (
    <FrameSlideFromBottom>
      <div className={`container`}>
        <div
          className={`flex flex-col justify-between p-2 customBorder customShadow rounded-xl xs:p-3 md:p-4 max-md:w-full bg-clip-opacity-white mx-auto gap-y-3 my-8 md:my-12`}
        >
          <h2 className={`text-clip w-fit mx-auto md:mt-6`}>Pour conclure...</h2>
          <p>
            Je me doute bien que <b>tout ne peut pas être clair</b>, <br /> surtout dans
            <b> votre situation qui est unique</b> !
          </p>
          <p>
            Même si j'ai essayé de donner un maximum d'informations sans être trop
            long ou lourd, vous avez encore des questions.... <br />
            Et c'est bien normal !
          </p>
          <p><b>N'hésitez pas ! Contactez moi !</b> <br />
          <small>J'arrête de mettre le bouton/lien... ça fait trop là, non ? 😅</small></p>
          <p>
            Un petit mail ou même une discussion par téléphone pourra vous
            permettre d'<b>y voir plus clair</b>.
          </p>
          <p>
            Je suis là pour vous accompagner du début à la fin. <br />
            J'ai presque envie de dire : d'<b> 
              {" "} être votre partenaire avant même le
              début et jusqu'à après la fin !
            </b>
          </p>
        </div>
      </div>
    </FrameSlideFromBottom>
  );
}

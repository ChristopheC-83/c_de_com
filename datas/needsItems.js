
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { TbWritingSign } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";


export const needsItems = [

    {
        id : 1,
        icon1 : <FaUserTie />,
        icon2 : <FaUser />,
        icon3 : <GrUserWorker />,
        description:"<b>Vous souhaitez montrer votre savoir faire, vos compétences ?</b> <br><br> Vous êtes un freelance, indépendant ou artisan ?<br>Vous voulez promouvoir un évènement ponctuel ? <br><br> Même si vous montez en compétences avec l'acquisition d'expériences, votre site n'a pas besoin d'évoluer en permanence. <br><br>Des mises à jour peuvent parfois être nécessaires, mais elles sont ponctuelles.<br><br><b><u>Un site statique</u> est une solution adaptée à vos besoins.</b>",
        text_btn : "En savoir plus",
        href : "/solution_static",
    },
    {
        id : 2,
        icon1 : <TbWritingSign />,
        icon2 : <FaUsers />,
        icon3 : <LuRefreshCcw  />,
        description:"<b>Vous travaillez en équipe et/ou avez besoin de communiquer sur vos projets, vos nouveautés ?</b><br><br> Vos êtes créateur (contenu, artiste...), artiste ou commerçant ? Vous avez besoin d'interactivité ? Votre proposition commerciale évolue fréquemment ? <br><br>Votre site a besoin d'être alimenté et mis à jour régulièrement. Il pourrait même être complété par un collaborateur avec des droits spécifiques.<br><br> <b><u>Un site dynamique</u> ou un site couplé à une administration serait adapté à vos besoins.</b>",
        text_btn : "En savoir plus",
        href : "/solution_dynamic",
    },


]
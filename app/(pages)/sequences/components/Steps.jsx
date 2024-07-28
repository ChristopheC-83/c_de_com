import { sequences } from "@/datas/sequences";
import Frame from "../../solutions/components/Frame";



 export default function Steps() {



return (
    <div className={`container`}>

    {sequences.map((item, index) => (
        <Frame key={index} item={item} index={index} modulo={1}/>

    ))}

    </div>

  );

}
// import { CiSquarePlus } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";

type EquipmentProp = {
    text: string,
}

const Equipment = ({ text }: EquipmentProp) => {
    return(
        <li> <FaPlusSquare /> {text}</li>
    )
}

export default Equipment
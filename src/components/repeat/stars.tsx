import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

type starsProp = {
    rating: number,
}

const Stars = ({ rating }: starsProp) => {
    return(
        <>
        {Array.from({ length: 5 }, (_, i) =>
        i < rating ? <TiStarFullOutline key={i} /> : <TiStarOutline key={i} />
      )}
        </>
    )
}

export default Stars
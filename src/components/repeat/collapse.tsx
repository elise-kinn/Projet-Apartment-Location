import { useState } from 'react'; // pour déclarer une variable d'état

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

type CollapseProp = {
    title: string,
    children: React.ReactNode
}

const Collapse = ({ title, children }: CollapseProp) => {
    const [ open, setOpen ] = useState(false) // déclaration de la variable d'état useState(initialState)

    return(
        <section className='collapse'>
            <div>
                <button onClick={ () => setOpen(!open)}>
                    {title} { open ? <FaArrowUp /> : <FaArrowDown /> }
                </button>
                {open && <div className='collapse-content'>{children}</div>}
            </div>
        </section>
    )

}

export default Collapse
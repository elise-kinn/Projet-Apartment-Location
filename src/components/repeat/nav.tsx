import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <ul>
            <li><Link to={'/'}>Accueil</Link></li>
            <li><Link to={'/'}>À propos</Link></li>
            <li><Link to={'/'}>Contact</Link></li>
        </ul>
    )
}

export default Nav
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to='/'>Kasa</Link>
            <nav>
                <ul>
                    <li><Link to={'/'}>Accueil</Link></li>
                    <li><Link to={'/'}>À propos</Link></li>
                    <li><Link to={'/'}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
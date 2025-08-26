import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                <div>
                    <h2>À propos de Kasa</h2>
                    <Link to={'/'}>Notre histoire</Link>
                    <Link to={'/'}>Equipe</Link>
                    <Link to={'/'}>Carrières</Link>
                    <Link to={'/'}>Presse</Link>
                </div>
                <div>
                    <h2>Support</h2>
                    <Link to={'/'}>Centre d'aide</Link>
                    <Link to={'/'}>Nous contacter</Link>
                    <Link to={'/'}>Signaler un problème</Link>
                    <Link to={'/'}>Page 404</Link>
                </div>
                <div>
                    <h2>Légal</h2>
                    <Link to={'/'}>Conditions d'utilisation</Link>
                    <Link to={'/'}>Politiques de confidentialité</Link>
                    <Link to={'/'}>Mentions légales</Link>
                    <Link to={'/'}>Cookies</Link>
                </div>
                </div>
                <p>© 2024 Kasa. Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer
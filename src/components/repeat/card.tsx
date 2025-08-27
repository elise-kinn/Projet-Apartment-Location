import { Link } from 'react-router-dom'
import Stars from './stars';
import ArticleInfo from './articleInfo';

type CardProp = {
    img: string, 
    title: string, 
    location: string, 
    url: string,
    tags: string[], 
    rating: string
}

const Card = ({img, title, location, url, tags, rating}: CardProp) => {
    return (
        <Link to={url}>
            <article className='card-article'>
                <img src={img} />
                <div>
                    <ArticleInfo title={title} location={location} tags={tags}/>
                    <div className='rating-div'><Stars rating={parseInt(rating)}/><p>({rating})</p></div>
                </div>
            </article>
        </Link>
    )
}

export default Card
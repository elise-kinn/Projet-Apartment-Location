import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import Tag from './tag';
import Stars from './stars';

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
                    <h2>{title}</h2>
                    <p><CiLocationOn />{location}</p>
                    <div className='tags-div'>
                        {tags.map((el, i) => 
                            <Tag text={el} key={i}/>
                        )}
                    </div>
                    <div className='rating-div'><Stars rating={parseInt(rating)}/><p>({rating})</p></div>
                </div>
            </article>
        </Link>
    )
}

export default Card
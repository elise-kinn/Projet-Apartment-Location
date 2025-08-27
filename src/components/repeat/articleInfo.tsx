import { CiLocationOn } from "react-icons/ci";
import Tag from './tag';

type ArticleInfoProp = {
    title: string, 
    location: string, 
    tags: string[]
}

const ArticleInfo = ({title, location, tags}: ArticleInfoProp) => {
    return (
        <div className="article-info-div">
            <h2>{title}</h2>
            <div className="loc-div">
                <CiLocationOn />
                <p>{location}</p>
            </div>
            <div className='tags-div'>
                {tags.map((el, i) => 
                    <Tag text={el} key={i}/>
                )}
            </div>
        </div>
    )
}

export default ArticleInfo
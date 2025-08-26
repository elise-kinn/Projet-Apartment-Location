import Card from "../repeat/card"
import data from "../../data/logements.json";


const CardSection = () => {
    return(
        <section id="card-section">
            {data.map(logement => (
                    <Card 
                        img={logement.pictures[0]}
                        title={logement.title}
                        location={logement.location}
                        url={`/logement/${logement.id}`} 
                        tags={logement.tags}
                        rating={logement.rating}
                    />
                ))}
        </section>
    )
}

export default CardSection
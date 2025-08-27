import { useParams } from "react-router-dom";

import ArticleInfo from "../components/repeat/articleInfo";
import Collapse from "../components/repeat/collapse";

import data from "../data/logements.json"
import Equipment from "../components/repeat/equipment";

type LogementProp = {
  id: string,
  title: string,
  location: string,
  pictures: string[],
  host: { name: string; picture: string },
  description: string[],
  equipments: string[],
  tags: string[]
}

const logements: LogementProp[] = data as unknown as LogementProp[];

const Logement = () => {
    const { id } = useParams<{ id: string; }>();

    const logementData = logements.find(el => el.id === id);

    if (!logementData) return <p>Logement introuvable</p>;

    return (
        <>
            {/* <Carousel /> */}

            <section id="info">
                <ArticleInfo
                    title={logementData.title}
                    location={logementData.location}
                    tags={logementData.tags} 
                />
                <div id="host">
                    <img src={logementData.host.picture} alt="Host pic" />
                    <h2>{logementData.host.name}</h2>
                </div>
            </section>

            <Collapse title="Description" children={logementData.description}/>
            <Collapse title="Equipements" children={<ul id="equipment">{logementData.equipments.map((el) => <Equipment text={el}/>)}</ul>}/>

        </>
    );
};

export default Logement;
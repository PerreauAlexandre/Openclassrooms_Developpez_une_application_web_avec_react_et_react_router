import { useParams, Navigate } from 'react-router-dom'
import './FicheLogement.scss'
import logementsData from '../../data/logements.json'
import { Logement } from '../../type/type'
import Carousel from '../../components/Carousel/Carousel'
import Rating from '../../components/Rating/Rating'
import Accordion from '../../components/Accordion/Accordion'

function getLogement(
  logements: Logement[],
  logementId: string
): Logement | undefined {
  return logements.find((logement) => logement.id === logementId)
}

function FicheLogement() {
  const { logementId } = useParams<string>()
  if (!logementId) {
    return <Navigate to="/error" replace={true} />
  }
  const logement = getLogement(logementsData, logementId)

  return logement ? (
    <div id="fiche-logement">
      <Carousel pictures={logement.pictures} />
      <div className="logement-header">
        <div className="title-and-tags">
          <div className="title-and-location">
            <div className="title">{logement.title}</div>
            <div className="location">{logement.location}</div>
          </div>
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="host-and-rating">
          <div className="host">
            <div className="host-name">{logement.host.name}</div>
            <img
              src={logement.host.picture}
              alt="Photo de l'hôte"
              className="host-picture"
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="accordions">
        <Accordion
          title="Description"
          content={logement.description}
          accordionLarge={false}
        />
        <Accordion
          title="Équipements"
          content={logement.equipments}
          accordionLarge={false}
        />
      </div>
    </div>
  ) : (
    <Navigate to="/error" replace={true} />
  )
}

export default FicheLogement

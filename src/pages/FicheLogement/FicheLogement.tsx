import { useParams } from 'react-router-dom'
import './FicheLogement.scss'
import logementsData from '../../data/logements.json'
import { Logement } from '../../type'
import Carousel from '../../components/Carousel/Carousel'
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
    return <div>Logement ID manquant</div>
  }
  const logement = getLogement(logementsData, logementId)

  return logement ? (
    <div id='fiche-logement'>
      <Carousel pictures={logement.pictures} />
      <div>{logement.title}</div>
      <div>{logement.description}</div>
    </div>
  ) : (
    <div>Le logement recherché est introuvable</div>
  )
}

export default FicheLogement

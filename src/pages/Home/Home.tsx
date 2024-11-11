import { Link } from 'react-router-dom'
import './Home.scss'
import logementsData from '../../data/logements.json'
import { Logement } from '../../type'

function Home() {
  const logements: Logement[] = logementsData

  return (
    <div className="home-main-section">
      <div className="banner">Chez vous, partout et ailleurs</div>
      <ul className="card-section">
        {logements.map((logement) => (
          <li key={logement.id} className="card">
            <Link to={`/fiche-logement/${logement.id}`}>
              <div className='card-image'>
                <img src={logement.cover} alt={logement.title} />
              </div>
              <div className="title">{logement.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

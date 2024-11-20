import './Rating.scss'

type RatingProps = {
  rating: string
}

function Rating({ rating }: RatingProps) {
  const intRating: number = parseInt(rating, 10)
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-solid fa-star ${i < intRating ? 'star filled' : 'star'}`}
      ></i>
    )
  }

  return <div id="rating">{stars}</div>
}

export default Rating

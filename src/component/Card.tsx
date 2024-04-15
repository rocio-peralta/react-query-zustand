import { Repository } from '../hooks/types'
import { useFavoriteRepo } from '../store/favoriteRepo'


type CardProps = {
  repository: Repository
  isFavorite: boolean
}

function Card({ repository, isFavorite }: CardProps) {

  const addFavoriteRepo = useFavoriteRepo((state) => state.addFavoriteRepo)
  const removeFavoriteRepo = useFavoriteRepo((state) => state.removeFavoriteRepo)
  
  const toggleFavorite = ()=>{
    if (isFavorite) {
      removeFavoriteRepo(repository.id)
    } else {
      addFavoriteRepo(repository.id)
    }
  }
  return (
    <>
      <div>
        <div>
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
          <a href={repository.html_url}>Go to repo</a>
          <button style={{ border: '1px solid grey' }}
          onClick={toggleFavorite}>
            {isFavorite ? 'dislike' : 'Like'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Card

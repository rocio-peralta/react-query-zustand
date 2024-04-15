import { Repository } from '../hooks/types'

type CardProps = {
  repository: Repository
}

function Card({ repository }: CardProps) {
  return (
    <>
      <div>
        <div>
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
          <a href={repository.html_url}>Go to repo</a>
          <button style={{ border: '1px solid grey' }}>Add to favorite</button>
        </div>
      </div>
    </>
  )
}

export default Card

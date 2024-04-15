import './App.css'
import Card from './component/Card'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteRepo } from './store/favoriteRepo'

function App() {
  const { data, isLoading } = useFetchRepositories()
  const { favoriteRepoId } = useFavoriteRepo()
  if (isLoading) return <p>Loading...</p>

  return (
    <>
      {data?.map((respository) => (
        <Card
          key={respository.id}
          repository={respository}
          isFavorite={favoriteRepoId.includes(respository.id)}
        />
      ))}
    </>
  )
}

export default App

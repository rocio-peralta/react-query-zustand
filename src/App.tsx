import './App.css'
import Card from './component/Card'
import { useFetchRepositories } from './hooks/useRepos'

function App() {
  const { data, isLoading } = useFetchRepositories()
  if (isLoading) return <p>Loading...</p>

  return (
    <>
     {data?.map((respository, index) => (
      <Card key={index} repository = {respository}/>
     ))}
    </>
  )
}

export default App

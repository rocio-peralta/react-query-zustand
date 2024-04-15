import api from '../api/github'
import { useQuery } from '@tanstack/react-query'
import { Repository } from './types'

async function fetchRepos(): Promise<Repository[]> {
  const { data } = await api.get<Repository[]>('/users/rocio-peralta/repos')
  return data
}

export function useFetchRepositories() {
  return useQuery<Repository[], Error>({
    queryKey: ['repos'],
    queryFn: fetchRepos,
  })
}

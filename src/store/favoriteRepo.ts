import create from 'zustand'
type favoriteRepoState = {
  favoriteRepoId: number[]
  addFavoriteRepo: (id: number) => void
  removeFavoriteRepo: (id: number) => void
}

export const useFavoriteRepo = create<favoriteRepoState>((set) => ({
  favoriteRepoId: [],
  addFavoriteRepo: (id: number) =>
    set((state) => ({ favoriteRepoId: [...state.favoriteRepoId, id] })),
  removeFavoriteRepo: (id: number) =>
    set((state) => ({
      favoriteRepoId: state.favoriteRepoId.filter((repoId) => repoId !== id),
    })),
}))

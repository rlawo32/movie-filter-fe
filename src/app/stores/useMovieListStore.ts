import { create } from "zustand";

interface movieListStore {
    movieLogId:string;
    setMovieLogId: (movieLogId: string) => void;
}

const useMovieListStore = create<movieListStore>((set, get) => ({
    movieLogId: "",
    setMovieLogId: (movieLogId: string) => {
        set((state: {movieLogId: string}) => ({
            movieLogId: (state.movieLogId = movieLogId),
        }));
    },
    
}));

export default useMovieListStore;
export type { movieListStore };
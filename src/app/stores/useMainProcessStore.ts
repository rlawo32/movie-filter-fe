import { create } from "zustand";

interface mainProcessStore {
    process:number;
    setProcess: (process: number) => void;
    personnel: number;
    setPersonnel: (personnel: number) => void;
    motion: number;
    setMotion: (motion: number) => void;
    genre: number;
    setGenre: (genre: number) => void;
    clean: () => void;
}

const useMainProcessStore = create<mainProcessStore>((set, get) => ({
    process: 0,
    setProcess: (process: number) =>
        set((state: {process: number}) => ({
            process: (state.process = process),
        })),
    personnel: 0,
    setPersonnel: (personnel: number) =>
        set((state: {personnel: number}) => ({
            personnel: (state.personnel = personnel),
        })),
    motion: 0,
    setMotion: (motion: number) =>
        set((state: {motion: number}) => ({
            motion: (state.motion = motion),
        })),
    genre: 0,
    setGenre: (genre: number) =>
        set((state: {genre: number}) => ({
            genre: (state.genre = genre),
        })),
    clean: () => {
        set({process: 0});
        set({personnel: 0});
        set({motion: 0});
        set({genre: 0});
    },
}));

export default useMainProcessStore;
export type { mainProcessStore };
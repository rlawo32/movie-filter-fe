import { create } from "zustand";

interface mainProcessStore {
    process:number;
    setProcess: (process: number) => void;
    optionArr: {id:string; type:string; title:string}[];
    setOptionArr: (id:string, type:string, title:string) => void;
    optionClean: () => void;
}

const useMainProcessStore = create<mainProcessStore>((set, get) => ({
    process: 0,
    setProcess: (process: number) =>
        set((state: {process: number}) => ({
            process: (state.process = process),
        })),
    optionArr: [],
    setOptionArr: (id:string, type:string, title:string) =>
        set((state) => ({
            optionArr: [...state.optionArr, {id, type, title}],
        })),
    optionClean: () => {
        set({process: 0});
        set({optionArr: []});
    },
}));

export default useMainProcessStore;
export type { mainProcessStore };
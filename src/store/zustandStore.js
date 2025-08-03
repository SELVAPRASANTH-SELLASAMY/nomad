import { create } from "zustand";
export const useUser = create((set,get) => ({
    user: {},
    setUser: (userData) => set({user: {...get().user,...userData}}),
    removeUser: () => set({user: {}})
}));

export const useConfirm = create((set) => ({
    title: '',
    message: '',
    open: false,
    confirm: null,
    handleConfirm: (title='', message='') => {
        return new Promise((resolve) => set({
            title,
            message,
            open: true,
            confirm: (action) => {
                resolve(action);
                set({title: '', message: '', open: false});
            }
        }));
    }
}));

export const useAlert = create((set) => ({
    message: '',
    success: true,
    open: false,
    handleAlert: (message,success=true) => {
        set({message,success,open: true});
        setTimeout(() => set({message: '',open: false}),3000);
    }
}));

export const useNavControls = create((set) => ({
    display: false,
    handleDisplay: () => set(state => ({display: !state.display}))
}));

export const useLoading = create((set) => ({
    loading: false,
    handleLoading: (loading) => set({loading:loading})
}));
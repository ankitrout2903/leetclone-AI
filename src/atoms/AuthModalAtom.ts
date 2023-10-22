import {atom} from 'recoil';

type AuthModalState = {
    isOpen:boolean;
    type:'login' | 'register' | 'forgotpassword';

};

const initialAuthModalState: AuthModalState ={
    isOpen:false,
    type:'login',
};

export const authModalstate = atom<authModalState>({
    key:'authModalState'
})
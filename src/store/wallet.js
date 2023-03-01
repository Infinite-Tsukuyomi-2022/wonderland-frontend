import { createSlice } from "@reduxjs/toolkit";

const wallet = createSlice({
    name: 'wallet',
    initialState: {
        'status': 'disconnected',
        'walletAddress': null,
        'walletDisplay': null,
        'isNotFound': false,
        'hint': "Please Connect to Metamask first.",
    },
    reducers: {
        setWalletStatusConnected: (state) => {
            state.status = 'connected';
        },
        setWalletStatusDisconnected: (state) => {
            state.status = 'disconnected';
        },
        setWalletIsNotFound: (state) => {
            state.isNotFound = true;
        },
        setWalletIsFound: (state) => {
            state.isNotFound = false;
        },
        setWalletDisplay: (state, action) => {
            state.walletDisplay = action.payload;
        },
        setWalletAddress: (state, action) => {
            state.walletAddress = action.payload;
        },
        setHint: (state, action) =>{
            state.hint = action.payload;
        }
    }
});

export const { setWalletStatusConnected, setWalletStatusDisconnected, setWalletIsNotFound, setWalletIsFound, setWalletDisplay, setWalletAddress, setHint } = wallet.actions;
export default wallet.reducer;

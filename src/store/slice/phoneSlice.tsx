// ./src/features/phone/phoneSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhoneState {
    value: string;
}

const initialState: PhoneState = {
    value: '',
};

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setPhone } = phoneSlice.actions;

export default phoneSlice.reducer;

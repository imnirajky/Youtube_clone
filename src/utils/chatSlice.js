import { createSlice } from '@reduxjs/toolkit';


const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        chatMessages: [],
        showChat: true
    },
    reducers: {
        addChat: (state, action) => {
            if (state.chatMessages.length > 15) {
                state.chatMessages.splice(15, 1);
            }
            state.chatMessages.unshift(action.payload);
        }
    }
});


export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
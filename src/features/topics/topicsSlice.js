import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: [],
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            const { id, topicId } = action.payload;
            if (state.topics[topicId]) {
                state.topics[topicId].quizIds.push(id);
            }
        })
    }
});

// export topics object selector
export const selectTopics = (state) => state.topics.topics;

// export the action creator
export const { addTopic, addQuizId } = topicsSlice.actions;

//export the reducer
export default topicsSlice.reducer;
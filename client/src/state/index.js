import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setUpdatedUser: (state, action) => {
            state.user = action.payload.user;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setPosts: (state,action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state,action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) {
                    return action.payload.post;
                }else{
                    return post;
                }
            });
            state.posts = updatedPosts;
        }
    }
})

export const {setFriends, setLogin, setLogout, setMode,setPosts,setPost, setUpdatedUser} = authSlice.actions;

export default authSlice.reducer;
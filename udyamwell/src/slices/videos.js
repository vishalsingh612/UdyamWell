import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    course:null,
    // description:"",
    lectures:null,
    error:false
}


export const fetchSingleCource= createAsyncThunk("videos/fetchSingleCourses",(id)=>{
    return axios.get(`http://localhost:9000/api/v1/courses/videos/fetch-video/${id}`).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});
export const createVideo= createAsyncThunk("videos/createVideo",({id,data})=>{
    return axios.post(`http://localhost:9000/api/v1/courses/videos/create-video/${id}`,data).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message); 
});
});


const lectureSlice= createSlice({
    name:"lectures",
    initialState,
    extraReducers:{
        [fetchSingleCource.pending]:(state)=>{
            state.course=null;
        },
        [fetchSingleCource.fulfilled]:(state,action)=>{
            state.course=action.payload;
            state.lectures=action.payload.videos;
            state.error= false;
        },
        [fetchSingleCource.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
        [createVideo.fulfilled]:(state,action)=>{
            state.lectures.push(action.payload.data);
            state.courseName = action.payload.course;
            state.error= false;
        },
        [createVideo.rejected]:(state,action)=>{
            state.error=action.error.message;
        },
    }
});
export default lectureSlice.reducer;



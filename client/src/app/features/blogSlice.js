import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService from '../blogService'

export const getAllblogs = createAsyncThunk('/allBlogs',async (_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().user.user.token
        return await blogService.getAllBlogs(token)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})

const initialState= {
    blog:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    massage:''
}


export const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        reset:(state)=>state.initialState
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAllblogs.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(getAllblogs.fulfilled,(state,acrion)=>{
                state.isError=false
                state.isSuccess=true
                state.isLoading=false
                state.blog=acrion.payload
            })
            .addCase(getAllblogs.rejected,(state,acrion)=>{
                state.isError=true
                state.isLoading=false
                state.massage=acrion.payload
            })
    }

})


export const {reset} =blogSlice.actions
export default blogSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService from '../blogService'


//*get all blogs
export const getAllblogs = createAsyncThunk('/allBlogs',async (_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().user.user.token
        return await blogService.getAllBlogs(token)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})


//*get a user blogs
export const  getUserBlogs = createAsyncThunk('/getUserBlogs',async (_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().user.user.token
        return await  blogService.getUserBlogs(token)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})

//*crate a blog
export const creatBlog = createAsyncThunk('/creatBlog',async (userBlog,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().user.user.token
        return await blogService.creatBlog(userBlog,token)
    } catch (error) {
        
         const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
         console.log(message);
        //return thunkAPI(message) 
    }
})

//*delete a blog

export const deleteUserBlog = createAsyncThunk('/deleteUserBlog',async (blogId,thunkAPI)=>{
    try{
        const token =thunkAPI.getState().user.user.token
        return await blogService.deleteUserBlog(blogId,token)
    }catch(error){
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
         console.log(message);
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
            .addCase(getAllblogs.fulfilled,(state,action)=>{
                state.isError=false
                state.isSuccess=true
                state.isLoading=false
                state.blog=action.payload
            })
            .addCase(getAllblogs.rejected,(state,action)=>{
                state.isError=true
                state.isLoading=false
                state.massage=action.payload
            })
            .addCase(creatBlog.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(creatBlog.fulfilled,(state,action)=>{
                state.isError=false
                state.isSuccess=true
                state.isLoading=false
                state.blog.push(action.payload)
            })
            .addCase(creatBlog.rejected,(state,action)=>{
                state.isError=true
                state.isLoading=false
                state.massage=action.payload
            })
            .addCase(getUserBlogs.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(getUserBlogs.fulfilled,(state,action)=>{
                state.isError=false
                state.isSuccess=true
                state.isLoading=false
                state.blog=action.payload
            })
            .addCase(getUserBlogs.rejected,(state,action)=>{
                state.isError=true
                state.isLoading=false
                state.massage=action.payload
            })
            .addCase(deleteUserBlog.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(deleteUserBlog.fulfilled,(state,action)=>{
                state.isError=false
                state.isSuccess=true
                state.isLoading=false
                state.blog=action.payload
            })
            .addCase(deleteUserBlog.rejected,(state,action)=>{
                state.isError=true
                state.isLoading=false
                state.massage=action.payload
            })
    }

})


export const {reset} =blogSlice.actions
export default blogSlice.reducer
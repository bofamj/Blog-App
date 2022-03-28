import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService from '../blogService'
import axios from 'axios';

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

//*delet blog
export const deletBlog = createAsyncThunk('blog/deletBlog',async(blogId,thunkAPI)=>{
    try {
        const token  = thunkAPI.getState().user.user.token
            return await blogService.deletBlog(blogId,token)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})

//* creat blog  
export const creatBlog = createAsyncThunk('blog/creatBlog',async(userBlog,thunkAPI)=>{
    try {
        const token  = thunkAPI.getState().user.user.token
        return await blogService.creatBlog(userBlog,token)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})


//*edeat blog
/* export const edeatBlog = createAsyncThunk('blog/edeatBlog',async(blogId,userBlog,thunkAPI)=>{
  try {
    const token  = thunkAPI.getState().user.user.token
    return await blogService.edeatBlog(blogId,userBlog,token)
} catch (error) {
    const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
    return thunkAPI(message)
}
}) */
export const edeatBlog =createAsyncThunk('blog/edeatBlog', async (blogId,{userBlog},thunkAPI)=>{
  try {
  const token  = thunkAPI.getState().user.user.token
  const config = {headers: { Authorization: `Bearer ${token}`}}
  const response = await axios.patch(`http://localhost:5001/api/v1/blogs/${blogId}`,{userBlog},config)
  return response.data
  }catch (error) {console.log(error);}
} )

const initialState = {
    blog: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
export const blogSlice = createSlice({
    name: 'blog',
  initialState,
  reducers: {
    reset:  initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllblogs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllblogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.blog = action.payload
      })
      .addCase(getAllblogs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
            
      .addCase(getUserBlogs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.blog = action.payload
      })
      .addCase(getUserBlogs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.blog = state.blog.filter(
          (blog) => blog._id !== action.payload)
      })
      .addCase(deletBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(creatBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(creatBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.blog.push(action.payload)
      })
      .addCase(creatBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(edeatBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(edeatBlog.fulfilled, (state, action) => {
        console.log(action.payload.id)
        state.isLoading = false
        state.isSuccess = true
        state.blog = state.blog.map((blog)=>blog._id == action.payload.id ? action.payload:'')
        console.log(action.payload)
      })
      .addCase(edeatBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
            
    }


})


export const {reset} =blogSlice.actions
export default blogSlice.reducer


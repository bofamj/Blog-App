import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../authService'
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    massage:''
}

export const register = createAsyncThunk('/register' ,async (user,thunkAPI)=>{
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})


export const login = createAsyncThunk('/login',async (user,thunkAPI)=>{
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})

export const logout = createAsyncThunk('/logout',async (user)=>{
       try{
                 await authService.logout(user)
       }catch(error){
           console.log(error);
       }
    
})

export const getBlog = createAsyncThunk('/getBlog',async (user,thunkAPI)=>{
    try {
        return await  authService.getBlog(user,thunkAPI)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        reset:(state)=>{

            state.isLoading=false 
            state.isError=false
            state.isSuccess=false
            state.massage=''
         }
    },
    
    extraReducers:(builder)=>{
        builder
            .addCase(register.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(register.fulfilled,(state,acrion)=>{
                state.isLoading=false 
                state.isSuccess= true
                state.user = acrion.payload
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.massage=action.payload
                state.user = null
            })
             .addCase(login.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(login.fulfilled,(state,acrion)=>{
                state.isLoading=false 
                state.isSuccess= true
                state.user = acrion.payload
            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.massage=action.payload
                state.user = null
            })
            .addCase(logout.fulfilled,(state)=>{
                state.isLoading=false 
                state.isSuccess= true
                state.user = null
            })
    },
})

export const {reset} = userSlice.actions

export default userSlice.reducer
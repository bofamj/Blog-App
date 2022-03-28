import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../authService'
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    massage:''
}


//* register user
export const register = createAsyncThunk('/register' ,async (user,thunkAPI)=>{
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})



//* login user
export const login = createAsyncThunk('/login',async (user,thunkAPI)=>{
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.message && error.response.data ) || error.message || error.toString()
        return thunkAPI(message)
    }
})


//* logout user
export const logout = createAsyncThunk('auth/logout', () => {
    authService.logout('user')
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
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoading=false 
                state.isSuccess= true
                state.user = action.payload
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
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading=false 
                state.isSuccess= true
                state.user = action.payload
            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.massage=action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state,action) => {
                state.user = null
              })
    },
})

export const {reset} = userSlice.actions

export default userSlice.reducer
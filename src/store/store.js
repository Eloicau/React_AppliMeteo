import { configureStore } from '@reduxjs/toolkit'
import favorisReducer from './reducers/favorisReducer'

export default configureStore({
    reducer: {
        favoris: favorisReducer
    }
})
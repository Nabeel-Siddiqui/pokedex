import userReducer from './userReducer'
import pokemonReducer from './pokemonReducer'


import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    pokemonReducer
})

export default rootReducer
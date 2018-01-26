import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import map from './map'
import mapEditMode from './mapEditMode'

const rootReducer = combineReducers({
  // ...your other reducers here
  map,
  mapEditMode,
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
})

export default rootReducer

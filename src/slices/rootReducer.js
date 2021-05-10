import { combineReducers } from "redux"
import { calculatorReducer } from "./calculator"
import { contactReducer } from "./contact"

export const rootReducer = combineReducers({
  calculator: calculatorReducer,
  contact: contactReducer,
})

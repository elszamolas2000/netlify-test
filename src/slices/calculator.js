import { createSlice } from "@reduxjs/toolkit"
import {
  Netto,
  NumberA,
  NumberOfB,
  NumberOfD,
  Type,
} from "../components/enums/types"

const initialState = {
  rows: [
    {
      id: "1",
      name: "Könyvelési díj",
      sum: "0",
    },
    {
      id: "2",
      name: "Bérszámfejtési  díj",
      sum: "0",
    },
    {
      id: "3",
      name: "Összesen",
      sum: "0",
    },
  ],
  process: {
    collapseKata: false,
    collapseMore: false,
    numberOfB: NumberOfB["1-50"],
    numberOfD: NumberOfD.Nem,
    numberOfA: NumberA["nem vagyok áfa adóalany"],
    netto: Netto["0-10 millióig"],
    fix: "",
    other: "",
    type: "",
    sum: 0,
    otherSum: 0,
    kataSum: 0,
    isVisible: false,
    disabled: true,
    isKata: false,
  },
}

const typeCheck = value => {
  if (initialState.type === Type.BT) {
    if (value < 10000) {
      return 10000
    }
  } else if (initialState.type === Type.EV || initialState.type === Type.NP) {
    if (value < 8000) {
      return 8000
    }
  } else if (initialState.type === Type.KFT) {
    if (value < 15000) {
      return 15000
    }
  }
  return value
}

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setProcess: (state, { payload }) => {
      state.process = payload
    },
    computeKataSum: state => {
      const value = state.process.type
      if (value === Type.BT) {
        state.rows[0].sum = 10000
        state.rows[1].sum = 0
        state.rows[2].sum = 10000
        state.process.kataSum = 10000
      } else if (value === Type.EV || value === Type.NP) {
        state.rows[0].sum = 8000
        state.rows[1].sum = 0
        state.rows[2].sum = 8000
        state.process.kataSum = 8000
      }
      state.process.collapseKata = false
      state.process.disabled = false
      state.process.isVisible = true
      state.process.isKata = true
    },
    computeNonKataSum: state => {
      let sum = 0
      let otherSum = 0
      if (!state.process.isKata) {
        sum += Number.parseInt(state.process.numberOfB)
        sum += Number.parseInt(state.process.numberOfA)
        sum += Number.parseInt(state.process.netto)
        sum *= Number.parseFloat(state.process.numberOfD)

        let fix = Number.parseInt(state.process.fix)
        let other = Number.parseInt(state.process.other)
        if (Number.isNaN(fix)) {
          fix = 0
        }
        if (Number.isNaN(other)) {
          other = 0
        }

        sum = typeCheck(sum)
        otherSum += fix * 1500 + other * 2000
      } else {
        sum = state.process.kataSum
        let fix = Number.parseInt(state.process.fix)
        let other = Number.parseInt(state.process.other)
        if (Number.isNaN(fix)) {
          fix = 0
        }
        if (Number.isNaN(other)) {
          other = 0
        }
        sum = typeCheck(sum)
        otherSum += fix * 1500 + other * 2000
      }

      state.rows[0].sum = sum
      state.rows[1].sum = otherSum
      state.rows[2].sum = sum + otherSum
      state.process.sum = sum
      state.process.otherSum = otherSum
      state.process.isVisible = true
    },
    toggleByType: (state, { payload }) => {
      state.process.type = payload
      if (payload === Type.BT || payload === Type.EV) {
        state.process.isVisible = false
        state.process.collapseKata = true
        state.process.collapseMore = false
        state.process.disabled = true
        state.process.isKata = false
      } else if (payload === Type.NP) {
        state.rows[0].sum = 8000
        state.rows[1].sum = 0
        state.rows[2].sum = 8000
        state.process.isVisible = true
        state.process.collapseKata = false
        state.process.collapseMore = false
        state.process.disabled = false
        state.process.isKata = true
      } else {
        state.process.isVisible = false
        state.process.collapseKata = false
        state.process.collapseMore = true
        state.process.disabled = false
        state.process.isKata = false
      }
    },
  },
})

export const calculatorReducer = calculatorSlice.reducer
export const {
  setProcess,
  computeKataSum,
  computeNonKataSum,
  toggleByType,
} = calculatorSlice.actions

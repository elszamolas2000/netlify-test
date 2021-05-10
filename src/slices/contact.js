import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  form: {
    modalName: "",
    name: "",
    email: "",
    subject: "",
    content: "",
  },
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setForm: (state, { payload }) => {
      state.form = payload
    },
    resetForm: state => {
      state.form = {
        modalName: "",
        name: "",
        email: "",
        subject: "",
        content: "",
      }
    },
  },
})

export const contactReducer = contactSlice.reducer

export const { setForm, resetForm } = contactSlice.actions

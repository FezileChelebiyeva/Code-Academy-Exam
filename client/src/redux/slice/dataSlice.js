import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getData = createAsyncThunk("getData", async (value) => {
  const response = await axios.get("http://localhost:8080/solutions");
  if (value === 1) {
    return response.data.sort((a, b) => a.price - b.price);
  } else if (value) {
    return response.data.filter((elem) =>
      elem.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  } else {
    return response.data;
  }
});

export const postData = createAsyncThunk("postData", async (obj) => {
  axios.post("http://localhost:8080/solutions", obj);
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  axios.delete(`http://localhost:8080/solutions/${id}`);
});

export const dataSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.error = "data not found";
    });
  },
});

export default dataSlice.reducer;

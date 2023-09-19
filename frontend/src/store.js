import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import { apiSlice } from "./slices/apliSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;

// import { configureS tore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const middleware = [...getDefaultMiddleware()];
// const store = configureStore({
//   reducer: {},
//   middleware: middleware,
//   devTools: true,
// });

// export default store;

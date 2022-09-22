import { configureStore } from "@reduxjs/toolkit";
import detectionSlice from "./detectionSlice";

export default configureStore({
  reducer: { detection: detectionSlice }
});

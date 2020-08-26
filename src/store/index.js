import { createStore } from "redux";
import carItems from "../reducers/carItems";

const store = createStore(carItems);

export default store;

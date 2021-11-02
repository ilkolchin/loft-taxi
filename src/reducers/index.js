import { combineReducers } from "redux";
import auth from "./auth";
import card from "./updateCard";
import address from "./getAddresses";
import route from "./getRoute";

export default combineReducers({ auth, card, address, route })

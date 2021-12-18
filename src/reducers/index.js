import { combineReducers } from "redux";
import auth from "./auth";
import card from "./updateCard";
import address from "./getAddresses";
import route from "./getRoute";
import serverError from "./serverError";

export default combineReducers({ auth, card, address, route, serverError })

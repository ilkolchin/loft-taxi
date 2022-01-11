import React from "react";
import { Link } from "react-router-dom";

import './LinkBtn.scss'

export const LinkBtn = (props) => (
<Link to={props.to} className={props.theme}>{props.text}</Link>
)
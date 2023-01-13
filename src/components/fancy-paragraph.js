import * as React from "react"
import { fancy } from "./fancy-paragraph.module.css"

const FancyParagraph = ({ props }) => <p className={fancy}>{props}</p>

export default FancyParagraph

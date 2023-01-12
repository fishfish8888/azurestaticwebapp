import * as React from "react"
import fancyParagraphStyles from "./fancy-paragraph.module.css"

const FancyParagraph = (props) => <p className={fancyParagraphStyles}>{props.paragraphText}</p>

export default FancyParagraph

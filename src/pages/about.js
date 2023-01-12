import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import FancyParagraph from "../components/fancy-paragraph"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AboutPage = () => (
<Layout>
  <h1>About Me</h1>
  <FancyParagraph paragraphText="Styled with CSS Modules." />
</Layout>
)

export default AboutPage

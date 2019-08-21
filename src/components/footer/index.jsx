import React from "react"
import { Link } from "gatsby"

import {
  IconYoutube,
  IconTwiter,
  IconGithub,
  IconSlack,
} from "../../utils/theme/icons"

import { FooterContainer, FooterCreated, FooterIcons } from "./styled"

const Footer = () => (
  <FooterContainer className="footer">
    <p>
      Tienes algun proyecto en mente?. <Link to="/contacto">Contactame</Link> y
      creemoslo juntos
    </p>
    <FooterCreated>
      <p> Copyright © {new Date().getFullYear()}</p>
      <p>
        Creado Por
        <Link to="/acerca"> José Guerrero</Link>
      </p>
    </FooterCreated>
    <FooterIcons>
      <a href="https://icon.com" className="icon-youtube">
        <i>
          <IconYoutube />
        </i>
      </a>
      <a href="https://icon.com" className="icon-twiter">
        <i>
          <IconTwiter />
        </i>
      </a>
      <a href="https://icon.com" className="icon-github">
        <i>
          <IconGithub />
        </i>
      </a>
      <a href="https://icon.com" className="icon-slack">
        <i>
          <IconSlack />
        </i>
      </a>
    </FooterIcons>
  </FooterContainer>
)

export default Footer

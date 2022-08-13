// import "./src/styles/global.css"
import React from "react"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => (props.theme === 'blue' ? 'blue':'white')};

    `
  export const wrapPageElement = ({ element, props }) => (
    <>
      <GlobalStyle theme="blue" />
         {element}         
    </>
  )  
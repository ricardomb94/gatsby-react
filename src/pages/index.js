
import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout/Layout"
// import styled from "styled-components"

// import styleWrapper from "../components/styleWrapper"


// const Box = styled.div`
// background-color: #333;
//     padding: 1rem
//     h1{
//         color: #fff;
//         margin: 0 0 1rem;
//     }
//     p{
//         color: #fff;
//     }
//     `

export default function Index(){
    return (
        <Layout>
            <h1>My Landing Page</h1>
            <p>This is my landing page.</p>
            <Link to="/about">About me</Link>
        </Layout>
    )
}
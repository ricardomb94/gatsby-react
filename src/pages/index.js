
import React from "react"
import {Link, graphql} from "gatsby"
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

export default function Index({data}){
    const{
        site:{
            siteMetadata:{name, role, bio}
        },
    } = data;
    return (
        <Layout>
            <div>
                <h1>{name}</h1>
                <p>{role}</p>
                <p>{bio}</p>
                <Link to="/about">About me</Link>
            </div>
        </Layout>
    )
}
export const query = graphql`
    {
        site{
            siteMetadata{
                name
                role
                bio
            }
        }    
    }
`;
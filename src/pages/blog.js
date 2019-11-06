import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"

import Hgroup from "../components/hgroup"

import { CenterContainer } from "../components/style/page"

const PostGrid = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  margin: 10px;

  &:hover {
    transform: scale(1.05);
  }
`

const DateTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em 2px;
  color: #009688;
`

const SpanIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 0 5px;
`

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <Hgroup img="/images/page/blog.jpg" title="Blog"></Hgroup>
      <CenterContainer>
        <div className="columns is-multiline is-centered">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PostGrid key={node.fields.slug} className="column is-5">
                <DateTime>
                  <SpanIcon>
                    <svg
                      viewBox="0 0 14 16"
                      height="1.2em"
                      width="1.2em"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"
                      />
                    </svg>
                    {node.frontmatter.date}
                  </SpanIcon>
                  <SpanIcon>
                    <svg
                      viewBox="0 0 24 24"
                      height="1.2em"
                      width="1.2em"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                    >
                      <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                    </svg>
                    {node.timeToRead} min read
                  </SpanIcon>
                </DateTime>
                <Link to={node.fields.slug}>
                  <Image
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                    style={{ height: "250px" }}
                  />
                </Link>
                <h3 className="title">
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </PostGrid>
            )
          })}
        </div>
      </CenterContainer>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

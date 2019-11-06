import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import ShareButton from "../components/sharebutton"

import { CenterContainerBlog } from "../components/style/page"

const LoadImage = styled.figure`
  position: relative;
  text-align: center;
`
const BlogTitle = styled.div`
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 5px 2px;
  border-radius: 10px;
`
const ShowPost = styled.div`
  margin-top: 30px;
`

const NextPrev = styled.div`
  padding: 10px 0;
  background: #f7f7f7;
`
const NextPrevUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
`

const NextPrevLi = styled.li`
  font-weight: bold;
  a {
    color: ${props => props.theme.BostonBlue};
  }
`

const Blog = props => {
  const post = props.data.markdownRemark
  const { siteUrl } = props.data.site.siteMetadata
  const { previous, next } = props.pageContext
  const { frontmatter, timeToRead, html, excerpt, fields } = post
  const { title, description, date, featuredImage } = frontmatter
  const featuredImg = `${siteUrl}/${featuredImage.childImageSharp.fluid.src}`
  const posturl = `${siteUrl}/${fields.slug}`
  return (
    <Layout>
      <SEO title={title} description={description} image={featuredImg} />
      <CenterContainerBlog>
        <LoadImage>
          <Image
            fluid={featuredImage.childImageSharp.fluid}
            style={{ height: "320px" }}
          />
          <BlogTitle>
            <h1 style={{ color: "#fff" }} className="title is-3">
              {title}
            </h1>
            <p style={{ color: "#ffffff" }}>
              {date} 👁 {timeToRead} min read
            </p>
          </BlogTitle>
        </LoadImage>
        <ShowPost dangerouslySetInnerHTML={{ __html: html }} />
        <ShareButton
          posturl={posturl}
          title={title}
          excerpt={excerpt}
        ></ShareButton>
        <hr />
        <NextPrev>
          <NextPrevUl>
            <NextPrevLi>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </NextPrevLi>
            <NextPrevLi>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </NextPrevLi>
          </NextPrevUl>
        </NextPrev>
      </CenterContainerBlog>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`

import { graphql, useStaticQuery } from "gatsby"

export const CarouselImg = () => {
  const data = useStaticQuery(
    graphql`
      query {
        first: file(relativePath: { eq: "first.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
        second: file(relativePath: { eq: "second.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
        third: file(relativePath: { eq: "third.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )
  return data
}

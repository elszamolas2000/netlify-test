import { graphql, useStaticQuery } from "gatsby"

export const CarouselImg = () => {
  const data = useStaticQuery(
    graphql`
      query {
        first: file(relativePath: { eq: "first.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF, JPG]
            )
          }
        }
        second: file(relativePath: { eq: "second.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF, JPG]
            )
          }
        }
        third: file(relativePath: { eq: "third.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF, JPG]
            )
          }
        }
      }
    `
  )
  return data
}

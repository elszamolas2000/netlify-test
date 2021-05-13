import { graphql, useStaticQuery } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        data: file(relativePath: { eq: "logo.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder:TRACED_SVG)
          }
        }
      }
    `
  )
  return data
}
export default Logo

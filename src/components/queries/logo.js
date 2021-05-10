import { graphql, useStaticQuery } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        data: file(relativePath: { eq: "logo.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )
  return data
}
export default Logo

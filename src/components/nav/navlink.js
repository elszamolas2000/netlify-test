import { MDBIcon } from "mdbreact"
import React from "react"
import styled from "styled-components"
import withWindowSize from "../hoc/withWindowSize"

const NavLinkItem = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    background-color: gray;
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  ${props => {
    if (!props.empty) {
      return `  display: flex;
        align-items: center;
        color: white;
        font-size: 1.2rem;
        margin: 0.6rem;
        transition: all 0.4s;
        padding: 0.3rem;
        cursor: pointer;
     `
    }

    if (props.lg && !props.empty) {
      return `
            font-size: 1rem;
            margin: .4rem;`
    }
  }}
`
const ItemLink = styled.span`
  margin-left: 0.5rem;
  text-decoration: none;
  color: white;
`

const NavLink = ({
  windowWidth,
  href,
  onClick,
  empty,
  children,
  icon,
  title,
}) => {
  return (
    <NavLinkItem
      href={href || "/"}
      onClick={onClick}
      lg={windowWidth > 1396}
      empty={empty}
    >
      {empty ? (
        children
      ) : (
        <>
          <MDBIcon icon={icon} />
          <ItemLink>{title}</ItemLink>
        </>
      )}
    </NavLinkItem>
  )
}

export default withWindowSize(NavLink)

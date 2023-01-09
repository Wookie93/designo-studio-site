import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledMenu, StyledLink } from './MenuLinks.styles';

const MenuLinks = ({ style }) => {
  const data = useStaticQuery(graphql`
    query getMenuLinks {
      datoCmsMenu {
        menuitem {
          linkName
          destination {
            ... on DatoCmsPortfoliopage {
              slug
            }
            ... on DatoCmsPage {
              slug
            }
            ... on DatoCmsIndexpage {
              slug
            }
            ... on DatoCmsAboutpage {
              slug
            }
            ... on DatoCmsContactpage {
              slug
            }
          }
        }
      }
    }
  `);
  const menuLinks = data.datoCmsMenu.menuitem;

  return (
    <StyledMenu className={style}>
      {menuLinks.map((link, index) => (
        <li key={index}>
          <StyledLink to={'/' + link.destination.slug}>
            {link.linkName}
          </StyledLink>
        </li>
      ))}
    </StyledMenu>
  );
};

export default MenuLinks;

import * as React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { StructuredText } from 'react-datocms';
import { StyledFooter, StyledInnerFooter, StyledLink } from './Footer.styles';

///Components
import Logo from '../../atoms/Logo/Logo';
import Newsletter from '../../atoms/Newsletter/Newsletter';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query getFooterData {
      datoCmsFooter {
        newsletter {
          title
          description
          showbutton
          buttontext
          buttonlink
        }
        logo {
          logo {
            gatsbyImageData(width: 202)
          }
        }
        menu {
          menuitem {
            linkName
            destination {
              ... on DatoCmsPortfoliopage {
                slug
              }
              ... on DatoCmsPage {
                id
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
        adresswrap1 {
          value
        }
        adresswrap2 {
          value
        }
        socialmedialink {
          ico {
            gatsbyImageData(width: 24)
          }
          socialLink
        }
      }
    }
  `);
  const menuLinks = data.datoCmsFooter.menu.menuitem;
  const { newsletter, logo, adresswrap1, adresswrap2, socialmedialink } =
    data.datoCmsFooter;

  return (
    <StyledFooter>
      <div className="inner-footer-wrap">
        <Newsletter data={newsletter} />
        <StyledInnerFooter>
          <div className="inner-top">
            <div className="logo">
              <Logo data={logo[0].logo} />
            </div>
            {menuLinks.map((link, index) => (
              <StyledLink to={'/' + link.destination.slug} key={index}>
                {link.linkName}
              </StyledLink>
            ))}
          </div>
          <div className="inner-bottom">
            <div>
              <StructuredText data={adresswrap1} />
            </div>
            <div>
              <StructuredText data={adresswrap2} />
            </div>
            <div className="social-media">
              {socialmedialink.map((socialMedia, index) => (
                <a href={socialMedia.socialLink} key={index}>
                  <GatsbyImage image={getImage(socialMedia.ico)} alt="ico" />
                </a>
              ))}
            </div>
          </div>
        </StyledInnerFooter>
      </div>
    </StyledFooter>
  );
};

export default Footer;

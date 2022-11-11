import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = ({ type }) => (
  <>
    {type === 'dark' ? (
      <Link to="/">
        {' '}
        <StaticImage
          src="../../../assets/images/logo-dark.png"
          alt="Logo"
          placeholder="blurred"
          width={202}
          height={27}
        ></StaticImage>
      </Link>
    ) : (
      <Link to="/">
        <StaticImage
          src="../../../assets/images/logo-light.png"
          alt="Logo"
          placeholder="blurred"
          width={202}
          height={27}
        ></StaticImage>
      </Link>
    )}
  </>
);

export default Logo;

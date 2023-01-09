import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Logo = ({ data }) => {
  const image = getImage(data);
  return (
    <Link to="/">
      <GatsbyImage image={image} alt="Logo" />
    </Link>
  );
};

export default Logo;

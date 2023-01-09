import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

/// Styles
import { StyledNewsletter, StyledContent } from './Newsletter.styles';

/// Components
import Button from '../../atoms/Button/Button';

const Newsletter = ({ data }) => {
  const { title, description, showbutton, buttontext, buttonlink } = data[0];

  return (
    <StyledNewsletter>
      <StyledContent>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {showbutton ? <Button to={buttonlink}>{buttontext}</Button> : null}
      </StyledContent>
      <StaticImage
        className="bcg-desktop"
        src="../../../assets/bcgs/desktop/bg-pattern-call-to-action.svg"
        alt=""
      />
    </StyledNewsletter>
  );
};

export default Newsletter;

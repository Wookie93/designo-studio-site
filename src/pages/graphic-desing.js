import * as React from 'react';
import Header from '../components/molecules/Header/Header';

const GraphicDesignPage = () => {
  return (
    <>
      <Header>
        <h1>Graphic design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </Header>
      <p>GraphicDesignPage</p>
    </>
  );
};

export default GraphicDesignPage;

export const Head = () => <title>Graphic Design</title>;

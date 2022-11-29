import * as React from 'react';
import Header from '../components/molecules/Header/Header';

const GraphicDesignPage = () => {
  return (
    <>
      <Header
        title={'Graphic Design'}
        desc={
          'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        }
      />

      <div className="leaf-bcg"></div>
    </>
  );
};

export default GraphicDesignPage;

export const Head = () => <title>Graphic Design</title>;

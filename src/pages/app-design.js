import * as React from 'react';
import Header from '../components/molecules/Header/Header';

const AppDesignPage = () => {
  return (
    <>
      <Header
        title={'App Design'}
        desc={
          'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        }
      />
      <div className="leaf-bcg main-page"></div>
    </>
  );
};

export default AppDesignPage;

export const Head = () => <title>App Design</title>;

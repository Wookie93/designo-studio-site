import * as React from 'react';
import Cities from '../components/atoms/Cities/Cities.js';
import FormWrap from '../components/atoms/FormWrap/FormWrap.js';

const ContactPage = () => {
  return (
    <>
      <FormWrap />
      <Cities />
      <div className="leaf-bcg contact-page"></div>
    </>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;

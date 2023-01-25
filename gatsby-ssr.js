const React = require('react');
const { MainTemplate } = require('./src/components/MainTemplate');

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'pl' });
};

exports.wrapPageElement = ({ element, props }) => {
  return <MainTemplate {...props}>{element}</MainTemplate>;
};

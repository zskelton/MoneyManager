import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  const { statusText } = props;

  return (
    <div id="footer" className="Footer">
      <span id="type">{'Status: '}</span>
      <span id="text">{statusText}</span>
    </div>
  );
}
Footer.propTypes = {
  statusText: PropTypes.string,
};
Footer.defaultProps = {
  statusText: '',
};

export default Footer;

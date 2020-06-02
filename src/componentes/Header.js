// simple react snippets => imr
import React from 'react';

/* function Header (props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
    </Fragment>
  );
} */

// usando destructuring y sin Fragment
/* function Header ({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
} */

// simple react snippets => sfc
// tiene implícito el return
const Header = ({ title }) => (
  <h1>{title}</h1>
);

export default Header;

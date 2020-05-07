import * as React from 'react';
import { Helmet } from 'react-helmet';

import './styles.css';

function GlobalComponent() {
  return (
    <Helmet>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default GlobalComponent;

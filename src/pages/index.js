import React, { useState } from 'react';
/**
 * List of Components
 */
import Global from '../components/Global';
import QuoteCard from '../components/QuoteCard';
/**
 * List of helpers
 */
import getRandomColor from '../helpers/getRandomColor';
import { getGlobalStyles } from '../helpers/getGlobalStyles';

function IndexPage() {
  const [selectedColor, setSelectedColor] = useState(() => getRandomColor());

  const handleGetNewColor = () => {
    let newColor = getRandomColor();
    /**
     * IF current colors still same like existing,
     * then generate again!
     */
    while (newColor === selectedColor) {
      newColor = getRandomColor();
    }

    setSelectedColor(newColor);
  };

  return (
    <div css={getGlobalStyles(selectedColor)}>
      <Global />
      <div className="content">
        <QuoteCard />
      </div>
      <div className="footer">
        <span onClick={handleGetNewColor}>Built with Gatsby | Created by Indra Kusuma</span>
      </div>
    </div>
  );
}

export default IndexPage;

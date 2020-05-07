import * as React from 'react';
import * as sty from './styles';

function QuoteCard() {
  return (
    <div id="quote-box" css={sty.Wrapper}>
      <div css={sty.Box}>
        Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.
      </div>
    </div>
  );
}

export default QuoteCard;

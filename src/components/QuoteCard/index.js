import * as React from 'react';
import { string, func, bool } from 'prop-types';
import * as sty from './styles';

function QuoteCard({ loading, quote, author, onRefetch }) {
  const getTwitterUrl = () => {
    const encodeQuote = encodeURIComponent(`"${quote}" ${author}`);
    const finalUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeQuote}`;

    return finalUrl;
  };

  return (
    <div id="quote-box" css={sty.Wrapper}>
      <div css={sty.Box}>
        {loading ? <p id="text">preparing something special for you...</p> : <p id="text">{`" ${quote} "`}</p>}
        <div css={sty.actionButton}>
          <div id="action-button">
            <a id="tweet-quote" href={getTwitterUrl()} target="_blank">
              <button id="twitter">Twitter</button>
            </a>
            <button id="new-quote" onClick={onRefetch}>
              New Quote
            </button>
          </div>
          {loading ? <div id="author">...</div> : <div id="author">- {author}</div>}
        </div>
      </div>
    </div>
  );
}

QuoteCard.propTypes = {
  author: string,
  loading: bool.isRequired,
  quote: string,
  onRefetch: func.isRequired,
};

QuoteCard.defaultProps = {
  author: 'Steve Jobs',
  quote: 'Your time is limited, so don’t waste it living someone else’s life.',
};

export default QuoteCard;

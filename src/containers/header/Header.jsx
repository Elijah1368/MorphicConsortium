import React from 'react';

import genome from '../../assets/humanGenome.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Bold Predictions For Human Genomics by 2030</h1>
      <p>The biological function(s) of every shuman gene will be known; for non-coding elements in the human genome, such knowledge will be the rule, rather than the exception.</p>

      <div className="gpt3__header-content__input">

        <button type="button">Learn More</button>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={genome} />
    </div>
  </div>
);

export default Header;

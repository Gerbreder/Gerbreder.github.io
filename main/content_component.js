'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: true, portfolio: false, contacts: false };
  }

  render() {
    if (this.state.home) {
      return (
        <div class="information">
                        <h1 id="title">
                            Hi, I'm Erik Gerbreder!
                        </h1>
                        <p id="text-about-me">
                            I am a young and ambitious web developer with experience in PHP, Java, HTML, CSS, JavaScript and OpenCart. I am reliable and have a strong desire to constantly learn and grow. If you are looking for a dedicated and skilled programmer who is eager to take on new challenges, I would be a perfect fit. Let's connect and build something remarkable together!
                        </p>

                        <p class="lead">
                            <button class="blob-btn" onclick="toPortfolio()">
                            Portfolio
                            <span class="blob-btn__inner">
                                <span class="blob-btn__blobs">
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                </span>
                            </span>
                            </button>
                            <br/>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                    </filter>
                                    </defs>
                                </svg>
                            

                        </p>
                    </div>
      );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#content');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
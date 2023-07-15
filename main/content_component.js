'use strict';

class MobileNavigation extends React.Component {

  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  render() {
    return (
      <div className="mobile-navigation">
        <div className="navigation-bar">
          <Logo />
          <nav className="mobile-nav">
            <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
              <i className="fa fa-bars"></i>
            </a>
          </nav>
        </div>
        <div className="mobile-topnav">
          <div id="myLinks">
            <nav className="nav nav-masthead" style={{ display: 'flex', flexDirection: 'column' }}>
              <a className="nav-link active" aria-current="page" href="main.html">Home</a>
              <a className="nav-link" href="../portfolio/portfolio.html">Portfolio</a>
              <a className="nav-link" href="../contacts/contacts.html">Contact Me</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

class Logo extends React.Component {
  redirectToHomePage = () => {
    this.props.redirectToPage();
  };

  render() {
    return(
      <div className="logo">
          <a onClick={this.redirectToHomePage}>
              <svg id="logo" width="67" height="90" top="196" viewBox="0 0 150 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.8158 112.321L24.7267 121.523L30.0252 153.165L62.069 173.839L102.061 146.609L121.362 97.4455L115.181 96.437L108.747 101.858L95.1219 106.018L82.6325 107.53L79.9832 77.0235L63.2044 58.7446L58.2843 56.7276L61.1859 86.3521L37.8469 113.329L20.8158 112.321ZM43.524 151.778L37.8469 128.961L63.2044 150.139L43.524 151.778ZM92.9773 124.044L71.5307 148.5L93.9865 143.71L92.9773 124.044Z" fill="#292A2B"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.32632 97.4455L20.8158 158.207L61.4382 187.201L115.181 148.5L138.898 86.3521L126.787 75.7629L119.849 77.0235L121.362 84.9654L98.2759 94.6721L92.9773 86.3521V70.4683L53.6165 31.7675V21.8086L43.524 36.6839L50.2103 77.0235L33.4315 100.471L8.32632 97.4455ZM24.7267 154.677L15.3911 102.362L34.5669 106.522L37.8469 104.127L56.6442 77.0235L53.6165 42.1045L86.1648 70.4683L88.3095 100.471L92.0942 104.127L122.75 89.7557H128.932L126.787 106.018L109.378 145.853L64.2136 178.755L24.7267 154.677Z" fill="#292A2B"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.3911 102.362L24.7267 154.677L64.2136 178.755L109.378 145.853L126.787 106.018L128.932 89.7557H122.75L92.0942 104.127L88.3095 100.471L86.1648 70.4683L53.6165 42.1045L56.6442 77.0235L37.8469 104.127L34.5669 106.522L15.3911 102.362ZM24.7267 121.523L20.8158 112.321L37.8469 113.329L61.1859 86.3521L58.2843 56.7276L63.2044 58.7446L79.9832 77.0235L82.6325 107.53L95.1219 106.018L108.747 101.858L115.181 96.437L121.362 97.4455L102.061 146.609L62.069 173.839L30.0252 153.165L24.7267 121.523Z" fill="#F76735"/>
                  <path d="M37.8469 128.961L43.524 151.778L63.2044 150.139L37.8469 128.961Z" fill="#F76735"/>
                  <path d="M71.5307 148.5L92.9773 124.044L93.9865 143.71L71.5307 148.5Z" fill="#F76735"/>
              </svg>
          </a>
      </div>
    );
  }
}

class DesktopNavigation extends React.Component {
  redirect = (page) => {
    this.props.redirectToPage(page);
  };

  redirectToHome = () => {
    this.redirect("home");
  }

  render() {
    return(
      <div className="navigation-bar">
        <Logo redirectToPage={this.redirectToHome}/>
        <div className="nav-buttons">
          <nav className="nav nav-masthead">
              <a className="nav-link fw-bold py-1 px-0 active" id="home" aria-current="page" onClick={() => this.redirect("home")}>Home</a>
              <a className="nav-link fw-bold py-1 px-0" id="portfolio" onClick={() => this.redirect("portfolio")}>Portfolio</a>
              <a className="nav-link fw-bold py-1 px-0" id="contacts" onClick={() => this.redirect("contacts")}>Contact Me</a>
          </nav>
        </div>
      </div>
    );
  } 
}

class BlurredRectangle extends React.Component {

  render() {
    const isMobile = this.props.isMobile();
    const page = this.props.page;
    return (
      <div className="blurred-rectangle" id="blurred-rectangle">
        <div className="left-side" id="left-side">
          {isMobile ? <MobileNavigation/> : <DesktopNavigation/>}
          
        </div>
        <div className="right-side" id="right-side">

        </div>
      </div>
    );   
  }

}

class PortfolioButton extends React.Component {
  redirect = () => {
    this.props.redirectToPage("portfolio");
  };

  render() {
    return (
      <p className="lead">
        <button className="blob-btn" onClick={this.redirect}>
          Portfolio
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <br />

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </p>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      portfolio: false,
      contacts: false,
      isMobile: false
    };
  }

  redirectToPage = (pageName) => {
    let navLinks = document.getElementsByClassName("nav-link");
    for (let link of navLinks) {
      if (link.id === pageName) {
        link.classList.add("active");
      }
      else {
        if (link.classList.contains("active") && link) {
          link.classList.remove("active");
        }
      }
    }
    const updatedState = {
      home: pageName === "home",
      portfolio: pageName === "portfolio",
      contacts: pageName === "contacts",
    };
    let navElement = document.getElementById(pageName);
    navElement.classList.add("active");
    this.setState(updatedState);
  };
  componentDidMount() {
    // Check the initial window width and add the resize event listener
    this.handleResize(); // Check initial window width
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // Remove the resize event listener when the component unmounts
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    // Update the state based on the window width
    this.setState({ isMobile: window.innerWidth <= 1413 }); // Set your desired breakpoint here
  };

  expandBlurredRect() {
    let rect = document.getElementById("blurred-rectangle");
    rect.classList.add('expand');
    let right_side = document.getElementById("right-side");
    right_side.classList.add("minimize");
    let content = document.getElementById("left-side");
    content.classList.add("expand");
  }

  minimizeBlurredRect() {
    let rect = document.getElementById("blurred-rectangle");
    let content = document.getElementById("left-side");
    let right_side = document.getElementById("right-side");
    
    if (rect && content && right_side) {
      if (rect.classList.contains("expand")) {
        rect.classList.remove('expand');
      }
      if (right_side.classList.contains("minimize")) {
        right_side.classList.remove("minimize");
      }
      if (content.classList.contains("expand")) {
        content.classList.remove("expand");
      }
    }
  }
  

  renderPageContent() {
    if (this.state.home) {
      return (
        <div className="information">
          <h1 id="title">Hi, I'm Erik Gerbreder!</h1>
          <p id="text-about-me">
            I am a young and ambitious web developer with experience in PHP,
            Java, HTML, CSS, JavaScript, and OpenCart. I am reliable and have a
            strong desire to constantly learn and grow. If you are looking for
            a dedicated and skilled programmer who is eager to take on new
            challenges, I would be a perfect fit. Let's connect and build
            something remarkable together!
          </p>
          <PortfolioButton redirectToPage={this.redirectToPage} />
          {this.minimizeBlurredRect()}
        </div>
      );
    } else if (this.state.portfolio) {
      return (
        <div id="project-list">
          {this.expandBlurredRect()}
        </div>
      );
    } else if (this.state.contacts) {
      return (
        <div className="contacts">
          {this.expandBlurredRect()}
          <div id="email" className="contact-method">
            <svg style={{ position: 'relative', textAlign: 'center', left: '10%' }} width="206" height="190" viewBox="0 0 206 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M163.083 0.583344H42.9167C31.5386 0.596973 20.6305 5.12291 12.5851 13.1684C4.53957 21.2139 0.0136291 32.122 0 43.5L0 146.5C0.0136291 157.878 4.53957 168.786 12.5851 176.832C20.6305 184.877 31.5386 189.403 42.9167 189.417H163.083C174.461 189.403 185.369 184.877 193.415 176.832C201.46 168.786 205.986 157.878 206 146.5V43.5C205.986 32.122 201.46 21.2139 193.415 13.1684C185.369 5.12291 174.461 0.596973 163.083 0.583344ZM42.9167 17.75H163.083C168.223 17.7601 173.242 19.308 177.494 22.1945C181.747 25.081 185.038 29.174 186.945 33.9468L121.214 99.6865C116.377 104.504 109.827 107.21 103 107.21C96.1727 107.21 89.6235 104.504 84.7862 99.6865L19.055 33.9468C20.9618 29.174 24.2532 25.081 28.5057 22.1945C32.7581 19.308 37.7771 17.7601 42.9167 17.75ZM163.083 172.25H42.9167C36.0873 172.25 29.5377 169.537 24.7087 164.708C19.8796 159.879 17.1667 153.329 17.1667 146.5V56.375L72.6493 111.823C80.7059 119.86 91.6207 124.373 103 124.373C114.379 124.373 125.294 119.86 133.351 111.823L188.833 56.375V146.5C188.833 153.329 186.12 159.879 181.291 164.708C176.462 169.537 169.913 172.25 163.083 172.25Z" fill="white"/>
            </svg>
            <a className="contact-link" href="erik.gerb@gmail.com">erik.gerb@gmail.com</a>
          </div>
          <div id="linkedin" className="contact-method">
            <svg style={{ position: 'relative', left: '3.5%' }} width="181" height="181" viewBox="0 0 181 181" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M153.458 154.273H126.771V112.48C126.771 102.514 126.593 89.6895 112.89 89.6895C98.9918 89.6895 96.8617 100.544 96.8617 111.762V154.273H70.1835V68.3274H95.8056V80.069H96.1606C101.388 71.1407 111.097 65.8069 121.437 66.1885C148.488 66.1885 153.466 83.9829 153.466 107.12L153.458 154.273ZM40.0706 56.5769C31.5151 56.5769 24.5837 49.6455 24.5837 41.09C24.5837 32.5345 31.5151 25.6031 40.0706 25.6031C48.6261 25.6031 55.5575 32.5345 55.5575 41.09C55.5575 49.6455 48.6261 56.5769 40.0706 56.5769ZM53.4098 154.273H26.696V68.3274H53.4098V154.273ZM166.761 0.824113H13.2859C6.035 0.744238 0.08875 6.55736 0 13.8082V167.914C0.08875 175.173 6.035 180.987 13.2859 180.907H166.761C174.03 180.995 180.003 175.182 180.1 167.914V13.7994C179.994 6.53074 174.021 0.717613 166.761 0.815238" fill="white"/>
            </svg>
            <a className="contact-link" href="https://www.linkedin.com/in/erik-gerbreder-180467216/">Erik Gerbreder</a>
          </div>
          <div id="github" className="contact-method">
            <svg width="206" height="202" viewBox="0 0 206 202" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M103 0.540649C46.1183 0.540649 0 46.6503 0 103.541C0 149.049 29.5095 187.657 70.4349 201.279C75.5849 202.232 77.4732 199.047 77.4732 196.326C77.4732 193.872 77.3788 185.76 77.3358 177.151C48.6847 183.383 42.6334 164.997 42.6334 164.997C37.9469 153.092 31.2004 149.925 31.2004 149.925C21.8532 143.53 31.9043 143.668 31.9043 143.668C42.2472 144.397 47.689 154.285 47.689 154.285C56.8732 170.027 71.7824 165.478 77.662 162.843C78.589 156.182 81.2584 151.642 84.2025 149.067C61.3279 146.466 37.2774 137.634 37.2774 98.1675C37.2774 86.9233 41.303 77.7306 47.895 70.5206C46.8221 67.9198 43.2943 57.4481 48.8907 43.2599C48.8907 43.2599 57.5427 40.4961 77.2243 53.8174C85.4385 51.5342 94.245 50.3926 103 50.3497C111.755 50.3926 120.57 51.5342 128.802 53.8174C148.457 40.4875 157.101 43.2599 157.101 43.2599C162.706 57.4481 159.178 67.9198 158.114 70.5206C164.714 77.7306 168.714 86.9233 168.714 98.1675C168.714 137.728 144.621 146.44 121.686 148.989C125.377 152.182 128.673 158.457 128.673 168.062C128.673 181.846 128.553 192.936 128.553 196.326C128.553 199.065 130.407 202.283 135.625 201.27C176.533 187.632 206.009 149.041 206.009 103.549C206 46.6589 159.882 0.540649 103 0.540649Z" fill="white"/>
            </svg>
            <a className="contact-link" href="https://github.com/Saa1amand3r">Saa1amand3r</a>
          </div>
          <div id="phone" className="contact-method">
            <svg width="206" height="206" viewBox="0 0 206 206" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M111.583 8.58334C111.583 6.3069 112.488 4.12369 114.097 2.514C115.707 0.904318 117.89 4.91273e-06 120.167 4.91273e-06C142.923 0.0249961 164.741 9.07615 180.832 25.1676C196.924 41.2591 205.975 63.0766 206 85.8333C206 88.1098 205.096 90.293 203.486 91.9027C201.876 93.5124 199.693 94.4167 197.417 94.4167C195.14 94.4167 192.957 93.5124 191.347 91.9027C189.738 90.293 188.833 88.1098 188.833 85.8333C188.813 67.6281 181.572 50.1743 168.699 37.3013C155.826 24.4282 138.372 17.1871 120.167 17.1667C117.89 17.1667 115.707 16.2624 114.097 14.6527C112.488 13.043 111.583 10.8598 111.583 8.58334ZM120.167 51.5C129.272 51.5 138.005 55.1173 144.444 61.556C150.883 67.9948 154.5 76.7276 154.5 85.8333C154.5 88.1098 155.404 90.293 157.014 91.9027C158.624 93.5124 160.807 94.4167 163.083 94.4167C165.36 94.4167 167.543 93.5124 169.153 91.9027C170.762 90.293 171.667 88.1098 171.667 85.8333C171.653 72.1789 166.223 59.0876 156.568 49.4324C146.912 39.7772 133.821 34.347 120.167 34.3333C117.89 34.3333 115.707 35.2377 114.097 36.8473C112.488 38.457 111.583 40.6402 111.583 42.9167C111.583 45.1931 112.488 47.3763 114.097 48.986C115.707 50.5957 117.89 51.5 120.167 51.5ZM198.215 143.676C203.189 148.664 205.982 155.421 205.982 162.465C205.982 169.51 203.189 176.266 198.215 181.254L190.404 190.258C120.107 257.56 -50.9592 86.5372 15.3041 16.0165L25.175 7.43317C30.1685 2.59798 36.8649 -0.0768238 43.8154 -0.012571C50.766 0.0516818 57.4118 2.84983 62.315 7.7765C62.5811 8.04259 78.486 28.7027 78.486 28.7027C83.2054 33.6606 85.8326 40.2466 85.8214 47.0916C85.8102 53.9366 83.1615 60.514 78.426 65.4565L68.4865 77.9538C73.9871 91.319 82.0744 103.466 92.2838 113.696C102.493 123.926 114.623 132.038 127.978 137.565L140.552 127.566C145.495 122.834 152.071 120.188 158.914 120.178C165.757 120.169 172.341 122.796 177.297 127.514C177.297 127.514 197.949 143.41 198.215 143.676ZM186.404 156.157C186.404 156.157 165.864 140.355 165.598 140.089C163.83 138.335 161.441 137.352 158.95 137.352C156.46 137.352 154.071 138.335 152.303 140.089C152.071 140.329 134.758 154.122 134.758 154.122C133.592 155.051 132.203 155.66 130.73 155.888C129.256 156.117 127.749 155.958 126.355 155.427C109.055 148.986 93.3415 138.902 80.2785 125.858C67.2155 112.814 57.1084 97.1155 50.6417 79.825C50.0683 78.4127 49.8814 76.8731 50.1001 75.3646C50.3189 73.8561 50.9354 72.433 51.8863 71.2417C51.8863 71.2417 65.6797 53.9205 65.9115 53.6973C67.6648 51.929 68.6485 49.5397 68.6485 47.0495C68.6485 44.5594 67.6648 42.17 65.9115 40.4018C65.6454 40.1443 49.8435 19.5872 49.8435 19.5872C48.0487 17.9779 45.7063 17.116 43.2965 17.1782C40.8867 17.2405 38.5919 18.2221 36.8826 19.9219L27.0118 28.5053C-21.4154 86.7346 126.827 226.754 177.855 178.533L185.675 169.521C187.507 167.824 188.608 165.48 188.744 162.986C188.88 160.492 188.041 158.043 186.404 156.157Z" fill="white"/>
            </svg>
            <p className="contact-link" style={{ marginBottom: 0 }}>+37125658248</p>
          </div>
        </div>
      );
    }
  }
  

  render() {

    return (
      <div className="blurred-rectangle" id="blurred-rectangle">
        <div className="left-side" id="left-side">
          {this.state.isMobile ? <MobileNavigation/> : <DesktopNavigation redirectToPage={this.redirectToPage}/>}
          {this.renderPageContent()}
        </div>
        <div className="right-side" id="right-side">
          {this.state.home ? <div className="photo" id="photo"></div> : <div></div>}
        </div>
      </div>
    );
  }
}


const domContainer = document.querySelector('#content-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Page />);
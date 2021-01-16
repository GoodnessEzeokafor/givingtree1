
function Header() {
    return (
        <header>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav class="uk-navbar-container" uk-navbar="dropbar: true;" 
      style={{
        position: 'relative',
        zIndex: '980'
      }}>
          <div class="uk-navbar-left">
              <div class="uk-logo">
                  <img src="/assets/img/logo.png" alt="" />
              </div>
          </div>
          <div class="uk-navbar-right">
              <div class="uk-logo">
                  <select class="uk-select">
                      <option disabled>Language</option>
                      <option default>English</option>
                      <option>French</option>
                  </select>
              </div>
          </div>
      </nav>
  </div>
  <div class="container">
      <div class="header--content uk-flex-wrap">
          <div class="register uk-width-1-4@m">
              <button class="reg--btn btn">Register</button>
          </div>
          <div class="header--image uk-width-1-2@m">
              <img src="/assets/img/tree.png" alt="" />
          </div>
          <div class="login uk-width-1-4@m">
              <button class="login--btn btn">Login</button>
          </div>
      </div>
      <div class="uk-width-1-1@M uk-text-center">
          <span class="title--holder">
              The Giving Tree
          </span>
      </div>
  </div>
        </header>
    );
  }
  
  export default Header;
  
    
  


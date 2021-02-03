function Dashboard(){
return(
    <>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav className="uk-navbar-container" uk-navbar="dropbar: true;" style={{position: 'relative', zIndex: 980}}>
      <div className="uk-navbar-left">
        <div className="uk-logo">
          <img src="/assets/img/logo.png" alt="" />
        </div>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-logo">
          <select className="uk-select">
            <option disabled>Language</option>
            <option default>English</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </nav>
  </div>		
  <main>
    <section className="container">
      <section className="dashboard--nav uk-flex uk-flex-center">
        <div className="uk-width-1-2@m uk-flex uk-flex-between">
          <div>
            <a href="#">
              <img className="uk-margin-right" src="/assets/img/tips.svg" alt="" />
              <span>Tips</span>
            </a>
          </div>
          <div>
            <a href="/">
              <img className="uk-margin-right" src="/assets/img/home.svg" alt="" />
              <span>Home</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img className="uk-margin-right" src="/assets/img/logout.svg" alt="" />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </section>		
      <div className="uk-child-width-1-4@m stats uk-margin-large-top" data-uk-grid>
        <div>
          <h2>1 027 029</h2>
          <p>All Participants</p>
        </div>
        <div>
          <h2>10</h2>
          <p>Participants Under You</p>
        </div>
        <div>
          <h2>2 000 034 165</h2>
          <p>Total earned in Your Circle in USD</p>
        </div>
        <div>
          <h2>50 070 714 159</h2>
          <p>Total earned So far on Platform in USD</p>
        </div>
      </div>
      <div className="uk-margin-large-top uk-flex-between uk-flex uk-flex-wrap">
        <div className="profile--card">
          <img src="/assets/img/earth.svg" alt="" />
          <div className="uk-flex-between uk-flex uk-flex-wrap">
            <h2>ID: 50129</h2>
            <h2>Earth</h2>
          </div>
          <div className="uk-child-width-1-4@m uk-margin-top uk-flex uk-flex-wrap">
            <div>
              <h2>2</h2>
              <h3>TIER</h3>
            </div>
            <div>
              <h2>1</h2>
              <h3>CYCLES</h3>
            </div>
          </div>
          <div className="uk-margin-top">
            <div>
              <h2>2.051 EOS</h2>
              <h3>BALANCE</h3>
            </div>
          </div>
          <div className="uk-margin-top uk-flex uk-flex-wrap uk-flex-between">
            <button>NAIRA</button>
            <button>USD</button>
            <button>EUR</button>
          </div>
          <div className="uk-margin-top uk-flex">
            <h2>1 EOS = $2.63</h2>
          </div>
          <div className="uk-child-width-1-4@m uk-margin-top uk-flex uk-flex-wrap">
            <div>
              <h2>2</h2>
              <h3>FIRE</h3>
            </div>
            <div>
              <h2>2</h2>
              <h3>WIND</h3>
            </div>
            <div>
              <h2>2</h2>
              <h3>EARTH</h3>
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-flex" htmlFor="notifications">
              <input id="notifications" className="uk-radio uk-margin-right uk-margin-small-top" type="radio" name="radio2" />
              <span className="radio--label">Enable Notifications</span>
            </label>
          </div>
        </div>			<div className="action--card">
          <img src="/assets/img/earth.svg" alt="" />
          <div>
            <div className="uk-flex-between uk-flex uk-flex-wrap">
              <div className="uk-margin action--inputs">
                <input id="invite" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
                <label htmlFor="invite">Invite Link</label>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
                <label htmlFor="contract">Smart Contract Address</label>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="wallet" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
                <label htmlFor="wallet">Wallet Address</label>
              </div>
            </div>
            <div className="uk-margin-top ">
              <div className="uk-margin action--inputs">
                <input id="id" className="uk-input id--input" type="text" defaultValue="ID: 50129" disabled />
                <button className="copy--button">Contact</button>
                <label htmlFor="id">Unique ID</label>
              </div>
            </div>
          </div>
          <div className="uk-margin-top uk-flex social--icons">
            <div>
              <img className="uk-margin-right" src="/assets/img/facebook.svg" alt="" />
              <img className="uk-margin-right" src="/assets/img/twitter.svg" alt="" />
              <img src="/assets/img/telegram.svg" alt="" />
            </div>
            <h3>Talk About Us</h3>
          </div>
        </div>		</div>
      <div className="partners uk-margin-large-top">
        <h2>Partners</h2>
        <div className="uk-flex uk-flex-center">
          <div className="partner--card uk-margin-large-top">
            <img src="/assets/img/earth.svg" alt="" />
            <div>
              <h2>ID: 50129</h2>
              <h2>Earth</h2>
            </div>
            <div className="matrix">
              <h3 className="uplink">Uplink</h3>
            </div>
            <div className="uk-child-width-1-4@m uk-margin-top uk-flex uk-flex-wrap">
              <div>
                <h2>2</h2>
                <h3>TIER</h3>
              </div>
              <div>
                <h2>1</h2>
                <h3>CYCLES</h3>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
              </div>
            </div>
          </div>	</div>
        <div className="uk-flex uk-flex-center uk-margin-large-top">
          <div className="personal--card">
            <span>YOU</span>
          </div>
        </div>
        <div className="uk-flex uk-flex-around">
          <div className="partner--card wind--card uk-margin-large-top">
            <img src="/assets/img/wind.svg" alt="" />
            <div>
              <h2>ID: 50129</h2>
              <h2>Wind</h2>
            </div>
            <div className="matrix">
              <h3 className="uplink">Invitee</h3>
            </div>
            <div className="uk-child-width-1-4@m uk-margin-top uk-flex uk-flex-wrap">
              <div>
                <h2>2</h2>
                <h3>TIER</h3>
              </div>
              <div>
                <h2>1</h2>
                <h3>CYCLES</h3>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
              </div>
            </div>
          </div>		<div className="partner--card wind--card uk-margin-large-top">
            <img src="/assets/img/wind.svg" alt="" />
            <div>
              <h2>ID: 50129</h2>
              <h2>Wind</h2>
            </div>
            <div className="matrix">
              <h3 className="uplink">Invitee</h3>
            </div>
            <div className="uk-child-width-1-4@m uk-margin-top uk-flex uk-flex-wrap">
              <div>
                <h2>2</h2>
                <h3>TIER</h3>
              </div>
              <div>
                <h2>1</h2>
                <h3>CYCLES</h3>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
              </div>
            </div>
          </div>	</div>
        <div className="uk-flex uk-flex-between">
          <div className="partner--card fire--card uk-margin-large-top">
            <img src="/assets/img/fire.svg" alt="" />
            <div>
              <h2>ID: 50129</h2>
              <h2>Fire</h2>
            </div>
            <div className="matrix">
              <h3 className="uplink">Invitee</h3>
            </div>
            <div className="uk-child-width-1-2@m uk-margin-top uk-flex uk-flex-wrap">
              <div>
                <h2>2</h2>
                <h3>TIER</h3>
              </div>
              <div>
                <h2>1</h2>
                <h3>CYCLES</h3>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
              </div>
            </div>
          </div>		<div className="partner--card fire--card uk-margin-large-top">
            <img src="/assets/img/fire.svg" alt="" />
            <div>
              <h2>ID: 50129</h2>
              <h2>Fire</h2>
            </div>
            <div className="matrix">
              <h3 className="uplink">Invitee</h3>
            </div>
            <div className="uk-child-width-1-2@m uk-margin-top uk-flex uk-flex-wrap">
              <div>
                <h2>2</h2>
                <h3>TIER</h3>
              </div>
              <div>
                <h2>1</h2>
                <h3>CYCLES</h3>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
              </div>
            </div>
          </div>		<div className="partner--card fire--card uk-margin-large-top">
            <img src="/assets/img/fire.svg" alt="" />
            <div>
              <h2>ID: 50129</h2>
              <h2>Fire</h2>
            </div>
            <div className="matrix">
              <h3 className="uplink">Invitee</h3>
            </div>
            <div className="uk-child-width-1-2@m uk-margin-top uk-flex uk-flex-wrap">
              <div>
                <h2>2</h2>
                <h3>TIER</h3>
              </div>
              <div>
                <h2>1</h2>
                <h3>CYCLES</h3>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
              </div>
            </div>
          </div>		<div className="partner--card fire--card uk-margin-large-top">
            <img src="/assets/img/fire.svg" alt="" />
            <div>
              <h2>ID: 50129</h2>
              <h2>Fire</h2>
            </div>
            <div className="matrix">
              <h3 className="uplink">Invitee</h3>
            </div>
            <div className="uk-child-width-1-2@m uk-margin-top uk-flex uk-flex-wrap">
              <div>
                <h2>2</h2>
                <h3>TIER</h3>
              </div>
              <div>
                <h2>1</h2>
                <h3>CYCLES</h3>
              </div>
            </div>
            <div className="uk-margin-top">
              <div className="uk-margin action--inputs">
                <input id="contract" className="uk-input" type="text" defaultValue="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2" disabled />
                <button className="copy--button">Copy</button>
              </div>
            </div>
          </div>	</div>
      </div>	</section>
  </main>

    </>
)
}

export default Dashboard
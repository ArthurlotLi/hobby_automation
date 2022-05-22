/*
  app.tsx

  Primary script for front-facing web application functionality.
*/

const React = require('react');
const ReactDOM = require('react-dom');

export class App extends React.Component {

  state = {
  };

  constructor(){
    super();
  }

  // Executed only once upon startup.
  componentDidMount(){
  }

  render() {
    return (
      <div>

        <div id="content">
          <div id="contentInner">
            <div id="dummyHeader">
              <div id="dummyHeaderInner">
                <div id="dummyTitleOuter">
                  <div id="dummyTitle"><i><b>Hobby Automation</b></i></div>
                  <div id="dummySubtitle"><i><b>AI Augmented Software</b></i></div>
                </div>
                <div id="dummyContentLinks">
                  Overview | Home Automation | AI Assistant | Cloud AI Server | Contact
                </div>
              </div>

              <div id="dummyHeaderStrip">

              </div>
            </div>

            <div id="contentPages">

              <div id="overview">

                <div id="overviewTitle">
                  <b>Home Automation and AI Assistant Suite</b>
                </div>
                <div id="overviewSubtitle">
                  Complete online guide
                </div>

                <div id="overviewImage">
                  <img id="overviewImageImg" src={require("../../../assets/overview.png").default}/>
                </div>

                CONTENT HERE.
              </div>

            </div>

          </div>
        </div>

        <div id="header">
          <div id="headerInner">
            <div id="titleOuter">
              <div id="title"><i><b>Hobby Automation</b></i></div>
              <div id="subtitle"><i><b>AI Augmented Software</b></i></div>
            </div>
            <div id="contentLinks">
              Overview | Home Automation | AI Assistant | Cloud AI Server | Contact
            </div>
          </div>
          <div id="headerStrip">

          </div>
        </div>

      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
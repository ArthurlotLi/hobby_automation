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
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
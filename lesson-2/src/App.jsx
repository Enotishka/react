import React from 'react';
import "./App.css";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      messageList: [
        {
          text: "Hi",
          author: "Julia"
        },
        {
          text: "Hello",
          author: "Dmitry"
        }

      ]
    };
  } 

  render() {
    return <div className="app">
      <div className="chat content">
        <div className="messages">{this.state.messageList.map((message, i) => <div key={i}>{message.author}: {message.text}</div>)}</div>
        <div className="footer">
          <input onChange={e => this.setState({message: e.target.value})} value={this.state.message} type="text"></input>
          <button onClick={this.handleSend.bind(this)}>Send</button>
        </div> 
      </div>
    </div>;
  }

  handleSend() {
    const {messageList} = this.state;
    messageList.push({
      text: this.state.message,
      author: "Julia",
    });
    this.setState({messageList, message: ""});

  }
}


export default App;

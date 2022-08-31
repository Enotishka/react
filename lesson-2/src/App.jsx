import React, {useState} from 'react';
import "./App.css";


function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  return <div className="app">
    <div className="chat content">
      <div className="messages">{messageList.map((m, i) => <div key={i}>{m.author}: {m.text}</div>)}</div>
      <div className="footer">
        <input onChange={e => setMessage(e.target.value)} value={message} type="text"></input>
        <button onClick={() => {
          const list = [...messageList];
          list.push({
            text: message,
            author: "Julia",
          });
          setMessageList(list);
          setMessage("");
        }}>Send</button>
      </div> 
    </div>
  </div>;
}

export default App;

import React, {useState, useEffect} from 'react';
import "./App.css";


function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const chatBotName = "chatBot";

  const send = (message) => {
    const list = [...messageList];
    list.push(message);
    setMessageList(list);
  };

  useEffect(() => {
    if (messageList.length === 0) {
      console.log("message list is empty");
      return;
    }
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage.author === chatBotName) {
      console.log("last message is from bot");
      return;
    }
    setTimeout(() => send({
      text: "(-_-)",
      author: chatBotName,
    }), 1500);
  }, [messageList]);

  return <div className="app">
    <div className="chat content">
      <div className="messages">{messageList.map((m, i) => <div key={i}>{m.author}: {m.text}</div>)}</div>
      <div className="footer">
        <input onChange={e => setMessage(e.target.value)} value={message} type="text"></input>
        <button onClick={() => {
          send({
            text: message,
            author: "Julia",
          });
          setMessage("");
        }}>Send</button>
      </div> 
    </div>
  </div>;
}

export default App;

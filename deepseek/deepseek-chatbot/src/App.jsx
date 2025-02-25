import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const chatApi = async (message) => {
  const response = await axios.post('http://localhost:3000/chatai', 
    // 请求体 
    message, {
      // 请求头 
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  return response.data;
}

// react 内置 hooks 函数  副作用
const App = () => {
   const [question, setQuestion] = useState('');
   const [conversation, setConversation] = useState([]);
   const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const storeConversation = localStorage.getItem('conversation');
    if (storeConversation) {
      setConversation(JSON.parse(storeConversation));
    }

    // const callChatApi = async () => {
    //   await chatApi({question: 'hello'});
    // }
    // callChatApi();
  },[])
 
  const askQuestion = async () => {
    if (question.trim() === '') {
      return;
    }

    setConversation((prev)=>[
      ...prev,
      {
        question: question,
        answer: '正在加载中...'
      }
    ])

    setLoading(true);
    
    try {
      const message = `你是一个地理学家，你知道${question}吗？`
      const response = await chatApi({message:message});
      console.log(response);
      //更新最后一个conversation的answer
      setConversation((prev)=>{
        prev[prev.length-1].answer = response
        localStorage.setItem('conversation', JSON.stringify(prev));
        return [
          ...prev
        ]
    })
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
      setQuestion('');
    }

  }
  

  return (
    <div className='chat-container' style={{position: 'relative'}}>
      <p className='chat-title'>我的智能助理</p>
      {
        conversation.map((item, index) => (
            <div key={index} className='chat-item'>
              <div className='question-container'>
              <span>me:</span>{item.question}
              </div>
              <div className='answer-container'>
                <span>ai:</span>{item.answer.message}
              </div>
            </div>
        ))
      }
      <div className='chat-input-container'>
        <input 
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyUp={(e)=> e.key === 'Enter' && askQuestion()} 
        style={{width :'80%'}}
        />
        <button onClick={askQuestion}>提交</button>
      </div>
      {
        loading && (
          <div className='chat-loading'>
            <p>正在加载中...</p>
          </div>
        )
      }
    </div>
  )
}

export default App
/** DOM 树ready 之后 onLoad 晚了， DOMContentLoaded html节点
 *  事件监听
 *  请求....
 * 不出问题， 最快的时机（onLoad 早）
 */
const MESSAGE_LIMIT = 50; // 显示的消息条数
document.addEventListener('DOMContentLoaded', function () {
  // console.log('DOMContentLoaded')

  const backToTopButton = document.getElementById('back-to-top');
  const chatLogElement = document.getElementById('chat-log');
  //获得输入框元素
  const messageInput = document.getElementById('message');
  //获得加载中元素
  const loadingIndicator = document.querySelector('.loading-indicator');

  const conversationListElement = document.getElementById('conversation-list');

  // 监听滚动事件,显示回到顶部按钮
  chatLogElement.addEventListener('scroll', () => {
    if (chatLogElement.scrollTop > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  })

  // 点击回到顶部
  backToTopButton.addEventListener('click', () => {
    chatLogElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  //打字机效果
  const typeMessage = (bubble, content, callback) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < content.length) {
        bubble.textContent += content.charAt(index++);
      } else {
        clearInterval(interval);
        if (typeof callback === 'function') {
          callback();
        }
      }
    }, 50)
  }

  // 添加复制按钮
  const addCopyButton = (messageWrapper, content) => {
    const copyButton = document.createElement('button');
    copyButton.innerHTML = `<i class="fa fa-copy"></i>`;
    copyButton.classList.add('copy-button');
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(content)
        .then(() => {
          alert('复制成功');
        })
        .catch(error => {
          console.log(error, 'error')
          alert('复制失败');
        })
    })
    messageWrapper.appendChild(copyButton);
  }

  // 保存聊天记录到本地
  const saveChatLog = (role, content) => {
    const chatLog = JSON.parse(localStorage.getItem('chatLog')) || [];
    chatLog.push({
      role,
      content
    })
    localStorage.setItem('chatLog', JSON.stringify(chatLog));
  }


  // 添加消息在 chat-log 元素中
  const appendMessage = (role, content,type='save') => {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message', role);

    const bubble = document.createElement('div');
    bubble.classList.add('bubble', `${role}-bubble`);
    //如果是历史消息，则不用流式输出的打字机效果
    if (role === 'assistant' && type=='save') {
      typeMessage(bubble, content, () => addCopyButton(messageWrapper, content));
    } else if(role === 'assistant' && type=='init'){
      bubble.textContent = content;
      addCopyButton(messageWrapper, content);
    } else {
      bubble.textContent = content;
    }
    messageWrapper.appendChild(bubble); // 只需要一次添加
    chatLogElement.appendChild(messageWrapper);
    // 将滚动条滚动到最底部
    chatLogElement.scrollTop = chatLogElement.scrollHeight;
    if(type=='save') {
      saveChatLog(role, content); // 保存聊天记录到本地
    }

  }



  // 发送消息
  // 发送消息 调用接口 得到AI回复
  const sendMessage = (message) => {
    // fetch promise 的实例
    return fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { "role": "user", "content": message }
        ],
        temperature: 0.7
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'data')
        return data.message
      })
      .catch(error => {
        console.log(error, 'error')
      })
    // 链式调用

  }
  // 显示加载中
  const showLoadingIndicator = () => {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }
  }
  // 隐藏加载中
  const hideLoadingIndicator = () => {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  }
  // 点击发送按钮 后 处理消息的逻辑
  const handleMessage = async () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
      //先添加用户到chat-log
      appendMessage('user', messageText);
      messageInput.value = '';
      // llm接口调用
      try {
        //显示加载中
        showLoadingIndicator();
        const assistantMessage = await sendMessage(messageText);
        hideLoadingIndicator();
        //再添加AI回复到chat-log
        appendMessage('assistant', assistantMessage);
      } catch (error) {
        console.log(error, 'error')
        appendMessage('assistant', '对不起，我不明白您的意思。');
      }
    }
  }
  // 监听发送按钮点击事件
  document.querySelector('.send-icon').addEventListener('click', handleMessage)
  //为输入框绑定回车事件
  messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      /*
      在 <textarea> 里，默认情况下按下回车键会插入一个换行符。
      所以不能按下回车键插入换行符，而是触发sendMessage()
      */
      event.preventDefault();//阻止事件默认行为的方法 
      handleMessage();
    }
  })


  // 加载聊天记录
  // 用户退出后，再点击首页依旧可以看到历史记录
  const loadChatLog = () => {
    const chatLog = JSON.parse(localStorage.getItem('chatLog')) || [];
    // 只显示最近的50条消息
    // -表示倒叙，没有end参数代表到最后
    chatLog.slice(-MESSAGE_LIMIT).forEach(({ role, content }) => appendMessage(role, content, 'init'))//这里不应该再次调用saveChatLog，因为已经保存过了，且不需要流式输出
  }

  const saveCurrentConversation = () => {
    //在清除前，保存一下当前的对话记录,并且存放在chatHistory中
    const currentChatLog = JSON.parse(localStorage.getItem('chatLog')) || [];

    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    const timestamp = new Date().toLocaleString();

    chatHistory.push({
      name: `${chatHistory.length + 1} ${timestamp}`,
      messages: currentChatLog
    })
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }

  const loadConversationList = () => {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach((content, index) => {
      const button = document.createElement('button');
      button.setAttribute('data-index', index);
      button.innerHTML = `对话${content.name} <span class="delete-btn" data-index="${index}">x</span>`;
      // 性能不好，可以使用事件委托
      // button.addEventListener('click', () => {
        
      // }) 
      conversationListElement.appendChild(button);
    }) 
  }

  const deleteChatHistory = (index) => {
       
  }
  

  
   //事件weituo
   conversationListElement.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index') || 0;
    //删除历史
    if(event.target.nodeName === 'SPAN') {
      deleteChatHistory(index);  
    }
     loadConversation(index);
   })

  //点击哪条对话，就加载哪条对话
  const loadConversation = (index) => {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    const conversation = chatHistory[index].messages || [];
    chatLogElement.innerHTML = '';
    conversation.slice(-MESSAGE_LIMIT).forEach(({ role, content }) => appendMessage(role, content, 'init'));
    // 
    localStorage.setItem('chatLog', JSON.stringify(conversation));
  }


  // 新对话
  const starNewConversation = () => {
    //保存当前对话
    saveCurrentConversation();
    //在localStorage中清除掉本次的对话记录
    //点击新对话，当前页面应该为空，如果还保留上次的对话记录，loadChatLog()会再次渲染出来
    localStorage.removeItem('chatLog');
    // 清空聊天记录
    chatLogElement.innerHTML = '';
  }

  const main = () => {
    // chat-log
    loadChatLog();
    // conversation-list
    loadConversationList();
  }

  window.starNewConversation = starNewConversation
  window.saveCurrentConversation = saveCurrentConversation
  main();
 //chatLog： index: [{ role, content}]
 //chatHistory: index: { name, messages: [ { role, content} ] }


})



/* 所有的资源加载完了 */
// window.addEventListener('load', function(event) {
//   // 当所有资源（包括样式表、图片等）加载完毕后执行的代码
//   // console.log('All resources finished loading');
// });




//   scroll系列:
// 1、scrollWidth和scrollHeight:获取元素内容区域的宽高(content + padding)
// 注意点:如果盒子的内容超出了,此时获取的包含超出的部分
// 2、scrollLeft和scrollTop: 元素在水平和垂直方向上被滚去的举例
//

// const chatLog = JSON.parse(localStorage.getItem('chatLog')) || [];，
// 当 localStorage.getItem('chatLog') 返回 null 时，
// 直接使用 JSON.parse 会报错。不过代码里使用了逻辑或运算符 ||，
// 其短路特性可以避免这个问题。如果 JSON.parse(localStorage.getItem('chatLog')) 因为传入 null 抛出异常，由于异常情况的
// 存在可以看作是“假值”，逻辑或运算符就会使用右侧的 [] 作为结果，从而避免了程序崩溃。
// && || 短路
//html5 提供了AbortController 接口

const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.github.com/users/shunwuyu', { signal })
  .then(res => res.json())
  .then(console.log)
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('The fetch was aborted')
    } else {
      console.log(err)
    }
  })

//   controller.abort();
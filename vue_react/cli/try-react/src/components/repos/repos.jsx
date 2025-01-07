import { useState } from 'react'
import './repos.css'
function Repos() {
    // const repos = [

    // ]

    //使用一个响应式数据状态
    // useState 返回一个数组 结构，第一个元素是当前状态，第二个元素是更新状态的函数
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    fetch('https://api.github.com/users/uyu8/repos')
       .then(response => response.json())
       .then(data => {
            setLoading(false)
            setRepos(data)
       })
    // js区域
    return(
      //html? JSX语法 js写HTML
      // JS中class是关键字，所以用className代替
      <div className="github-repos">
        {loading && <p>Loading...</p>}
        <ul>
          {
          repos.map(repo=>(
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
              <span>作者：{repo.owner.login}</span>
          </li>
          ))
         }
        </ul> 
        {!loading && repos.length === 0 && <p>No Repos Found</p>}
      </div>

    )
}

export default Repos
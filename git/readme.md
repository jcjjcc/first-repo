- git 有哪些命令
git - 版本控制软件   多人协作 
写项目？ 电脑坏了  保存代码的版本且安全  团队间代码的协作
git 帮我们在本地 管理代码版本 、   远程仓库（分布式）
常用操作  自我代码的管理和简单的合作
  - git init 初始化
  - git add

把代码加入仓库分三步
 - git add.
 - git commit -m "提交说明"
 - git push origin main


 - git branch 分支
 - git checkout 切换分支
 - git merge 合并分支
 
 ## 大厂需要的git 能力
 - git是必备技能
 - 高级技巧，考点
 - git 文档内置
   git help 常用的git命令
   git help -a 列出所有的名单
   vi编辑器  :j :k 上下翻页  :q 退出
   git help add 深入了解某个命令
   你是如何了解git命令的作用和参数的？

## 代码仓库
  文件夹 -》开发目录 -》代码仓库
  - 好处
    项目代码的版本(version) git 关注的是代码的版本  
    时光穿梭机 回到文件的任意版本 有时候我们要回退 
  - git仓库里存的是啥？
   文件？ 存的是文件的版本 拿着照相机一直拍
   .git 目录 就是仓库
   git相关的内容就放在.git目录里
  - git config 配置   操作留下了责任人，多人协作的思想
   老板就知道是谁提交的代码
   git config --global user.name "xxx"
   git config --global user.email "xxx@xxx.xxx" 本地 远程 比对
   配置  --gloabl 全局

  - git status
    显示当前仓库的状态
    on branch master 主分支上 默认分支

    untracked file 未跟踪的文件 还没有纳入版本管理 
    use commit

  添加到仓库是件比较严谨的事情
  - git add file 
    将文件的当前版本 先添加到暂存区
    git status
  
  - 为什么需要暂存区，仓库 两个概念
    - 后悔药
    - 分几次add，然后一次性commit
      进货，相当于一辆买菜车 （git add 多次） 买完了  （git commit 一次） 买好菜了，就一次结账记录
  
  - git status
    让我们了解到当前仓库的状态

  - git log
    代码提交记录
    -- oneline 一行显示

  - 暂存区  仓库
    - 一次性多个文件多次加入暂存区，可以后悔，可以组成一个提交逻辑（任务） 
    - 一次commit -m "提交说明"  要规范 讲清楚任务
    - 不要随便提交commit ，围绕开发需求
      一个上午 2-5次commit









    git config --list
    git config --gloabl user.ui true
    git config --list
    git status
      On branch master

      No commits yet
 
      nothing to commit (create/copy files and use "git add" to track)
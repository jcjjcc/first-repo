# langchain AI 框架开发

- modelscope 魔搭
  - 国内顶级的AI社区 
  - Hugging Face

- python notebook   .ipynb
  - python 适合nlp(NLP（自然语言处理）是让计算机理解、解释和生成人类语言的技术。) 、数据分析

- 为何 langchain ？
  - LangChain 是一个用于构建和部署语言模型应用的框架，它简化了从模型选择、数据处理到应用集成的开发流程。
  - LangChain 提供了一套工具和库，让开发者可以更容易地创建、定制和部署基于语言模型的应用和服务。
  - 方便的再各个大模型切换
- langchain_openai
  - 让我们使用OpenAI更方便, 让AI应用保持优秀，不绑死一个模型，可以自由切换
  - model 是抽象的，方便切换
  - 好快
- langchain.schema
  - 定义了langchain中的数据结构，预制
  - HumanMessage
  - SystemMessage
- langchain.prompts
  - 进入AI全栈领域的标志
  - 核心模块
  - PromptTemplate
   - from_template 生成prompt模板
   - format 生成模板
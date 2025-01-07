# 魔搭社区
> 国内最大的AI模型开发平台

## 大模型 LLM Large(参数规模) Language Model
- 输入 -》code(编程) -》输出   传统的开发方式
- 输入(prompt) -》LLM(大模型) -》输出 最酷的开发方式  大模型替代了程序
- 参数的规模单位是？ LLM训练出来的参数 上百亿  全球的知识   72B bilion 720亿


- 首选大模型
  为了业务，选择合适的大模型
  openai 花费  闭源
  coze ,qwen, kimi 开源的
- 魔搭社区
  国内最大的开源大模型社区

- 云端AI环境
- 机器学习 nlp
  情感分析的例子
- python 语法
  - module 模块化 复用、职责分离
  from modelscope.pipelines import pipeline
  modelscope 魔搭社区 功能很多  pipelines 有很多的管道    管道(nlp 派出一个管道实现它特定的功能) 

- 大模型的一种damo/nlp_structbert_sentiment-classification_chinese-base
 模型有很多种 达摩院/ 情感分析_分类/ 支持中文
 医疗模型/金融模型等等

 semantic_cls = pipleine(Tasks.text_classification,
'damo/nlp_structbert_sentiment-classification_chinese-base')
  - pipleline 打开管道
  - 选择一项任务 Tasks.text_classification
  - 选择模型 damo/nlp_structbert_sentiment-classification_chinese-base

- 模型训练完之后就不成长了，新的知识就没法加入进来，不太准确，所以需要持续的更新模型，不断的迭代优化。
   喂一些数据 并对数据进行标注  微调大模型

- 前后端为何要学LLM？
  - 端模型的时代到来了
  - 小尺寸模型越来越强 AI手机 AI汽车
  - Marscode 提高学习和开发效率
  - 很多工作可以交给大模型
   输入(prompt) -》LLM(大模型) -》输出

- LLM需要算力，来自GPU
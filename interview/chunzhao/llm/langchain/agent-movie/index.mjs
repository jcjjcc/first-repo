import { ChatOpenAI } from "@langchain/openai";
// agent 模块
// agent 自动化 
import { initializeAgentExecutorWithOptions } from "langchain/agents";
// fileLoader urlLoader
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";

import { DynamicTool } from "langchain/tools";
import { config } from "dotenv";
config();

async function main() {
  // 智能体对模型要求高
  const model = new ChatOpenAI({
    modelName: "gpt-4o",
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
  });

  const scrapingTool = new DynamicTool({
    name: "WebScraper",
    description: "Scrapes movie information from a given URL.",
    func: async (url) => {
    //   console.log(url);
    try{
      const loader = new CheerioWebBaseLoader(url,{
        selector: "tr.item"
      });
      const docs = await loader.load();
      return docs[0].pageContent;
    } catch(err) {
      return `Error: ${err.message}`;
    }
}
  })

  const executor = await initializeAgentExecutorWithOptions(
    [scrapingTool], // 工具
    model,// 模型
    {
      // 0 样本
      agentType: "zero-shot-react-description",
      // 输出
      verbose: true
    }
  )

  const result = await executor.call({
    input: "请访问 https://movie.douban.com/chart 并找出中国电影"
  })

  console.log(result.output, '/////')
}

main()
  .catch(console.error)
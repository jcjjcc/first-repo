import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();


const {
  OPENAI_API_KEY,
  OPENAI_BASE_URL
}  = process.env

// 实例化openai对象
const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: OPENAI_BASE_URL,
});

// csv 格式 
const saleData = `销售数据:
日期,产品,销量,单价,总收入
2023-01-01,iPhone 13,100,6000,600000
2023-01-01,iPhone 14,50,8000,400000
2023-01-02,iPhone 13,80,6000,480000
2023-01-02,iPhone 14,60,8000,480000
2023-01-03,iPhone 13,120,5800,696000
2023-01-03,iPhone 14,80,7800,624000
`


// 专业的销售数据分析prompt 封装
const genSaleReport = async (saleData, query) => {
  const prompt =  `
  You are an AI assistant that generates sales reports based on the given data.
  Here is the sales data:\n ${saleData} \n\n
  Please generate a report to answer the following question: \n
  ${query}
  `

  let response = await client.chat.completions.create({
    model:  'gpt-3.5-turbo',
    max_tokens: 1000, // 按token 收费 中午吃了吗？
    prompt,
    temperature: 0
  })

  return response.choices[0].text
}

const main = async () => {
  const query = '根据上述销售数据，计算iphone13和iphone14的总销量各是多少？'
  const report = await genSaleReport(saleData, query)
  console.log(report);
}

main()
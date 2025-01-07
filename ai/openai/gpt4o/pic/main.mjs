import dotenv  from "dotenv";
import OpenAI from "openai/index.mjs";
dotenv.config();
console.log(process.env.OPENAI_API_KEY,'////');
// 实例化 Openai 客户端
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api.302.ai/v1'
})

// 良好的编程风格
// 主函数 执行的入口
const main = async () => {
 try {
       // openai 的调用是异步
    // await 等会儿
    // chat 聊天的方式调用
    // completions 完成问答
    // create 创建一个实例
    const respone = await client.chat.completions.create({ //以聊天的方式完成问答
        model: 'gpt-4o',
        //模拟对话列表
        messages: [
            {
                role: 'user',// 角色 以用户的身份像大模型提问
                content: [
                    {
                        type: 'text',
                        'text': '请描述以下图片的内容'
                    },
                    {
                        type: 'image_url',
                        'image_url': {
                            'url' :"https://ts1.cn.mm.bing.net/th/id/R-C.240a564addca5a1ca76f89cdebcb5e56?rik=RDPtCQnVrXOYXQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2f251%2fw1080h1571%2f20191002%2f1d6e-ifmectk5810007.jpg&ehk=GVJ8dxu9kSwWmOOfF6YtNdtcJj3DwR%2bM71oav%2fMuN4U%3d&risl=&pid=ImgRaw&r=0"
                        }
                    }
                ]
            }
        ],
        max_tokens: 300
  })
    console.log(respone.choices[0].message.content)
 } catch (error) {
    console.log(error)
 }
}

main()
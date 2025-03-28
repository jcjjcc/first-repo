import Redis from "ioredis";

const redis = new Redis()

// key =》value   NOSQL 非关系型数据库
const initialData = {
    "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
  }

  export async function getAllNotes() {
   const data = await redis.hgetall('notes') 
   // redis 
   if (Object.keys(data).length === 0) {
       //数据格式是JSON
       await redis.hmset('notes', initialData)

   }
   return await redis.hgetall('notes')
  }
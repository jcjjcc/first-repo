import Redis from 'ioredis' // redis node js client
import { v4 as uuidv4 } from 'uuid';
const redis = new Redis()
// key=>value  NOSQL JSON 非关系性数据库
const initialData = {
  "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

// 列表
export async function getAllNotes() {
  const data = await redis.hgetall("notes"); 
  // redis api collection  mysql table
  if (Object.keys(data).length == 0) {
    // 数据格式是JSON
    await redis.hset("notes", initialData);
  }
  return await redis.hgetall("notes");
}

// add
export async function addNote(data) {
  // 唯一值
  const uuid = uuidv4();
  // const uuid = Date.now().toString();
  await redis.hset("notes", [uuid], data);
}

export async function getNote(uuid){
    console.log('当前uuid',uuid)
    return await redis.hget("notes", uuid);
}

export async function delNote(uuid){
    
    return redis.hdel("notes", uuid);
}

export async function updateNote(uuid, data){
    return redis.hset("notes", [uuid], data); 
}
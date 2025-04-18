

//
class TextGenerationPipeline {
   // 蒸馏 方法用的是Qwen 闭源模型   
   // 让面试官表达 请问他
   static model_id = "onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX";
 
   static async getInstance(progress_callback = null) {
     // 分词器
     this.tokenizer ??= AutoTokenizer.from_pretrained(this.model_id, {
       progress_callback,
     });
     // 模型
     this.model ??= AutoModelForCausalLM.from_pretrained(this.model_id, {
       dtype: "q4f16",
       device: "webgpu",
       progress_callback,
     });
 
     return Promise.all([this.tokenizer, this.model]);
   }
   
 }





//不可以访问DOM
//主要用于处理一些耗时的任务，比如网络请求、文件读写、复杂的计算等，避免阻塞主线程，提高用户体验。
async function check(){
    try {
       const adapter = await navigator.gpu.requestAdapter(); 
       if(!adapter){
        throw new Error('webgpu not support'); 
       }
    } catch (error) {
       self.postMessage({
          status: 'error',
          message:error.toString() 
       }) 
    }
}

async function load(){
   self.postMessage({
    status: 'loading',
    message: 'loading modeling...' 
   }) 
}


self.onmessage = function (event) {
    // console.log(event.data)
    const {type, data} = event.data;

    switch (type) {
       case 'check':
        check();
        break; 
       case 'load':
        load();
        break;
    }
    self.postMessage({
        msg: 'hello world'
    })
}


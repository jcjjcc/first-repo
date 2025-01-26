import { ref, onMounted, onUnmounted } from 'vue';

export default function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
    console.log('我动了')
  }

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return { x, y };
}




/*
也就是说“mousemove”这个事件发生了，它就会被抽象成一个对象，这个对象就是传入update的event参数

当mousemove事件发生时，浏览器会自动创建一个事件对象，并将这个对象作为参数传递给注册的事件处理函数（在这个例子中是update函数）。这个事件对象包含了与事件相关的所有信息，例如事件的类型、触发事件的元素、鼠标指针的位置等等。

在您的代码中，update函数通过访问event对象的pageX和pageY属性来获取鼠标指针的当前位置，并将这些值赋给x和y这两个响应式变量。

总结一下，mousemove事件发生时，浏览器会自动创建一个事件对象，并将其传递给update函数，这个事件对象包含了鼠标指针的当前位置信息。
*/
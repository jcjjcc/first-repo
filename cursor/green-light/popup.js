document.getElementById('changeColor').addEventListener('click', async () => {
  try {
    // 获取当前标签页
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!tab.id) return;

    // 注入并执行脚本
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.body.style.backgroundColor = '#90EE90';
      }
    });
  } catch (err) {
    console.error('Failed to execute script:', err);
  }
}); 
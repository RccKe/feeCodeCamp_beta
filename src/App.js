import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

const Random = () => {

  const [quote, setQuote] = useState([]);
  const [randomColor, setRandomColor] = useState({
    backgroundColor: allColor(),
});

  useEffect(() => {
    axios.get('/dataJson/data.json')
      .then(response => {
        const newData = response.data;
        const randomQu= newData[Math.floor(Math.random() * newData.length)]
        setQuote(randomQu)
      })
      .catch(error => {
        console.log("获取错误", error);
      })
  }, [])

  return (
    <div id='quote-box'>
      <div id='text'>{quote.quote}</div>
      <div id='author'>{quote.source}</div>
      <button id='id="new-quote'></button>
      <a href="" id='tweet-quote'></a>
    </div>
  )
}

export default Random;


// 这是一个随机引语生成器的项目，要求使用React等前端技术实现。下面是用户故事，以及一些建议的实现步骤：

// 用户故事:
// 首次加载引语： 在第一次加载时，我的引语机器会在id="text"的元素中显示一个随机引语。
// 首次加载作者： 在第一次加载时，我的引语机器会在id="author"的元素中显示随机引语的作者。
// 点击新引语按钮： 当#new-quote按钮被点击时，我的引语机器应该获取一个新的引语并在#text元素中显示它。
// 获取新引语作者： 当#new-quote按钮被点击时，我的引语机器应该获取新引语的作者并在#author元素中显示它。
// 推特引语： 我可以通过点击#tweet-quote a元素来推特当前引语。该a元素的href属性应该包含"twitter.com/intent/tweet"路径以推特当前引语。
// 引语框水平居中： #quote-box包装元素应该水平居中。请在浏览器的缩放级别为100％且页面最大化的情况下运行测试。
// 实现步骤：
// 创建React应用程序，包括一个包含id="quote-box"的主组件。
// 在主组件中，创建包含id="text"的元素，用于显示引语文本。
// 在主组件中，创建包含id="author"的元素，用于显示引语作者。
// 创建一个用于获取新引语的函数，并将其绑定到#new-quote按钮的点击事件上。
// 创建一个用于推特引语的函数，并将其绑定到#tweet-quote a元素的点击事件上。
// 在组件的生命周期中，使用componentDidMount或useEffect来在首次加载时获取并显示随机引语和作者。
// 使用CSS样式使#quote-box水平居中。
// 使用测试框架（如Jest）编写测试，确保所有用户故事都得到满足。

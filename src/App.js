import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

const Random = () => {

  // 生成随机颜色的函数
  const allColor = () => {
    const r = Math.floor(Math.random() * 101);
    const g = Math.floor(Math.random() * 101);
    const b = Math.floor(Math.random() * 101);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const [quote, setQuote] = useState({});
  const [randomColor, setRandomColor] = useState({
    backgroundColor: allColor(), color: allColor()
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/dataJson/data.json')
      .then(response => {
        const newData = response.data;
        const randomQu = newData[Math.floor(Math.random() * newData.length)];
        setQuote(randomQu);

        // 在获取新的引用后，更新颜色
        setRandomColor({
          backgroundColor: allColor(),
        });
      })
      .catch(error => {
        console.log("获取错误", error);
      })
  };

  const detchButton = () => {
    fetchData()
  }

  return (
    <div id='quote-box' style={{ backgroundColor: randomColor.backgroundColor }}>
      <div className='quote-box1'>
        <div id='text' style={{ color: randomColor.backgroundColor }}>{quote.quote}</div>
        <div id='author' style={{ color: randomColor.backgroundColor }}>- {quote.source}</div>
        <button id='new-quote' onClick={detchButton} style={{ backgroundColor: randomColor.backgroundColor }}>New quote</button>
        <a href="https://www.twitter.com/intent/tweet" id="tweet-quote" target="_blank">
          <svg style={{ backgroundColor: randomColor.backgroundColor }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
          </svg>
        </a>

        <a href="https://www.tumblr.com/" id="tumblr-link" target="_blank">
          <svg style={{ backgroundColor: randomColor.backgroundColor }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M17.594,23.641h-2.681c-0.692,0-1.253-0.561-1.253-1.253v-4.613c0-0.758,0.475-1.428,1.189-1.681	c1.738-0.614,4.822-2.439,5.33-7.712C20.255,7.605,20.892,7,21.674,7h4.993c0.681,0,1.234,0.552,1.234,1.234v7.267h5.053	c0.692,0,1.253,0.561,1.253,1.253v5.635c0,0.692-0.561,1.253-1.253,1.253h-5.053v8.142c0,1.85,0.893,2.559,1.745,2.559	c0.67,0,1.828-0.306,2.685-0.538c0.712-0.193,1.196,0.026,1.444,0.747s1.598,4.557,1.598,4.557c0.246,0.703-0.006,1.477-0.615,1.906	c-1.152,0.812-3.319,1.924-6.547,1.924c-5.014,0-10.617-2.228-10.617-10.542C17.594,30.745,17.594,23.641,17.594,23.641z"></path>
          </svg>
        </a>


      </div>
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

import missedArticles from './data/missed-articles.json';
import yourArticles from './data/your-articles.json';
import './App.css';

import MissedArticlefun from './MissedArticlefun';
import YourArticles from "./YourArticles";


function App() {
  return (
    <div>
      <b>For you</b>
      <hr/>
      <YourArticles articles = {yourArticles}/>
      <b>In case you missed it</b>
      <hr />
      <MissedArticlefun articles = {missedArticles}/>

  </div>)
  ;
}

export default App ;

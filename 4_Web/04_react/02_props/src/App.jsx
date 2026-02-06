import './App.css';
import Button from './practice/Button';
import FunctionComponent from './practice/functionComponent';
import FunctionComponent01 from './practice/propsPractice01';
import FunctionComponent02 from './practice/propsPractice02';
import Counter from './practice/Counter';

function App() {
  return (
    <div className="App">
      {/* props */}
      <h1>props 활용</h1>
      <FunctionComponent name = "Hyposelenia" age = "20"/>
      <FunctionComponent />

      <Button link = "http://www.google.com">Google</Button>

      <hr />
      {/* 실습1 */}
      <FunctionComponent01 food = "삼겹살">
      </FunctionComponent01>

      <hr />
      {/* 실습2 */}
      <FunctionComponent02 title = "How to Take Smart Notes" author = "Soenke Ahrens" price = "26,980" type = "교육학">
      </FunctionComponent02>

      <hr />
      {/* useState */}
      <h1>useState 활용</h1>
      <Counter/>
    </div>
  );
}

export default App;
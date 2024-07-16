import './App.css';

import FancyBorder from "./components/FancyBorder";
import Dialog from "./components/Dialog";

function App() {
  return (
    <div className="App">
      {/* Containment : 직접 html 코드를 적어줌 */}
      <FancyBorder>
        <h1>제목</h1>
      </FancyBorder>
      <FancyBorder color="red">
        <h1>제목</h1>
      </FancyBorder>

      {/* Specialization */}
      <Dialog
        title="어서오세요"
        message="우리 사이트에 방문하신 것을 환영합니다." />
    </div>
  );
}

export default App;

import './App.css';
import UseMemoEx from './practice/components/UseMemoEx';
import Faq from './practice/components/Faq';
import CssModule from './practice/components/CssModule';
import StyledComponents from './practice/components/StyledComponents';
import Practice from './practice/components/Practice';

function App() {
  return (
    <div className="App">
      <UseMemoEx />

      <hr />
      <Faq />

      <hr />
      {/* CSS styling */}
      <CssModule />

      <hr />
      {/* styled Components */}
      <StyledComponents />

      <hr />
      {/* Practice */}
      <Practice />
    </div>
  );
}

export default App;

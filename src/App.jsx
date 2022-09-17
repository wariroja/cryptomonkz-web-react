import Header from './Components/Header'
import Main from './Components/Main'
function App() {
  
  return (
    <>
      <div className="cursor-wrapper">
        <div className="cursor"></div>
	    </div>
      <div className="main-wrapper mainPage">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;

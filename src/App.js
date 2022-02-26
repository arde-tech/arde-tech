import bg from './radial_bg.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="Arde-bg">
      <img src={bg} alt="bg"></img>
    </div>
    <div className="Arde-body">
      <div className="Arde-nav">
        <p>
          ARDE
        </p>
      </div>
      <div className="row-gap-1"></div>
      <div className="Arde-main-1">
        <p>
          We’re cooking up something exciting!
        </p>
     
      </div>
      <div className="row-gap-2"></div>
      <div className="Arde-main-2">
      
        <p>
         For inquiries, please reach out to us at jerel@arde.tech
        </p>
      </div>
      <div className="row-gap-3"></div>
      <div className="Arde-emailUsButton">
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href='mailto:jerel@arde.tech';
        }}>
          Email Us
        </button>
      </div>
   
    </div>
  

    </div>
  );
}

export default App;

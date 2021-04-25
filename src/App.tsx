import usePopup from './Popup';
import './styles/app.css';

function App() {
  const { Popup, showPopup } = usePopup();

  return (
    <div className="App">
      <main className="button-wrapper">
      <button
          onClick={() =>
            showPopup({ title: 'dfasdfda', message: 'dasfdsf', color: '#d62828', seconds: 5 })
          }
        >
          warning popup
        </button>
        <button
          onClick={() =>
            showPopup({ title: 'dfasdfda', message: 'dasfdsf', color: '#2a9d8f', seconds: 5 })
          }
        >
          Success popup
        </button>
      </main>
      <Popup />
    </div>
  );
}

export default App;

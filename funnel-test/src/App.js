
import './App.css';
import Sidebar from './components/Sidebar';
import FormList from './components/FormList';

function App() {
  
  return (
    <div className="app">
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <FormList />
        </div>
      </div>
    </div>
    
  );
}

export default App;

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast.success("Wow so easy!");
  return (
    <div className="App">
      <h1>Hello from Carts</h1>
      <button onClick={notify} className="btn btn-primary">Button</button>
      <ToastContainer />
    </div>
  );
}

export default App;

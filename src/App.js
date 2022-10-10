import { Button} from './components/Button/Button';
import { Modal} from './components/Modal/Modal';
import './App.css';
import { useState, useCallback } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setOpen((prev) => !prev);
}, []);

  return (
    <div className="App">
      <Modal isOpen={open} closeModal={onToggleModal} />
      <Button title='Open Modal' onHandler={onToggleModal}/>
    </div>
  );
}

export default App;

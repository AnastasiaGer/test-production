import { Button} from './components/Button/Button';
import { Modal} from './components/Modal/Modal';
import './App.css';
import { useState, useCallback, useContext } from "react";
import {TContext} from './theme/themeContext';
function App() {
  const [open, setOpen] = useState(false);

  const {theme, toggler} = useContext(TContext);

  const onToggleModal = useCallback(() => {
    setOpen((prev) => !prev);
}, []);


  return (
    <div className={theme}>
      <Modal isOpen={open} closeModal={onToggleModal} />
      <Button title='Open Modal' onHandler={onToggleModal}/>
      <Button title='Change Theme' onHandler={toggler}/>
    </div>
  );
}

export default App;

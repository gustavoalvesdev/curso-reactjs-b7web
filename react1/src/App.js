import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  }

  return (

    <>
      <button onClick={handleButtonClick}>Abrir Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Testando 1, 2, 3...</h1>
      </Modal>
    </>

  );

}

export default App;
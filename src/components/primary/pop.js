"use client";

import { useState, useEffect } from 'react';
import { Modal, ModalFooter } from 'flowbite-react';
import { FaTimes } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import Popbutton from '../secondary/popbutton';

export default function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Modal
      show={show}
      onClose={() => setShow(false)}
      className="bg-transparent backdrop-blur-sm"
    >
      <button
        onClick={() => setShow(false)}
        className="absolute top-3 right-3 text-white bg-transparent hover:bg-gray-200 hover:text-gray-700 p-1 rounded-full"
      >
        <FaTimes />
      </button>
      <Modal.Body className='rounded-md bg-customBlack'>
        <img src="/assets/popup.jpg" alt="Imagen" className="w-full h-auto" />
      </Modal.Body>
      <ModalFooter>
        <Popbutton />
      </ModalFooter>
    </Modal>
  );
}

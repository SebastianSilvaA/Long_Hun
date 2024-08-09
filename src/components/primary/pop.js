"use client";

import { useState, useEffect, useRef } from 'react';
import { Modal } from 'flowbite-react';
import { FaTimes } from 'react-icons/fa';
import Popbutton from '../secondary/popbutton';

export default function Popup() {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Modal
      show={show}
      onClose={() => setShow(false)}
      className="bg-transparent backdrop-blur-sm"
    >
      <div ref={modalRef} className="relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-white bg-transparent hover:bg-gray-200 hover:text-gray-700 p-1 rounded-full"
        >
          <FaTimes />
        </button>
        <Modal.Body className=" rounded-lg bg-customBlack flex flex-col items-center justify-center space-y-4">
          <img src="/assets/popup.jpg" alt="Imagen" className="w-full h-auto" />
          <Popbutton onClick={() => alert('Te has inscrito!')} />
        </Modal.Body>
      </div>
    </Modal>
  );
}

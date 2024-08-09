"use client";

export default function Button({ onClick = () => alert('Botón clicado') }) {
  return (
    <button
      onClick={onClick}
      className="font-bold bg-orange-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Inscríbete
    </button>
  );
}

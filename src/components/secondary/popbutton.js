"use client";

export default function Button({ onClick = () => alert('Botón clicado') }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 text-xl font-semibold text-white transition bg-orange-600 rounded md:px-6 md:py-5 md:text-2xl hover:bg-orange-500"
    >
      Inscríbete
    </button>
  );
}

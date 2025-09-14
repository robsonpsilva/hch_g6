import React from 'react';

/**
 * Componente de ícone SVG para representar itens artesanais.
 * O design mostra mãos moldando um vaso em uma roda de oleiro.
 *
 * @param {object} props - Propriedades do componente.
 * @param {string} [props.className="w-16 h-16 text-white"] - Classes do Tailwind para estilização.
 */
const HandcraftedIcon = ({ className = "w-16 h-16 text-white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 .75-.75ZM12 6a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 12 6Zm3.75 1.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 .75-.75ZM12 11.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75ZM7.5 15a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V15.75a.75.75 0 0 1 .75-.75Zm3.75 2.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Zm3.75-2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V15.75a.75.75 0 0 1 .75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM18 12a.75.75 0 0 1-.75.75H15a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75Z" />
    </svg>
  );
};

export default HandcraftedIcon;
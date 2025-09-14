/** @type {import('tailwindcss').Config} */
module.exports = {
// A propriedade 'content' diz ao Tailwind onde encontrar as classes que você está usando.
// Certifique-se de que todos os seus arquivos de componente e página estão incluídos.
content: [
"./app/**/.{js,ts,jsx,tsx,mdx}",
"./pages//*.{js,ts,jsx,tsx,mdx}",
"./components//.{js,ts,jsx,tsx,mdx}",
"./src/**/.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
// Adicionando uma paleta de cores personalizada.
colors: {
primary: {
50: '#F5F5FF',
100: '#EBEBFF',
200: '#D6D6FF',
300: '#C2C2FF',
400: '#8E8EFF',
500: '#5A5AFF',
600: '#4848CC',
700: '#3A3A99',
800: '#2C2C66',
900: '#1D1D33',
},
secondary: {
50: '#F0F9FF',
100: '#E0F2FF',
200: '#BFE7FF',
300: '#99D4FF',
400: '#4AB9FF',
500: '#009EFF',
600: '#0084D0',
700: '#006B9E',
800: '#004C6C',
900: '#002F44',
},
// Adicionei a sua paleta de cores 'brand' aqui.
brand: {
50: '#F8F4F0',
100: '#F0E8E0',
200: '#E0D4C5',
300: '#D1BFAB',
400: '#B49E7C',
500: '#8B4513',
600: '#6C360E',
700: '#4D2A0C',
800: '#2E1A08',
900: '#1C0F05',
},
},
// Adicionando uma fonte personalizada. Lembre-se de importá-la no seu CSS global.
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
// Exemplo de uma nova escala de espaçamento.
spacing: {
'128': '32rem',
'144': '36rem',
},
},
},
plugins: [
// Plugins adicionam funcionalidades extras. Exemplo: @tailwindcss/forms para estilos de formulário.
// Lembre-se de instalar o plugin: pnpm add -D @tailwindcss/forms
require('@tailwindcss/forms'),
],
};
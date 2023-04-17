import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//когда внутри файла встречаются хтмл теги - расширение tsx   

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(<App />);

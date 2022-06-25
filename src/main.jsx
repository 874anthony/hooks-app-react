import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterCustomHook } from './01-useState/CounterCustomHook';
// import { SimpleForm } from './02-useEFfect/SimpleForm';
// import { FormCustomHook } from './02-useEFfect/FormCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
import { Memorize } from './06-memo/Memorize';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>
);

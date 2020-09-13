import React from 'react';
import ReactDOM from 'react-dom';
//import {HookApp} from './HookApp';
//import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';


ReactDOM.render(
    <CounterWithCustomHook />,
  document.getElementById('root')
);

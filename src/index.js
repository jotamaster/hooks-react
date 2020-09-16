import React from 'react';
import ReactDOM from 'react-dom';
//import {HookApp} from './HookApp';
//import { CounterApp } from './components/useState/CounterApp';
//import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';
//import { SimpleForm } from './components/useEffect/SimpleForm';
import './assets/style/main.css'
import { MultipleCustomHooks } from './components/useFetch/MultipleCustomHooks';


ReactDOM.render(
    <MultipleCustomHooks />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animations.css';
import './dark.css';
import './moblie.css';
import App from './App';
import { store } from './components/redux/Store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';


const mode = localStorage.getItem("mode")
document.body.classList.add(mode);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
    <ChatContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChatContextProvider>
  </AuthContextProvider>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Component/Header/Header';
import Todolist from './Component/TodoList/';
var admin = require('firebase-admin');
//import Node from './Node';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="/__/firebase/7.9.3/firebase-app.js"></script>

        {/* <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries --> */}
        <script src="/__/firebase/7.9.3/firebase-analytics.js"></script>

        {/* <!-- Initialize Firebase --> */}
        <script src="/__/firebase/init.js"></script>
        {/* <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services --> */}

  {/* <!-- Firebase App (the core Firebase SDK) is always required and must be listed first --> */}
  <script src="/__/firebase/7.9.2/firebase-app.js"></script>

  {/* <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics --> */}
  <script src="/__/firebase/7.9.2/firebase-analytics.js"></script>

  {/* <!-- Add Firebase products that you want to use --> */}
  <script src="/__/firebase/7.9.2/firebase-auth.js"></script>
  <script src="/__/firebase/7.9.2/firebase-firestore.js"></script>
  <script src="/__/firebase/init.js"></script>
      </div>
    </Provider>
  );
}

export default App;

const init = () => {
    console.log("Windows Loaded");
    const firebaseConfig = {
        apiKey: "AIzaSyBseXPwdKIR-1BEssuzReiQYQ4yvr74FKQ",
        authDomain: "nps-jsi15-thanh.firebaseapp.com",
        projectId: "nps-jsi15-thanh",
        storageBucket: "nps-jsi15-thanh.appspot.com",
        messagingSenderId: "859553841732",
        appId: "1:859553841732:web:50721e2adf2784cda43211",
        measurementId: "G-182F1ZG93V"
      };
     // firebaseConfig.initializeApp(firebaseConfig)
     // console.log(app().name)
     firebase.initializeApp(firebaseConfig);

   
   
      view.setActiveScreen("registerScreen");
  
  }
  
  
  window.onload = init;

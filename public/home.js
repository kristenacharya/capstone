function Home(){
  var firebaseConfig = {
    apiKey: "AIzaSyA7tbo1nUM-q2O6jcG760UU7tdunVFNCa8",
    authDomain: "test-project-ad417.firebaseapp.com",
    databaseURL: "https://test-project-ad417-default-rtdb.firebaseio.com",
    projectId: "test-project-ad417",
    storageBucket: "test-project-ad417.appspot.com",
    messagingSenderId: "114014692288",
    appId: "1:114014692288:web:885e7a14ccf777e9335e25"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); // if already initialized, use that one
  }

  let user = firebase.auth().currentUser;
  console.log(user);

  if(user){
    return (
      <Card
        bgcolor="info"
        header={user.email}
        title="Welcome to PigiBank!"
        text="We get it, you trusted us, and we blew it. But we have new management, and a whole set of new features. You can even log in!"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />
    );
  } else {
    return (
      <Card
        bgcolor="info"
        header="We've Changed!"
        title="Welcome to PigiBank!"
        text="We get it, you trusted us, and we blew it. But we have new management, and a whole set of new features. You can even log in!"
      />
    ); 
  }

   
}

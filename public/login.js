function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  // Handle Firebase authentication first
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  function handle(){
    console.log(email);
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email,
      password
    );
    promise.catch((e) => console.log(e.message));

    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log("User is not logged in");
      }
    });
    
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
            localStorage.setItem("email", String(email))
            window.location.href = '/';
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
    
  }


  return (<>

    Email<br/>
    <input type="input" 
      id="email"
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      id="password"
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" id="login" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}
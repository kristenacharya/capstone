function NavBar(){
  const email = localStorage.getItem("email");
  console.log(email);
  
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">PigiBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {!email &&
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>}
          {!email &&
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>}
          {email &&
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>}
          {email &&
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>}
          {email &&
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>}
          {email &&
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>}
          {email &&
          <li className="nav-item">
            <a className="nav-link" href="#/logout/">Logout</a>
          </li>}
        </ul>
      </div>
    </nav>

  );
}
import React from 'react';
import './App.css';

const styleColumn1 = {
  background: 'green'
}
const styleColumn2 = {
  background: 'violet'
}

function App() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark primary-color">

        <a className="navbar-brand" href="#">Navbar</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="basicExampleNav">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

          </ul>
          <form className="form-inline">
            <span className="md-form my-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            </span>
          </form>

        </div>

      </nav>
 
      <div className="row justify-content-center">
          <div className="col-12 mr-4" style={styleColumn1}>.col-3</div>
          <div className="col-12 mr-4" style={styleColumn2}>.col-3</div>
      </div>

       
      <footer className="page-footer font-small blue pt-4 fixed-bottom">

      
        <div className="container-fluid text-center text-md-left">

        
          <div className="row">

            
            <div className="col-md-6 mt-md-0 mt-3">

              
              <h5 className="text-uppercase">Footer Content</h5>
              <p>Here you can use rows and columns to organize your footer content.</p>

            </div>
            

            <hr className="clearfix w-100 d-md-none pb-3"/>

          
            <div className="col-md-3 mb-md-0 mb-3">

            
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>

            </div>
          
            <div className="col-md-3 mb-md-0 mb-3">

            
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>

            </div>
          

          </div>
        

        </div>
      
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      

      </footer>

  
    </>
  );
}

export default App;

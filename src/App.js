import React, {useEffect} from 'react';
import './App.css';
import Chart from 'chart.js';





function App() {
  const cr = React.createRef();
  const cr2 = React.createRef();

  useEffect(() => {

    const ctx = cr.current.getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Phyton', 'Ruby', 'JavaScript', 'Java', 'Smalltalk', 'Json'],
            datasets: [{
                label: 'Habilidades User 1',
                data: [10, 60, 30, 50, 45, 17],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    const ctx2 = cr2.current.getContext("2d");
    var myChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Phyton', 'Ruby', 'JavaScript', 'Java', 'Smalltalk', 'Json'],
            datasets: [{
                label: 'Habilidades user 2',
                data: [30, 10, 40, 90, 15, 72],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }, []);
  
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
 
      
      
      <section className="team-section text-center my-5">

        
        <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>
        
        <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
          eum porro a pariatur veniam.</p>

        
        <div className="row">

          
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
            <div className="avatar mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle z-depth-1"
                alt="Sample avatar" />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
            <p className="text-uppercase blue-text"><strong>Graphic designer</strong></p>
            <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci sed quia non numquam modi tempora eius.</p>
            <ul className="list-unstyled mb-0">
              
              <a className="p-2 fa-lg fb-ic">
                <i className="fab fa-facebook-f blue-text"> </i>
              </a>
              
              <a className="p-2 fa-lg tw-ic">
                <i className="fab fa-twitter blue-text"> </i>
              </a>
              
              <a className="p-2 fa-lg ins-ic">
                <i className="fab fa-instagram blue-text"> </i>
              </a>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
            <div className="avatar mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle z-depth-1"
                alt="Sample avatar" />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
            <p className="text-uppercase blue-text"><strong>Web developer</strong></p>
            <p className="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
              doloremque rem laudantium totam aperiam.</p>
            <ul className="list-unstyled mb-0">
              
              <a className="p-2 fa-lg fb-ic">
                <i className="fab fa-facebook-f blue-text"> </i>
              </a>
              
              <a className="p-2 fa-lg ins-ic">
                <i className="fab fa-instagram blue-text"> </i>
              </a>
            </ul>
          </div>
        
          <div className="col-lg-3 col-md-6 mb-md-0 mb-5">
            <div className="avatar mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1"
                alt="Sample avatar" />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
            <p className="text-uppercase blue-text"><strong>Photographer</strong></p>
            <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim est fugiat nulla id eu laborum.</p>
            <ul className="list-unstyled mb-0">
              
              <a className="p-2 fa-lg fb-ic">
                <i className="fab fa-facebook-f blue-text"> </i>
              </a>
              
              <a className="p-2 fa-lg ins-ic">
                <i className="fab fa-instagram blue-text"> </i>
              </a>
              
              <a className="p-2 fa-lg ins-ic">
                <i className="fab fa-dribbble blue-text"> </i>
              </a>
            </ul>
          </div>
        
          <div className="col-lg-3 col-md-6">
            <div className="avatar mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle z-depth-1"
                alt="Sample avatar"/>
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
            <p className="text-uppercase blue-text"><strong>Backend developer</strong></p>
            <p className="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
              totam officia voluptates perferendis voluptatibus aut.</p>
            <ul className="list-unstyled mb-0">
              
              <a className="p-2 fa-lg fb-ic">
                <i className="fab fa-facebook-f blue-text"> </i>
              </a>
              
              <a className="p-2 fa-lg ins-ic">
                <i className="fab fa-github blue-text"> </i>
              </a>
            </ul>
          </div>
        

        </div>
      

      </section>

      <nav aria-label="Page navigation example">
        <ul className="pagination pg-blue justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" tabindex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link">1</a></li>
          <li className="page-item"><a className="page-link">2</a></li>
          <li className="page-item"><a className="page-link">3</a></li>
          <li className="page-item">
            <a className="page-link">Next</a>
          </li>
        </ul>
      </nav>
      <hr/><hr/>


      <div className="card info-color text-white">
        <div className="card-body text-center">
          Gráfico de lenguajes
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <canvas ref={cr} width="100%" height="50%"></canvas>
        </div>
        <div className="col-6">
          <canvas ref={cr2} width="100%" height="50%"></canvas>
        </div>
      </div>

       
      <footer className="page-footer font-small cyan darken-3 pt-4">

      
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

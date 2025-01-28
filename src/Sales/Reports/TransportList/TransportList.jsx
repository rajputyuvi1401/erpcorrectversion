
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./TransportList.css";
import { useNavigate } from 'react-router-dom';


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>


const TransportList  = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);
      const navigate = useNavigate();  
      
        const handleButtonClick = () => {
          navigate('/'); 
        };

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  return (
    <div className="TransportListMaster">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="Main-NavBar">
            <NavBar toggleSideNav={toggleSideNav} />
            <SideNav
              sideNavOpen={sideNavOpen}
              toggleSideNav={toggleSideNav}
            />
            <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
              <div className="TransportList mt-5">
                <div className="TransportList-header mb-4 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title"> Transport List </h5>
                    </div>

                    <div className="col-md-8 text-end">
                        
                        <button type="button" className="btn" to="#/" >
                           New Transport Entry
                        </button> 
                        <button type="button" className="btn" to="#/" >
                            Transport Report
                        </button> 
                        <button type="button" className="btn" to="#/" >
                            Export To Excel 2
                        </button> 
                        <button type="button" className="btn" to="#/" onClick={handleButtonClick}>
                            Pendding List
                        </button> 
                    </div>

                  </div>
                </div>
               
                <div className="TransportList-Main">
                    <div className="container-fluid">
                      
                        <div className="row g-3 text-start mt-3">  

                       <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-2 col-lg-1">
                          <label>To:</label>
                          <input type="date" className="form-control" />
                        </div>
                       
                        <div className="col-6 col-md-2 align-items-center mt-5">
                          <button type="button" className="btn btn-primary">
                            Search
                          </button>
                        </div>

                        </div>

                    </div>
                  </div>

             <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col"> Sr.</th>
                          <th scope="col"> Trn No</th>
                          <th scope="col"> Trn Date</th>
                          <th scope="col"> Type</th>
                          <th scope="col"> Transport Name </th>
                          <th scope="col"> Vehicle No </th>
                          <th scope="col"> Vehicle Name</th>
                          <th scope="col"> Driver Name</th>
                          <th scope="col"> Total Kg</th>
                          <th scope="col"> Total Cost </th>
                          <th scope="col"> Edit </th>
                          <th scope="col"> Del </th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>  
                    </table>
             </div>

              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default TransportList
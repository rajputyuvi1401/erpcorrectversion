import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./CycleTime.css";


const CycleTime = () =>  { const [sideNavOpen, setSideNavOpen] = useState(false);

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
      <div className="CycleTimeMaster">
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
                <div className="CycleTime">
                  <div className="CycleTime-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Cycle Time Report</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="vndrbtn" to="#/">
                           Export Report 
                        </button>
                        
                      </div>
                    </div>
                  </div>
  
                  <div className="CycleTime-Main">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">

                        {/* From Date */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        
                        {/* To Date */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>To :</label>
                          <input type="date" className="form-control" />
                        </div>

  
                        {/*   Machine */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label> Machine :</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>
  
                          {/* Item */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Item :</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-2">
                        <button type="button" className="vndrbtn" style={{marginTop:"22px"}} >
                            Search
                        </button>   
                        </div>
                     </div>
                    </div>
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

export default CycleTime
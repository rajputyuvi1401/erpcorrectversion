import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../../NavBar/NavBar.js";
import SideNav from "../../../../SideNav/SideNav.js";
import "./RMToTransaction.css";
const RMToTransaction = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);

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
    <div className="NewStoreRMToTransaction">
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
              <div className="RMToTransaction-header">
                <div className="row flex-nowrap align-items-center">
                  <div className="col-md-4">
                    <h5 className="header-title text-start">
                      RM Stock Transaction
                    </h5>
                  </div>
                  <div className="col-md-8 text-start">
                    <div className="row">
                      <div className="col-md-2 d-flex flex-wrap">
                        <select>
                          <option>Produlink</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="RMToTransaction-main mt-2">
                <div className="container-fluid text-start">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="row mt-4">
                        <div className="col-md-4">
                          <label>No:</label>
                        </div>
                        <div className="col-md-8">
                          <input />
                        </div>
                        
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-4">
                          <label>Date:</label>
                        </div>
                        <div className="col-md-8">
                          <input type="date" />
                        </div>
                      </div>
                    
                      <div className="row mt-4">
                        <div className="col-md-4">
                          <label>Trn Type:</label>
                        </div>
                        <div className="col-md-8">
                          <select className="form-select">
                            <option value="Scrap">Scrap</option>
                            <option value="Rejection">Rejection</option>
                            <option value="RM to RM">RM to RM</option>
                            <option value="RM to End Pices">RM to End Pices</option>
                            <option value="Scrap to RM">Scrap to RM</option>
                          </select>
                        </div>
                      </div>
                     
                    </div>
                  </div>

                  <div className="RMToTransactionSelect mt-4">
                    <div className="row flex-nowrap align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title text-start">
                          Select Item to Transfer Stock (Debit)
                        </h5>
                      </div>
                    </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Item Code:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                        </div>
                       
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Heat No:</label>
                          </div>
                          <div className="col-md-8">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Qty:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                          
                          
                        </div>
                       

                      </div>
                    </div>

                    <div className="RMToTransactionSelect mt-4">
                    <div className="row flex-nowrap align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title text-start">
                          Select Item to Transfer Stock (Credit)
                        </h5>
                      </div>
                    </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Item Code:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                        </div>
                       
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Heat No:</label>
                          </div>
                          <div className="col-md-4">
                            <select>
                              <option></option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <input type="text"/>
                          </div>
                        </div>
                       
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Qty:</label>
                          </div>
                          <div className="col-md-8">
                            <input />
                          </div>
                          
                          
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-4">
                            <label>Remark:</label>
                          </div>
                          <div className="col-md-8">
                            <textarea></textarea>
                          </div>
                          
                          
                        </div>

                      </div>
                    </div>
                

                  <div className="row text-end mt-4">
                    <div className="col-md-12">
                      <button type="submit" className="vndrbtn">
                        Save
                      </button>
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

export default RMToTransaction

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./PendingIndent.css";
const PendingIndent = () => {
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
    <div className="NewPendingIndentMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />

              <main
                className={`main-content ${sideNavOpen ? "shifted" : ""}`}
              >
              <div className="PendingIndent-header  text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">
                        Pending Indent Release List
                      </h5>
                    </div>

                    {/* Buttons */}
                    <div className="col-md-8  d-flex flex-wrap justify-content-end">
                      <button className="vndrbtn">
                        Export To Excel
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Pendingindent mt-3">
                  <div className="container-fluid mt-1">
                   
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>All Pending Indent</th>
                              <th>From Date</th>
                              <th>To Date</th>
                              <th>Plant</th>

                            
                              <th>
                                <input type="checkbox" id="supplierNameCheck" />
                                <label
                                  htmlFor="supplierNameCheck"
                                  className="ml-2"
                                >
                                  Indent No
                                </label>
                              </th>
                              <th>
                                <input type="checkbox" id="poNoCheck" />
                                <label htmlFor="poNoCheck" className="ml-2">
                                  Item
                                </label>
                              </th>
                              <th>
                                <input type="checkbox" id="poNoCheck" />
                                <label htmlFor="poNoCheck" className="ml-2">
                                  Type
                                </label>
                              </th>
                              <th>Main Group</th>
                              <th>Direct/MRP</th>
                              <th>Department</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <button className="vndrbtn ">
                                 All Pending Indent
                                </button>
                              </td>
                             
                              <td>
                                <input type="date" className="form-control" />
                              </td>
                              <td>
                                <input type="date" className="form-control" />
                              </td>
                              <td>
                                <select className="form-control">
                                  <option>Plant 1</option>
                                  <option>Plant 2</option>
                                  <option>Plant 3</option>
                                </select>
                              </td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <select className="form-control">
                                  <option>Type 1</option>
                                  <option>Type 2</option>
                                  <option>Type 3</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control">
                                  <option>Category 1</option>
                                  <option>Category 2</option>
                                  <option>Category 3</option>
                                </select>
                              </td>
                            
                              <td>
                                <select className="form-control">
                                  <option>CR Name 1</option>
                                  <option>CR Name 2</option>
                                  <option>CR Name 3</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control">
                                  <option>CR Name 1</option>
                                  <option>CR Name 2</option>
                                  <option>CR Name 3</option>
                                </select>
                              </td>
                              <td>
                                <button className="vndrbtn">Search</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
               
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingIndent;

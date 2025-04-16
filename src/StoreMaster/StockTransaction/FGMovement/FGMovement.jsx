import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./FGMovement.css";
import { Link } from "react-router-dom";

const FGMovement = () => {
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
    <div className="NewStoreFGMovement">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="FGMovement-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">FG Movement Report</h5>
                    </div>
                    <div className="col-md-9 text-end">
                      <div className="row justify-content-end">
                        <div className="col-md-12 d-flex flex-wrap justify-content-end">
                          <Link className="vndrbtn" to="/AddNewFGMovent">
                            Add New FG Movement
                          </Link>
                          <Link className="vndrbtn" to="/FGTOFGMovement">
                            FG to FG Movement
                          </Link>
                          <Link className="vndrbtn" to="/ScrapMovement">
                            Scrap To FG
                          </Link>
                          <Link className="vndrbtn" to="">
                            Export To Excel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="FGMovement-main mt-2">
                  <div className="container-fluid text-start">
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <form className="row g-3 text-start">
                          {/* From Date */}
                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">From Date:</label>
                            <input type="date" className="form-control mt-1" />
                          </div>

                          {/* To Date */}
                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">To Date:</label>
                            <input type="date" className="form-control mt-1" />
                          </div>

                          {/* Plant */}
                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">Plant:</label>
                            <select className="form-select">
                              <option value="">Produlink</option>
                              {/* Add more options here */}
                            </select>
                          </div>

                          {/* Item Name */}
                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">Item Name/Desc:</label>
                            <input type="text" className="form-control mt-1" placeholder="Enter Item Name" />
                          </div>

                          {/* Search Button */}
                          <div className="col-md-2 col-sm-6 mt-5">
                            <button type="submit" className="vndrbtn w-100">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="FGMovementtable">
                    <div className="container-fluid mt-1 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Plant</th>
                              <th>Year</th>
                              <th>TM No</th>
                              <th>TM Date</th>
                              <th>Item No</th>
                              <th>Item Desc</th>
                              <th>Part Desc</th>
                              <th>Heatcode Dr</th>
                              <th>Heatcode Cr</th>
                              <th>Qty</th>
                              <th>Remark</th>
                              <th>User</th>
                              <th>Info</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td><input type="text" className="form-control" /></td>
                              <td>
                                <button className="vndrbtn">
                                  <FaEdit />
                                </button>
                              </td>
                              <td>
                                <button className="vndrbtn">
                                  <FaTrash />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
  );
};

export default FGMovement;

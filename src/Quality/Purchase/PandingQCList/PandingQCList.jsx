import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./PandingQCList.css";
// import { FaEdit, FaTrash } from "react-icons/fa";

const PandingQCList = () => {
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
    <div className="PandingQCListMaster">
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
              <div className="PandingQCList">
                <div className="PandingQCList-header mb-2 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <h5 className="header-title"> <span  className="purch">Purchase GRN : </span> Pending QC List </h5>
                    </div>
                    <div className="col-md-7 text-end">
                      <button type="button" className="vndrbtn" to="#/">
                        Export Report
                      </button>
                     </div>
                  </div>
                </div>

                <div className="PandingQCList-Main">
                  <div className="container-fluid">
                    <div className="row g-3 text-start">
                        {/* Plant */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                        <label>Plant :</label>
                        <select  className="form-control" style={{marginTop:"-1px"}} >
                          <option>Produlink</option>
                        </select>
                      </div>

                         {/* From Date */}
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>From:</label>
                        <input type="date" className="form-control" />
                      </div>

                      {/* To Date */}
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>To Date:</label>
                        <input type="date" className="form-control" />
                      </div>

                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Main Group :</label>
                        <select  className="form-control" style={{marginTop:"-1px"}} >
                          <option>Select</option>
                          <option>FG</option>
                          <option>RM</option>
                          <option>Tools</option>
                          <option>Instrument</option>
                          <option>Machine</option>
                          <option>Consumable</option>
                          <option>Safety Equ</option>
                          <option>Service</option>
                          <option>Asset</option>
                          <option>F4</option>
                          <option>Scrap</option>
                          <option>SF</option>
                          <option>BO</option>
                          <option>DI</option>
                        </select>
                      </div>

                      {/* Item Name */}
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Item Group:</label>
                        <select className="form-control" style={{marginTop:"-1px"}} >
                          <option>ALL</option>
                          <option>BEARING</option>
                          <option>BELTS</option>
                          <option>CAMS</option>
                          <option>COLLECTS & HOLDERS</option>
                          <option>COMPUTER</option>
                          <option>CUTTING TOOLS</option>
                          <option>ELECTRICAL PARTS</option>
                          <option>END PIECE</option>
                          <option>FIXCTURE</option>
                          <option>FORMING TOOLS</option>
                          <option>GAUGES & INSTUMENTS</option>
                          <option>GENRAL</option>
                          <option>HOLDERS</option>
                          <option>INSERTS</option>
                          <option>IT SUPPORTS</option>
                          <option>MACHINE SPARE</option>
                          <option>MACHINING</option>
                          <option>OIL & LUBRICANTS</option>
                          <option>PACKING</option>
                          <option>SERVICES</option>
                          <option>STATIONARY</option>
                          <option>TOOLING SPARE</option>
                          </select>
                      </div>

                         {/* Supplier Name */}
                       <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Supplier Name:</label>
                        <input type="text" placeholder="Name..." className="form-control" />
                      </div>

                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Item No Desc:</label>
                        <input type="text" placeholder="Item..." className="form-control" />
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>PO No:</label>
                        <input type="text" placeholder="PO No..." className="form-control" />
                      </div>
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>GRN No:</label>
                        <input type="text" placeholder="GRN No..." className="form-control" />
                      </div>

                      <div className="col-sm-2 col-md-2 col-lg-1">
                      <button type="button" className="vndrbtn w-100" style={{marginTop:"22px"}}>
                          Search
                      </button> 
                      </div>
                
                    </div>
                  </div>
                </div>

               <div className="PandingQCListtable table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">GRN No</th>
                          <th scope="col">GRN Date</th>
                          <th scope="col">GRN Entry</th>
                          <th scope="col">Challan No</th>
                          <th scope="col">Invoice No</th>
                          <th scope="col">Supplier Name</th>
                          <th scope="col">PO No</th>
                          <th scope="col">Type</th>
                          <th scope="col">Item Qty | Desc</th>
                          <th scope="col">User</th>
                          <th scope="col">View </th>
                          <th scope="col">QC</th>
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

export default PandingQCList
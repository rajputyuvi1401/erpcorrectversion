import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import "./VendorBillList.css";
const VendorBillList = () => {
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
      <div className="NewStoreVendor-Bill-List">
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
                <div className="Vendor-Bill-List-header  mb-4 text-start">
                    <div className="row align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">Vendor Bill List</h5>
                    </div>
                    

                        <div className="col-md-9 text-end">
                          <Link className="vndrbtn" to="/Pending-Asn-List">
                            Pending ASN List
                          </Link>     
                    </div>
                  </div>
                </div>
                <div className="Vendor-Bill-List-main mt-2">
                  <div className="container-fluid">
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <form className="row g-3 text-start">
                          {/* From Date */}
                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">From Date</label>
                            <input type="date" className="form-control" />
                          </div>

                          {/* To Date */}
                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">To Date</label>
                            <input type="date" className="form-control" />
                          </div>

                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">Vendor Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name"
                            />
                          </div>

                          

                          {/* Gate Entry No. */}
                          <div className="col-md-2 col-sm-6">
                            <label className="form-label">Status</label>
                            <select className="form-select" style={{marginTop:"-1px"}}>
                              <option value="">ALL</option>
                              <option value="Pending">Pending</option>
                              <option value="Accept">Accept</option>
                            </select>
                          </div>

                          {/* Search Button */}
                          <div className="col-md-1 col-sm-6 align-self-end">
                            <button type="submit" className="vndrbtn">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="StoreVendor-Bill-List">
                    <div className="container-fluid mt-2 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>No Data Found!!</th>
                            </tr>
                          </thead>
                          <tbody>{/* Table rows will go here */}</tbody>
                        </table>
                      </div>
                    </div>

                    <div className="container-fluid mt-4 text-start">
                      <div className="row">
                        <div className="col-md-3">
                          <p>Total Records:0</p>
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

export default VendorBillList

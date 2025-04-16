import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./InwardTestCertificate.css";
// import { FaEdit, FaTrash } from "react-icons/fa";

const InwardTestCertificate = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };
  const toggleModal = () => {
    setShowModal((prevState) => !prevState); // Toggle modal visibility
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  return (
    <div className="InwardTestCertificateMaster">
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
              <div className="InwardTestCertificate">
                <div className="InwardTestCertificate-header mb-2 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title"> Inward Test Certificate List </h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <button type="button" className="vndrbtn" onClick={toggleModal} to="#/">
                      Inward Test Cert. - Query
                      </button>
                     </div>
                  </div>
                </div>


         
               {/* Modal */}
<div
  className={`modal ${showModal ? "show" : ""}`}
  style={{ display: showModal ? "block" : "none" }}
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden={!showModal}
>
  <div className="modal-dialog modal-lg" style={{marginTop:"170px"}}> {/* Use modal-lg for larger modal */}
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Inward Test Certificate Query
        </h5>
        <button
          type="button"
          className="vndrbtn"
          onClick={toggleModal} // Close the modal on button click
          aria-label="Close"
        >X</button>
      </div>
      <div className="modal-body">
        {/* Form content */}
        <form>
          <div className="row">
            {/* Plant */}
            <div className="col-md-6 mb-3">
              <label htmlFor="plant" className="form-label">
                Plant:
              </label>
              <select className="form-select" id="plant">
                <option>SHARP</option>
              </select>
            </div>

            {/* From Date & To Date in one line */}
            <div className="col-md-3 mb-3">
              <label htmlFor="from" className="form-label">
                From:
              </label>
              <input type="date" className="form-control" id="from" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="to" className="form-label">
                To:
              </label>
              <input type="date" className="form-control" id="to" />
            </div>
          </div>

          <div className="row">
            {/* QC No */}
            <div className="col-md-3 mb-3">
              <label htmlFor="qcNo" className="form-label">
                QC No:
              </label>
              <input type="text" className="form-control" id="qcNo" />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="to" className="form-label">
                To:
              </label>
              <input type="text" className="form-control" id="to" />
            </div>

            {/* Supplier Name */}
            <div className="col-md-6 mb-3">
              <label htmlFor="supplierName" className="form-label">
                Supplier Name:
              </label>
              <input type="text" className="form-control" id="supplierName" />
            </div>
          </div>

          <div className="row">
            {/* Item Name */}
            <div className="col-md-6 mb-3">
              <label htmlFor="itemName" className="form-label">
                Item Name:
              </label>
              <input type="text" className="form-control" id="itemName" />
            </div>

            {/* Item Group */}
            <div className="col-md-6 mb-3">
              <label htmlFor="itemGroup" className="form-label">
                Item Group:
              </label>
              <select className="form-select" id="itemGroup">
                <option>Select</option>
                <option>Group 1</option>
                <option>Group 2</option>
              </select>
            </div>
          </div>

          <div className="row">
            {/* Query Name */}
            <div className="col-md-6 mb-3">
              <label htmlFor="queryName" className="form-label">
                Query Name:
              </label>
              <select className="form-select" id="queryName">
                <option>Select</option>
                <option>Inward</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-6 mb-3">
              <button type="button" className="vndrbtn w-100">
                Execute - Export Report
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>




                  <div className="InwardTestCertificate-Main">
                    <div className="container-fluid">
                      {/* First Search Form */}
                      <div className="row g-3 text-start">
                        {/* From Date */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="fromDate">From:</label>
                          <input type="date" id="fromDate" className="form-control" />
                        </div>

                        {/* To Date */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="toDate">To Date:</label>
                          <input type="date" id="toDate" className="form-control" />
                        </div>

                        {/* Plant */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="plant">Plant :</label>
                          <select id="plant" className="form-select" style={{marginTop:"-2px"}}>
                            <option>SHARP</option>
                          </select>
                        </div>

                        {/* Supplier Name */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="supplierName">Supplier Name:</label>
                          <input type="text" id="supplierName" placeholder="Name..." className="form-control" />
                        </div>

                        {/* Item Group */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="itemGroup">Item Group :</label>
                          <select id="itemGroup" className="form-select" style={{marginTop:"-2px"}}>
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

                        {/* Item */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="item">Item :</label>
                          <input type="text" id="item" placeholder="Enter Code | Name..." className="form-control" />
                        </div>

                        {/* QC Type */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="qcType">QC Type:</label>
                          <select id="qcType" className="form-select" style={{marginTop:"-2px"}}>
                            <option>All</option>
                            <option>Regular</option>
                            <option>HoldToDk</option>
                          </select>
                        </div>

                        {/* Lot Status */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="lotStatus">Lot Status :</label>
                          <select id="lotStatus" className="form-select" style={{marginTop:"-2px"}}>
                            <option>All</option>
                            <option>Accept</option>
                            <option>Reject</option>
                            <option>Hold</option>
                          </select>
                        </div>

                        {/* Search Button */}
                        <div className="col-md-2">
                          <button type="button" className="vndrbtn" style={{marginTop:"22px"}}>
                            Search
                          </button>
                        </div>

                          {/* Search By */}
                          <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="searchBy">Search By :</label>
                          <select id="searchBy" className="form-select" style={{marginTop:"-2px"}}>
                            <option>All</option>
                            <option>IIR No</option>
                            <option>GRN No</option>
                            <option>LOT No</option>
                            <option>HEAT Code No</option>
                          </select>
                        </div>

                        {/* No */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label htmlFor="no">No :</label>
                          <input type="text" id="no" placeholder="No..." className="form-control" style={{marginTop:"-2px"}} />
                        </div>

                        {/* Search Button */}
                        <div className="col-md-2">
                          <button type="button" className="vndrbtn" style={{marginTop:"22px"}}>
                            Search
                          </button>
                        </div>
                      </div>

                      </div>
                  </div>

                 <div className="InwardTestCertificatetable table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Year</th>
                          <th scope="col">Plant</th>
                          <th scope="col">Inward No</th>
                          <th scope="col">Type</th>
                          <th scope="col">Date</th>
                          <th scope="col">GRN No</th>
                          <th scope="col">Supplier Name</th>
                          <th scope="col">Item No</th>
                          <th scope="col">Item Desc</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Heat No </th>
                          <th scope="col">Status</th>
                          <th scope="col">QC Type</th>
                          <th scope="col">User</th>
                          <th scope="col">Action</th>
                          <th scope="col">Email</th>
                          <th scope="col">View</th>

                        </tr>
                      </thead>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td>24-25</td>
                          <td>SHARP</td>
                          <td>PGQC-24251238</td>
                          <td>RM</td>
                          <td>02/12/24</td>
                          <td>252507001</td>
                          <td>KRISHNA STEELTUBE INDUSTRY</td>
                          <td>RM1127</td>
                          <td>18 * 10.2 CEW TUBE</td>
                          <td>792</td>
                          <td>42895</td>
                          <td>Accept</td>
                          <td>Regular</td>
                          <td>Mobin</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>

                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>2</td>
                          <td>24-25</td>
                          <td>SHARP</td>
                          <td>PGQC-24251237</td>
                          <td>RM</td>
                          <td>01/12/24</td>
                          <td>252506947</td>
                          <td>VISHWA SAMRUDHI INDUSTRY</td>
                          <td>RM1030</td>
                          <td>25.5 TUBE</td>
                          <td>6390</td>
                          <td>E243051</td>
                          <td>Accept</td>
                          <td>Regular</td>
                          <td>Mobin</td>
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

export default InwardTestCertificate
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./SacheduleSalesNew.css";

const SacheduleSalesNew = () => {
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
    <div className="SacheduleSalesNewMaster">
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
                <div className="SacheduleSalesNew">
                  <div className="SacheduleSalesNew-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">Schedule Sales Order New</h5>
                      </div>
                    </div>
                  </div>

                  <div className="SacheduleSalesNew-main">
                     <div className="row text-start">

                     <div className="col-md-2">
                            <label htmlFor="">Order Type</label>
                            <select name="" id="" className="form-control d-flex">
                               <option value="">Close </option>
                               <option value="">Open </option>
                           </select>
                      </div> 
                      <div className="col-md-2"> 
                        <label htmlFor="">:</label>
                        <select name="" id="" className="form-control">
                               <option value="">Select</option>
                               <option value="">GST</option>
                               <option value="">LB</option>
                           </select>
                      </div>
                      <div className="col-md-2">
                             <label htmlFor="customer-checkbox" className="ms-2">Customer:</label>
                             <input type="text" placeholder="Name" className="form-control" />
                     </div>

                     <div className="col-md-2 mt-4">
                           <button type="button" className=" vndrbtn w-100" >
                              Search
                           </button> 
                        </div>

                     </div>

                      <div className="row text-start mt-3">

                      <div className="col-md-2">
                            <label htmlFor="">Price List :</label>
                            <select name="" id="" className="form-control">
                               <option value=""> </option>
                           </select>
                      </div> 
                      <div className="col-md-2">
  <div className="d-flex justify-content-start align-items-center">
    <input 
      type="checkbox" 
      id="Item-checkbox" 
      style={{ width: "12px", height: "12px", verticalAlign: "middle" }} // Smaller checkbox
    />
    <label htmlFor="Item-checkbox" className="ms-1" style={{ verticalAlign: "middle" }}>Item:</label>
  </div>
  <input 
    type="text" 
    placeholder="Enter Item No" 
    className="form-control" // Margin top to separate the text field
  />
                      </div>

                      <div className="col-md-2">
                            <label htmlFor="">Plan Date :</label>
                            <input type="date" className="form-control"/>
                      </div>
                      <div className="col-md-2">
                            <label htmlFor="">Due Date :</label>
                            <input type="date" className="form-control"/>
                      </div> 
                      <div className="col-md-1 mt-4">
                           <button type="button" className=" vndrbtn w-100" >
                              Add
                           </button> 
                        </div>
                     </div>
                  </div>

                  <div className="SacheduleSalesNewtable table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>Pl Code </th>
                          <th>Item No</th>
                          <th>Item Code</th>
                          <th>Item Desc</th>
                          <th>Eff.From</th>
                          <th>PO No | Date</th>
                          <th>Amd No</th>
                          <th>Line No</th>
                          <th>Rate</th>
                          <th>Disc</th>
                          <th>Pl.Qty</th>
                          <th>Qty</th>
                          <th>Bal.Qty</th>
                          <th>Plan Due Date</th>
                          <th>GST</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input className="form-control" type="text" /> <br /> <input className="form-control" type="date" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input className="form-control" type="text" /></td>
                            <td></td>
                            <td><input className="form-control" type="date" /> <br /> <input className="form-control" type="date" /></td>
                            <td>CGST : % <br /> SGST : % <br /> IGST : %</td>
                            <td></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>

                    <div className="SacheduleSalesNew-main mt-3">
                    <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>So Date.</th>
                          <th>Bill To</th>
                          <th>Add Code</th>
                          <th>Ship To</th>
                          <th>Add Code</th>
                          <th>Payment terms</th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input className="form-control" type="date" /></td>
                            <td><input className="form-control" type="text" /> <br /> <button className="vndrbtn">Search</button> </td>
                            <td> <select className="form-select" name="" id=""> 
                                        <option value=""></option>
                                 </select> </td>
                            <td> <input className="form-control" type="text" /> <br /> <button className="vndrbtn">Search</button> </td>
                            <td><select className="form-select" name="" id=""> 
                                        <option value=""></option>
                                 </select> </td>
                            <td><input className="form-control" type="text" /> <br /> Days</td>
                            <td><button className="vndrbtn">Save</button> <br /> <button className="vndrbtn">Clear</button></td>
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


export default SacheduleSalesNew
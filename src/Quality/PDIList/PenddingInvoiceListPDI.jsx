import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import './PDIList.css';
import { TbMapNorth } from "react-icons/tb";
import { WiDirectionRight } from "react-icons/wi";

const PenddingInvoiceListPDI = () => {
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
    <div className="PDIListMaster">
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
                <div className="PDIList">
                  <div className="PDIList-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">  Pending Invoice List For - Pre Dispatch Inspection </h5>
                      </div>
                      <div className="col-md-6 text-end">
                        <button type="button" className="vndrbtn">
                          Export To Excel
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Filter Section */}
                  <div className="PDIList-filter">
                    <div className="row text-start">
                      
                      <div className="col-md-2">
                        <label>From Date :</label>
                        <input type="date" className="form-control mt-2" />
                      </div>
                      <div className="col-md-2">
                        <label>To Date :</label>
                        <input type="date" className="form-control mt-2" />
                      </div>

                      <div className="col-md-2 margin-5">
                        <label>Plant :</label>
                        <select className="form-select mt-2" >
                          <option value="SHARP">SHARP</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>

                      <div className="col-md-2">
                      <div className="">
                            {/* <input type="checkbox" className="form-check-input" id="Checkbox" /> */}
                            <label htmlFor="Checkbox" className="form-check-label"> Cust Name : </label>
                        </div>
                        <input type="text"  placeholder="Cust Name" className="form-control mt-2"/>
                      </div>

                      <div className="col-sm-6 col-md-2 col-lg-2">
                      <div className="">
                            {/* <input type="checkbox" className="form-check-input" id="Checkbox" /> */}
                            <label htmlFor="Checkbox" className="form-check-label">Item Code : </label>
                        </div>
                        <input type="text" placeholder="Item Code " className="form-control mt-2" />
                      </div>        

                      <div className="col-md-1 mt-4">               
                         <button className="vndrbtn">Search</button>          
                      </div>

                    </div>
                   
                  </div>

                  {/* Table Section */}
                  <div className="PDIList-Main">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>Plant</th>
                          <th>Inv Type</th>
                          <th>Inv No</th>
                          <th>Inv Date</th>
                          <th>CustomerName</th>
                          <th>Item No</th>
                          <th>Item Code</th>
                          <th>Item Desc</th>
                          <th>Inv. Qty</th>
                          <th>PDI Status</th>
                          <th>PDI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example Row */}
                        <tr>
                          <td>1</td>
                            <td>SHARP</td>
                            <td>GST</td>
                            <td>242517348</td>
                            <td>02/12/24</td>
                            <td>COOO5 | ENDURENCE TECHNOLOGIES LTD (I) </td>
                            <td>FG1168</td>
                            <td>F2BZ04402B</td>
                            <td>SPACER HUSQ 250</td>
                            <td>3000</td>
                            <td> <TbMapNorth /> </td>
                            <td> <WiDirectionRight /> </td>
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

export default PenddingInvoiceListPDI
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";


const CustomerQuery = () => {

  const [activeTab, setActiveTab] = useState("query");

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/vender-list");
  };

  return (
    <div className="container mt-4">
        <div className="top-but3-header mb-4 text-start">
      
               <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Customer Supplier Query</h5>
                    </div>
                    <div className="col-md-8 text-end">
                       <div className="d-flex align-items-center justify-content-end">                          
                          <Link className="vndrbtn me-2" to={"/CustomerQueryMaster"}>
                             Query Master
                          </Link>

                          <Link type="button" className="vndrbtn me-2">
                               Export Report
                          </Link>

                          <button
                            className="vndrbtn  me-2"
                            aria-label="Close"
                            onClick={handleClose} >
                           X </button>
                        </div>
                    </div>
               </div>
         </div>

         <div className="custom-tabs-container">
            <div className="tab-buttons">
              <button
                className={activeTab === "query" ? "active" : "vndrbtn"}
                onClick={() => setActiveTab("query")}
              >
               Query
              </button>
              <button
                className={activeTab === "result" ? "active" : "vndrbtn"}
                onClick={() => setActiveTab("result")}
              >
               Result
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "query" && (
                <div className="tab-panel">
                   <div className="mb-3">
                                                    {/* Customer Type */}
                      <div className="row">
                        <div className="col-md-2">
                          <label htmlFor="customerType" className="form-label">Customer Type:</label>
                        </div>
                        <div className="col-md-3">
                          <select className="form-select" id="customerType">
                            <option value="">All</option>
                            <option value="type1">Type 1</option>
                          </select>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="status" className="form-label">Status:</label>
                        </div>
                        <div className="col-md-3">
                          <select className="form-select" id="status">
                            <option value="">All</option>
                            <option value="active">Active</option>
                          </select>
                        </div>
                      </div>

                      {/* Customer Name */}
                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="custName" className="form-label">Cust Name:</label>
                        </div>
                        <div className="col-md-3">
                          <input type="text" className="form-control" id="custName" />
                        </div>
                      </div>

                      {/* City Name */}
                      <div className="row mt-2">
                        <div className="col-md-2">
                          <label htmlFor="cityName" className="form-label">City Name:</label>
                        </div>
                        <div className="col-md-3">
                          <input type="text" className="form-control" id="cityName" />
                        </div>
                      </div>

                      {/* Query Type with Radio + Select */}
                      <div className="row mt-2">
                        {/* First Option */}
                        <div className="col-md-2">
                          <div className="d-flex align-items-center">
                            <input type="radio" id="userQuery" name="queryType" className="me-2" />
                            <label htmlFor="userQuery" className="form-label mb-0">User Query:</label>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <select className="form-select">
                            <option value="">Select</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mt-2">
                        {/* Second Option */}
                        <div className="col-md-2">
                          <div className="d-flex align-items-center">
                            <input type="radio" id="erpQuery" name="queryType" className="me-2" />
                            <label htmlFor="erpQuery" className="form-label mb-0">ERP Query:</label>
                          </div>
                        </div>
                      
                      </div>

                      {/* Execute Button */}
                      <div className="row mt-3">
                        <div className="col-md-5">
                          <button className="vndrbtn btn-primary">Execute</button>
                        </div>
                      </div>

                   </div>
                </div>
              )}
              {activeTab === "result" && (
                <div className="tab-panel">
                  <h4 className="text-success">Result</h4>
                  <p>The result of the query will be displayed here...</p>
                </div>
              )}
            </div>
         </div>
  </div>
  )
}

export default CustomerQuery
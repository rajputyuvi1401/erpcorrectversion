import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./HeatCodeRegister.css";

const HeatCodeRegister = () => {
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
    <div className="HeatCodeRegisterMaster">
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
                <div className="HeatCodeRegister">
                  <div className="HeatCodeRegister-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Heat Code Register : </h5>
                      </div>
                       
                      <div className="col-md-8  text-end">
                      <button type="button" className="vndrbtn" onClick={toggleModal}>
                          Operation VS Dispatch
                        </button>
                        <button type="button" className="vndrbtn" >
                          Export Excel
                        </button>
                        <button type="button" className="vndrbtn" >
                        <select name="" id="">
                            <option value="">PDF</option>
                        </select>
                        </button>
                        <button type="button" className="vndrbtn" >
                          Print List
                        </button>
                      </div>             
                    </div>
                  </div>

{/* POPUP */}

<div  className={`modal ${showModal ? "show" : ""}`}
  style={{ display: showModal ? "block" : "none" }}
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden={!showModal}
>
  <div className="modal-dialog modal-lg" style={{marginTop:"170px"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
           Operation Vs Dispatch :
        </h5>
            <button type="button" className="vndrbtn" onClick={toggleModal} > <i class="fa fa-times" aria-hidden="true"></i> </button>        
      </div>

                    <div className="modal-body">
                    <div className="HeatCodeRegister-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">Operation Vs Dispatch : : </h5>
                      </div>
                       
                      <div className="col-md-8  text-end">
                        <button type="button" className="vndrbtn" >
                          Export Excel
                        </button>
                      </div>             
                    </div>
                    </div>
        <form>
          <div className="row">
            {/* Plant */}
             <div className="col-md-4 mb-3">
                            <label htmlFor="" className="">Operation: </label>
                        
                        <select name=""  className="form-control" id="">
                            <option value="">Select</option>
                            <option value="">Select</option>
                            <option value="">Select</option>
                            <option value="">Select</option>
                        </select>
                     </div>
             <div className="col-md-4 mb-3">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> Heat Code : </label>
                        </div>
                        <input type="text"  placeholder=" " className="form-control"/>
             </div>
             <div className="col-md-4 mb-3">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label">  Raw Material: </label>
                        </div>
                        <input type="text"  placeholder="Raw Material" className="form-control"/>
             </div>
             <div className="col-md-4 mb-3">
                      <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="Checkbox" />
                            <label htmlFor="Checkbox" className="form-check-label"> Finish Good: </label>
                        </div>
                        <input type="text"  placeholder="FG Item Name" className="form-control"/>
             </div>
             <div className="col-md-4 mt-4">
                     <button type="button" className="vndrbtn w-100">
                 Daywise Report
              </button>
             </div>
          </div>
          </form>
               
                 <div className="HeatCodeRegister-Main">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>RM Item No</th>
                          <th>RM Size</th>
                          <th>Heat Code</th>
                          <th>FG Item No</th>
                          <th>FG Item Code</th>
                          <th>FG Item Desc</th>
                          <th>Prod. Qty</th>
                          <th>Inv. Qty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example Row */}
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
                        </tr>
                        {/* Additional rows can be added dynamically here */}
                      </tbody>
                    </table>
                    </div>
                  </div>
      </div>
    </div>
  </div>
</div>


                  <div className="HeatCodeRegister-main">
                     
                  <div className="row text-start">
                     
                      <div className="col-md-2">
                            <label htmlFor="">From :</label>
                            <input type="date" className="form-control"/>
                      </div>
                      <div className="col-md-2">
                            <label htmlFor="">To :</label>
                            <input type="date" className="form-control"/>
                      </div> 
                      <div className="col-md-2">
                            <label htmlFor="">MainGroup:</label>
                            <select name="" id="" className="form-control">
                               <option value="">All</option>
                               <option value="">FG</option>
                               <option value="">RM</option>
                               <option value="">Tools</option>
                               <option value="">Instrument</option>
                               <option value="">Machine</option>
                               <option value="">Consumable</option>
                               <option value="">Safaty Equ</option>
                               <option value="">Service</option>
                               <option value="">Assest</option>
                               <option value="">F4</option>
                               <option value="">Scrap</option>
                               <option value="">SF</option>
                               <option value="">BO</option>
                               <option value="">DI</option>
                           </select>
                      </div> 
                      <div className="col-md-2">
                            <label htmlFor="">ItemGroup :</label>
                            <select name="" id="" className="form-control">
                               <option value="">All</option>
                               <option value="">End Piece</option>
                               <option value="">Machining</option>
                               <option value="">Belt</option>
                               <option value="">Bearing</option>
                               <option value="">Collect&Holders</option>
                               <option value="">Cams</option>
                               <option value="">Cutting Tool</option>
                               <option value="">Electrical Parts</option>
                               <option value="">Forming Tools</option>
                               <option value="">Gauges & Instuments</option>
                               <option value="">Genral</option>
                               <option value="">Holders</option>
                               <option value="">Inserts</option>
                               <option value="">Machine Spare</option>
                               <option value="">Oil & Lubricant</option>
                               <option value="">Packing</option>
                               <option value="">Services</option>
                               <option value="">Stationary</option>

                           </select>
                      </div> 
                      <div className="col-md-2">
                            <label htmlFor="">Cust/Supp :</label>
                            <input type="text" placeholder="Supp. Name" className="form-control"/>
                      </div> 
                      <div className="col-md-2">
                            <label htmlFor="">ItemName :</label>
                            <input type="text" placeholder="Enter Code" className="form-control"/>
                      </div> 
                      <div className="col-md-2 mt-3">
                            <label htmlFor="">HeatCode :</label>
                            <input type="date" placeholder="HeatCode" className="form-control"/>
                      </div> 
                      <div className="col-md-2 mt-3">
                            <label htmlFor="">HeatNo :</label>
                            <input type="date" placeholder="HeatNo" className="form-control"/>
                      </div> 
                    
                      <div className="col-md-2 ">
                           <button type="button" className="vndrbtn w-100" style={{marginTop:"35px"}}>
                              Search
                           </button> 
                        </div>

                    </div>
                    
                  </div>
                </div>

                <div className="HeatCodeRegistertable table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col"> Suppliar Name</th>
                          <th scope="col"> Item No</th>
                          <th scope="col">Item Desc</th>
                          <th scope="col">Item Size</th>
                          <th scope="col">Heat No</th>
                          <th scope="col">Supp Heat No</th>
                          <th scope="col">Route Card</th>
                          <th scope="col">Op Vs Dispatch</th>
                          <th scope="col">View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td>TUBE INVESTMENT OF INDIA LTD.</td>
                          <td>RM1125</td>
                          <td>28*20.4 CEW Tube</td>
                          <td>MACHINING</td>
                          <td>T06078</td>
                          <td>T06078</td>
                          <td><span className="clrble">View</span></td>
                          <td><span className="clrble">OP Vs Dispatch</span></td>
                          <td><button className="vndrbtn">
                              <i className="fas fa-eye"></i>
                            </button>
                         </td>
                        </tr>
                      </tbody>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>2</td>
                          <td>TUBE INVESTMENT OF INDIA LTD.</td>
                          <td>RM1072</td>
                          <td>26 * 18.3 CEW Tube</td>
                          <td>MACHINING</td>
                          <td>2383345</td>
                          <td>2383345</td>
                          <td><span className="clrble">View</span></td>
                          <td><span className="clrble">OP Vs Dispatch</span></td>
                          <td><button className="vndrbtn">
                              <i className="fas fa-eye"></i>
                            </button>
                         </td>
                        </tr>
                      </tbody>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>3</td>
                          <td>TUBE INVESTMENT OF INDIA LTD.</td>
                          <td>RM1006</td>
                          <td>16 * 10.2 CEW Tube</td>
                          <td>MACHINING</td>
                          <td>527611</td>
                          <td>527611</td>
                          <td><span className="clrble">View</span></td>
                          <td><span className="clrble">OP Vs Dispatch</span></td>
                          <td><button className="vndrbtn">
                              <i className="fas fa-eye"></i>
                            </button>
                         </td>
                        </tr>
                      </tbody>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>4</td>
                          <td>VISHWA SAMRIDHI INDUSTRIES</td>
                          <td>RM1094</td>
                          <td>19.2 Die ENTA(L)</td>
                          <td>MACHINING</td>
                          <td>F26497</td>
                          <td>F26497</td>
                          <td><span className="clrble">View</span></td>
                          <td><span className="clrble">OP Vs Dispatch</span></td>
                          <td><button className="vndrbtn">
                              <i className="fas fa-eye"></i>
                            </button>
                         </td>
                        </tr>
                      </tbody>
                    </table>
              </div>

            </main>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeatCodeRegister
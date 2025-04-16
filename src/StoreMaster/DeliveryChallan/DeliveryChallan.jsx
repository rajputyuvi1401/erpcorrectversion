import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./DeliveryChallan.css";
import {
  addDeliveryChallan,
  getDeliveryChallans,
  updateDeliveryChallan,
  deleteDeliveryChallan,
} from "../../Service/StoreApi.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveChallanData } from "../../Service/StoreApi.jsx";

const DeliveryChallan = () => {
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

  const [challans, setChallans] = useState([]);
  const [formData, setFormData] = useState({
    SelectItem: "",
    Store: "",
    ItemCode: "",
    HSNCode: "",
    Description: "",
    Purpose: "",
    Unit: "",
    Rate: "",
    Qty: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadChallans();
  }, []);

  // Load delivery challan data
  const loadChallans = async () => {
    const result = await getDeliveryChallans();
    setChallans(result.data);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    if (
      !formData.SelectItem ||
      !formData.Store ||
      !formData.ItemCode ||
      !formData.Description ||
      !formData.Purpose ||
      !formData.Unit ||
      !formData.Rate ||
      !formData.Qty
    ) {
      toast.error("All fields are required!");
      return;
    }

    if (isEditing) {
      await updateDeliveryChallan(editId, formData);
      toast.success("Challan updated successfully!");
      setIsEditing(false);
      setEditId(null);
    } else {
      await addDeliveryChallan(formData);
      toast.success("Challan added successfully!");
    }

    // Clear form
    setFormData({
      SelectItem: "",
      Store: "",
      ItemCode: "",
      HSNCode: "",
      Description: "",
      Purpose: "",
      Unit: "",
      Rate: "",
      Qty: "",
    });

    loadChallans();
  };

  // Handle edit action
  const handleEdit = (challan) => {
    setFormData(challan);
    setIsEditing(true);
    setEditId(challan.id);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this challan?")) {
      await deleteDeliveryChallan(id);
      toast.success("Challan deleted successfully!");
      loadChallans();
    }
  };

  // Second save
  const [formData1, setFormData1] = useState({
    VehicleNo: "",
    Contractor: "",
    ChallanDate: "",
    Transport: "",
    EWayBillNo: "",
    PoNo: "",
    Ref_Person: "",
    LrNo: "",
    PoDate: "",
    Department: "",
    AssessableValue: "",
    CGST: "",
    SGST: "",
    IGST: "",
    GrandTotal: "",
    Remark: "",
  });

  const handleChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    // Form validation
    let hasError = false; // Track if there's any error
    for (const key in formData1) {
      if (!formData1[key]) {
        toast.error(`${key} is required`);
        hasError = true; // Set error flag if a field is empty
      }
    }

    if (hasError) {
      return; // Exit if any field is empty
    }

    try {
      const response = await saveChallanData(formData1);
      toast.success("Challan saved successfully");
      console.log("Response:", response);

      // Clear the form data after successful submission
      setFormData1({
        VehicleNo: "",
        Contractor: "",
        ChallanDate: "",
        Transport: "",
        EWayBillNo: "",
        PoNo: "",
        Ref_Person: "",
        LrNo: "",
        PoDate: "",
        Department: "",
        AssessableValue: "",
        CGST: "",
        SGST: "",
        IGST: "",
        GrandTotal: "",
        Remark: "",
      });
    } catch (error) {
      toast.error("Error saving challan");
      console.error("Error:", error);
    }
  };
  return (
    <div className="NewStoreDeliverychallan">
      <ToastContainer />
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
                <div className="Deliverychallan-header">
                  <div className="row flex-nowrap align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">
                        Delivery Challan
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="Deliverychallan-main mt-2">
                  <div className="container-fluid text-start">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Plant:</th>
                                  <th>DC Series:</th>
                                  <th>DC Type:</th>
                                  <th>Inventory:</th>
                                  <th>Supp/Cust/Vendor:</th>
                                  <th>Address Code:</th>

                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <select
                                      id="sharpSelect"
                                      className="form-select"
                                    >
                                      <option selected>Produlink</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option>Select</option>
                                      <option value="Series1">Series1</option>
                                      <option value="Series2">Series2</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option>Select Type</option>
                                      <option value="Non-Returnable">
                                        Non-Returnable
                                      </option>
                                      <option value="Returnable">
                                        Returnable
                                      </option>
                                    </select>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option value="Without Inventory">
                                        Without Inventory
                                      </option>
                                      <option value="With Inventory">
                                        With Inventory
                                      </option>
                                    </select>
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                    <button type="button" className="vndrbtn">
                                      Search
                                    </button>
                                  </td>
                                  <td>
                                    <select className="form-select">
                                      <option></option>
                                    </select>
                                  </td>

                                  <td>
                                    <button type="button" className="vndrbtn">
                                      Cancel
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <form onSubmit={handleSubmit}>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Select Item: </th>
                                    <th>Store</th>
                                    <th>Item Code</th>
                                    <th>HSN Code</th>
                                    <th>Description</th>
                                    <th>Purpose</th>
                                    <th>Unit</th>
                                    <th>Rate</th>
                                    <th>Qty</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <input
                                        type="text"
                                        name="SelectItem"
                                        className="form-control"
                                        value={formData.SelectItem}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="Store"
                                        className="form-control"
                                        value={formData.Store}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="ItemCode"
                                        className="form-control"
                                        value={formData.ItemCode}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="HSNCode"
                                        className="form-control"
                                        value={formData.HSNCode}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <textarea
                                        name="Description"
                                        className="form-control"
                                        value={formData.Description}
                                        onChange={handleChange}
                                      ></textarea>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="Purpose"
                                        className="form-control"
                                        value={formData.Purpose}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="Unit"
                                        className="form-control"
                                        value={formData.Unit}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="Rate"
                                        className="form-control"
                                        value={formData.Rate}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name="Qty"
                                        className="form-control"
                                        value={formData.Qty}
                                        onChange={handleChange}
                                      />
                                    </td>
                                    <td>
                                      <button type="submit" className="vndrbtn">
                                        {isEditing ? "Update" : "Add"}
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Deliverychallanstatus">
                    <div className="container-fluid  text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Item No.</th>
                              <th>Item Code</th>
                              <th>HSN Code</th>
                              <th>Description</th>
                              <th>Purpose</th>
                              <th>Unit</th>
                              <th>Rate</th>
                              <th>Qty</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {challans.map((challan, index) => (
                              <tr key={challan.id}>
                                <td>{index + 1}</td>
                                <td>{challan.SelectItem}</td>
                                <td>{challan.ItemCode}</td>
                                <td>{challan.HSNCode}</td>
                                <td>{challan.Description}</td>
                                <td>{challan.Purpose}</td>
                                <td>{challan.Unit}</td>
                                <td>{challan.Rate}</td>
                                <td>{challan.Qty}</td>
                                <td>
                                  <FaEdit
                                    className="text-primary"
                                    onClick={() => handleEdit(challan)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </td>
                                <td>
                                  <FaTrash
                                    className="text-danger"
                                    onClick={() => handleDelete(challan.id)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    className="DeliverychallanFooter"
                    style={{ marginTop: "50px" }}
                  >
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    ></ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-Gernal-Detail"
                        role="tabpanel"
                        aria-labelledby="pills-Gernal-Detail-tab"
                        tabindex="0"
                      >
                        <div className="StoreDeliverychallan text-start">
                          <div className="container-fluid">
                            <form onSubmit={handleSubmit1}>
                              <div className="row">
                                <div className="col-md-4 text-start">
                                  <div className="container-fluid">
                                    <div className="table-responsive">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <th className="col-md-4">
                                              Challan No:
                                            </th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="ChallanNo"
                                                value={formData1.ChallanNo}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Vehicle No:</th>
                                            <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="VehicleNo"
                                                value={formData1.VehicleNo}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Contractor:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="Contractor"
                                                value={formData1.Contractor}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Challan Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                                name="ChallanDate"
                                                value={formData1.ChallanDate}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Transport:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="Transport"
                                                value={formData1.Transport}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>E Way Bill No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="EWayBillNo"
                                                value={formData1.EWayBillNo}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 text-start">
                                  {/* Second Column Group */}
                                  <div className="container">
                                    <div className="table-responsive text-start">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>PO No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="PoNo"
                                                value={formData1.PoNo}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Ref.PErson No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="Ref_Person"
                                                value={formData1.Ref_Person}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th className="col-md-4">LR No:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="LrNo"
                                                value={formData1.LrNo}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>PO Date:</th>
                                            <td>
                                              <input
                                                type="date"
                                                className="form-control"
                                                name="PoDate"
                                                value={formData1.PoDate}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Department:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="Department"
                                                value={formData1.Department}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Assessable Value:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="AssessableValue"
                                                value={
                                                  formData1.AssessableValue
                                                }
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 text-start">
                                  {/* Third Column Group */}
                                  <div className="container">
                                    <div className="table-responsive">
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>CGST:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="CGST"
                                                value={formData1.CGST}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>SGST:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="SGST"
                                                value={formData1.SGST}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>IGST:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="IGST"
                                                value={formData1.IGST}
                                                onChange={handleChange1}
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Grand Total:</th>
                                            <td>
                                              <input
                                                type="text"
                                                className="form-control"
                                                name="GrandTotal"
                                                value={formData1.GrandTotal}
                                                onChange={handleChange1}
                                                required
                                              />
                                            </td>
                                          </tr>

                                          <tr>
                                            <th>Remark:</th>
                                            <td>
                                              <textarea
                                                className="form-control"
                                                name="Remark"
                                                value={formData1.Remark}
                                                onChange={handleChange1}
                                                rows="2"
                                                required
                                              ></textarea>
                                            </td>
                                          </tr>

                                          <tr>
                                            <td
                                              colspan="2"
                                              className="text-center"
                                            >
                                              <button
                                                type="submit"
                                                className="vndrbtn"
                                              >
                                                Save Challan
                                              </button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
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
  );
};

export default DeliveryChallan;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";

import { FaEdit, FaTrash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./MaterialIssueGernal.css";
import {
  getMaterialGernal,
  addMaterialGernal,
  updateMaterialGernal,
  deleteMaterialGernal,
} from "../../Service/StoreApi.jsx";
import { toast, ToastContainer } from "react-toastify";

const MaterialIssueGernal = () => {

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

  // Model

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModalClose1 = () => setShowModal1(false);
  // const handleModalOpen1 = () => setShowModal1(true);

  const handleModalClose2 = () => setShowModal2(false);
  // const handleModalOpen2 = () => setShowModal2(true);

  const [materials, setMaterials] = useState([]);
  
  const [formData, setFormData] = useState({
    Item: "",
    ItemDescription: "",
    AvailableStock: "",
    StockStatus: "",
    Machine: "",
    StoreName: "",
    Qty: "",
    Unit: "",
    Remark: "",
    MrnNo: "",
    Employee: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadMaterials();
  }, []);

  const loadMaterials = async () => {
    const data = await getMaterialGernal();
    setMaterials(data);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.Item ||
      !formData.ItemDescription ||
      !formData.AvailableStock ||
      !formData.StockStatus ||
      !formData.Machine ||
      !formData.StoreName ||
      !formData.Qty ||
      !formData.Unit ||
      !formData.Remark ||
      !formData.MrnNo ||
      !formData.Employee
    ) {
      toast.error("All fields are required!");
      return;
    }

    if (isEditing) {
      await updateMaterialGernal(editId, formData);
      toast.success("Material updated successfully!");
      setIsEditing(false);
      setEditId(null);
    } else {
      await addMaterialGernal(formData);
      toast.success("Material added successfully!");
    }

    setFormData({
      Item: "",
      ItemDescription: "",
      AvailableStock: "",
      StockStatus: "",
      Machine: "",
      StoreName: "",
      Qty: "",
      Unit: "",
      Remark: "",
      MrnNo: "",
      Employee: "",
    });

    loadMaterials(); // Reload materials after adding/updating
  };

  // Handle edit button click
  const handleEdit = (material) => {
    setFormData(material);
    setIsEditing(true);
    setEditId(material.id);
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await deleteMaterialGernal(id);
      toast.success("Material deleted successfully!");
      loadMaterials();
    }
  };

  return (
    <div className="NewStoreNewMaterialGernal">
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

                <div className="NewMaterialGernal-header">
                  <div className="row flex-wrap align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">
                        New General Material Issue
                      </h5>
                    </div>
                    <div className="col-md-9 mt-4">
                      <div className="row flex-nowrap align-items-center mb-3">
                        {/* Plant Label and Select */}
                        <div className="col-auto">
                          <label htmlFor="plantSelect" className="form-label">
                            Plant:
                          </label>
                        </div>
                        <div className="col-auto">
                          <select id="plantSelect" className="form-select">
                            <option selected>Produlink</option>
                          </select>
                        </div>

                        {/* Series Label and Select */}
                        <div className="col-auto">
                          <label htmlFor="seriesSelect" className="form-label">
                            Series:
                          </label>
                        </div>
                        <div className="col-auto">
                          <select id="seriesSelect" className="form-select">
                            <option selected>Select</option>
                            <option value="Material Issue General">
                              Material Issue General
                            </option>
                          </select>
                        </div>

                        {/* General Label and Select */}
                        <div className="col-auto">
                          <label htmlFor="generalSelect" className="form-label">
                            General:
                          </label>
                        </div>
                        <div className="col-auto">
                          <select id="generalSelect" className="form-select">
                            <option selected>Select</option>
                            <option value="General">General</option>
                            <option value="MRN">MRN</option>
                          </select>
                        </div>

                        {/* Input Field */}
                        <div className="col-1 mt-2 mt-sm-0">
                          <input
                            type="text"
                            id="inputField"
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="NewMaterialGernal-main mt-2">

                  <div className="container-fluid text-start">
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <form onSubmit={handleSubmit}>
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Item :</th>
                                  <th>Item Description</th>
                                  <th>Available Stock</th>

                                  <th>Stock Status</th>
                                  <th>
                                    Machine
                                    {/* <div className="form-check d-inline-block">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="machineMaster"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="machineMaster"
                                      >
                                        Master
                                      </label>
                                    </div> */}
                                    {/* <div className="form-check d-inline-block ms-2">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="machineOther"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="machineOther"
                                      >
                                        Other
                                      </label>
                                    </div> */}
                                  </th>
                                  <th>Store Name</th>
                                  <th>Qty / Unit</th>
                                  <th>Remark</th>
                                  <th>MRN No.</th>
                                  <th>
                                    Employee
                                    {/* <div className="form-check d-inline-block">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="employeeMaster"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="employeeMaster"
                                      >
                                        Master
                                      </label>
                                    </div> */}
                                    {/* <div className="form-check d-inline-block ms-2">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="employeeOther"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="employeeOther"
                                      >
                                        Other
                                      </label>
                                    </div> */}
                                  </th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <input
                                      type="text"
                                      name="Item"
                                      className="form-control"
                                      value={formData.Item}
                                      onChange={handleChange}
                                      required
                                    />
                                  </td>
                                  <td>
                                    <textarea
                                      name="ItemDescription"
                                      rows="1"
                                      className="form-control"
                                      value={formData.ItemDescription}
                                      onChange={handleChange}
                                      required
                                    ></textarea>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="AvailableStock"
                                      className="form-control"
                                      value={formData.AvailableStock}
                                      onChange={handleChange}
                                      required
                                    />
                                  </td>
                                  <td>
                                    <select
                                      name="StockStatus"
                                      className="form-select"
                                      value={formData.StockStatus}
                                      onChange={handleChange}
                                      required
                                    >
                                      <option value="">Select</option>
                                      <option value="Available">
                                        Available
                                      </option>
                                      <option value="Not Available">
                                        Not Available
                                      </option>
                                    </select>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="Machine"
                                      className="form-control"
                                      value={formData.Machine}
                                      onChange={handleChange}
                                      required
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="StoreName"
                                      className="form-control"
                                      value={formData.StoreName}
                                      onChange={handleChange}
                                      required
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="Qty"
                                      className="form-control"
                                      value={formData.Qty}
                                      onChange={handleChange}
                                      required
                                    />
                                    <select
                                      name="Unit"
                                      className="form-select"
                                      value={formData.Unit}
                                      onChange={handleChange}
                                      required
                                    >
                                      <option value="">Select</option>
                                      <option value="Pcs">Pcs</option>
                                      <option value="Kg">Kg</option>
                                    </select>
                                  </td>
                                  <td>
                                    <textarea
                                      name="Remark"
                                      className="form-control"
                                      value={formData.Remark}
                                      onChange={handleChange}
                                    ></textarea>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="MrnNo"
                                      className="form-control"
                                      value={formData.MrnNo}
                                      onChange={handleChange}
                                      required
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="Employee"
                                      className="form-control"
                                      value={formData.Employee}
                                      onChange={handleChange}
                                      required
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

                  <div className="NewMaterialGernaltable">

                    <div className="container-fluid mt-2 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Item Desc</th>
                              <th>Qty</th>

                              <th>Stock Status</th>

                              <th>
                                Machine{" "}
                                {/* <button
                                  className="vndrbtn"
                                  onClick={handleModalOpen1}
                                >
                                  Add
                                </button> */}
                              </th>
                              <th>Nature of Work</th>
                              <th>MRN No: </th>
                              <th>
                                Employee:{" "}
                                {/* <button
                                  className="vndrbtn"
                                  onClick={handleModalOpen2}
                                >
                                  See All
                                </button> */}
                              </th>

                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                          {materials.map((material, index) => (
                              <tr key={material.id}>
                                <td>{index + 1}</td>
                                <td>{material.ItemDescription}</td>

                                <td>{material.Qty}</td>
                                <td>{material.StockStatus}</td>
                                <td>{material.Machine}</td>
                                
                                <td>{material.StoreName}</td>
                                <td>{material.MrnNo}</td>
                                <td>{material.Employee}</td>
                              

                                <td>
                                  <FaEdit
                                    className="text-primary"
                                    onClick={() => handleEdit(material)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </td>
                                <td>
                                  <FaTrash
                                    className="text-danger"
                                    onClick={() => handleDelete(material.id)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div
                      className={`modal fade ${
                        showModal1 ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add Type</h5>
                            <button
                              type="button"
                              className="vndrbtn"
                              onClick={handleModalClose1}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="container-fluid">
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Select Employee:
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="vndrbtn"
                              onClick={handleModalClose1}
                            >
                              Close
                            </button>
                            <button type="button" className="vndrbtn">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`modal fade ${
                        showModal2 ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add Type</h5>
                            <button
                              type="button"
                              className="vndrbtn"
                              onClick={handleModalClose2}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            {/* Content of the modal */}
                            <p>Type form fields here.</p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="vndrbtn"
                              onClick={handleModalClose2}
                            >
                              Close
                            </button>
                            <button type="button" className="vndrbtn">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="NewMaterialGernalFooter">
                    <div className="container-fluid">
                      {/* Input Fields */}
                      <div className="row g-3">
                        {/* M Issue No */}
                        <div className="col-md-3">
                          <div className="row align-items-center">
                            <div className="col-4 col-md-4 text-end">
                              <label>M Issue No:</label>
                            </div>
                            <div className="col-4 col-md-4">
                              <input
                                className="form-control"
                                placeholder="No"
                              />
                            </div>
                            <div className="col-4 col-md-4">
                              <input
                                className="form-control"
                                placeholder="Details"
                              />
                            </div>
                          </div>
                        </div>

                        {/* M Issue Date */}
                        <div className="col-md-3">
                          <div className="row align-items-center">
                            <div className="col-6 text-end">
                              <label>M Issue Date:</label>
                            </div>
                            <div className="col-6">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div> 

                        {/* M Issue Time */}
                        <div className="col-md-3">
                          <div className="row align-items-center">
                            <div className="col-6 text-end">
                              <label>M Issue Time:</label>
                            </div>
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Time"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Project */}
                        <div className="col-md-3">
                          <div className="row align-items-center">
                            <div className="col-6 text-end">
                              <label>Project:</label>
                            </div>
                            <div className="col-6">
                              <select className="form-select">
                                <option>Select</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Save & Clear Buttons */}
                        <div className="col-md-2 d-flex justify-content-end align-items-center">
                          <button className="vndrbtn w-100">Save Challan</button>
                        </div>
                        <div className="col-md-1 d-flex justify-content-end align-items-center">
                          <button className="vndrbtn w-100">Clear</button>
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

export default MaterialIssueGernal;

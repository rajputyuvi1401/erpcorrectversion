import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./BillMaterial.css";
import VisibleStandard from "./VisibleStandard.jsx";
// Purchase Card
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  saveDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartmentCard,
} from "../../Service/Api.jsx";

import {
  saveOperation,
  getOperations,
  updateOperation,
  deleteOperation,
} from "../../Service/Api.jsx";

import VisibleBomitem from "./VisibleBomitem.jsx";

const BillMaterial = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  //   card
  const [cardVisibleProduction, setCardVisibleProduction] = useState(false);

  const toggleCardProduction = () => {
    setCardVisibleProduction(!cardVisibleProduction);
  };

  const [cardVisibleOperation, setCardVisibleOperation] = useState(false);

  const toggleCardOperation = () => {
    setCardVisibleOperation(!cardVisibleOperation);
  };

  const [cardVisibleStandard, setCardVisibleStandard] = useState(false);

  const toggleCardStandard = () => {
    setCardVisibleStandard(!cardVisibleStandard);
  };

  const [cardVisibleBomitem, setCardVisibleBomitem] = useState(false);

  const toggleCardBomitem = () => {
    setCardVisibleBomitem(!cardVisibleBomitem);
  };

  // Purchase Card
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Department_Name: "",
    Short_Name: "",
    Std_Otp: "",
    Operation_Name: "",
    Prefix: "",
    Mhr_Rate: "",
    BomQc: "",
    ProductionDept: "",
    MachineType: "",
    Production_Cycle_Time: "",
    Stop_Mc_Booking: "",
    Per_Day_Prod_Qty: "",
    Bom_Item_Group: "",
    Item: "",
    Qty: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Department_Name) {
      newErrors.Department_Name = "This field is required.";
    }
    if (!formData.Short_Name) {
      newErrors.Short_Name = "This field is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      if (isEditing) {
        await updateDepartment(editId, formData);
        toast.success("Department updated successfully!");
      } else {
        await saveDepartment(formData);
        toast.success("Department saved successfully!");
      }
      fetchDepartments(); // Refresh data
      setFormData({ Department_Name: "", Short_Name: "" });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      toast.error("Failed to save department.");
      console.error("Error saving department:", error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setData(response);
    } catch (error) {
      toast.error("Failed to fetch departments.");
      console.error("Error fetching departments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartmentCard(id);
      toast.success("Department deleted successfully!");
      fetchDepartments(); // Refresh data
    } catch (error) {
      toast.error("Failed to delete department.");
      console.error("Error deleting department:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      Department_Name: item.Department_Name,
      Short_Name: item.Short_Name,
    });
    setIsEditing(true);
    setEditId(item.id);
  };

  // card

  useEffect(() => {
    fetchOperations();
  }, []);

  const validateForm1 = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave1 = async (e) => {
    e.preventDefault();
    if (!validateForm1()) {
      return;
    }
    try {
      if (isEditing) {
        await updateOperation(editId, formData);
        toast.success("Operation updated successfully!");
      } else {
        await saveOperation(formData);
        toast.success("Operation saved successfully!");
      }
      fetchOperations(); // Refresh data
      setFormData({
        Std_Otp: "",
        Operation_Name: "",
        Prefix: "",
        Mhr_Rate: "",
        BomQc: "",
        ProductionDept: "",
        MachineType: "",
        Production_Cycle_Time: "",
        Stop_Mc_Booking: "",
        Per_Day_Prod_Qty: "",
      });
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      toast.error("Failed to save operation.");
      console.error("Error saving operation:", error);
    }
  };

  const fetchOperations = async () => {
    try {
      const response = await getOperations();
      setData(response);
    } catch (error) {
      toast.error("Failed to fetch operations.");
      console.error("Error fetching operations:", error);
    }
  };

  const handleDelete1 = async (id) => {
    try {
      await deleteOperation(id);
      toast.success("Operation deleted successfully!");
      fetchOperations(); // Refresh data
    } catch (error) {
      toast.error("Failed to delete operation.");
      console.error("Error deleting operation:", error);
    }
  };

  const handleEdit1 = (item) => {
    setFormData({
      Std_Otp: item.Std_Otp,
      Operation_Name: item.Operation_Name,
      Prefix: item.Prefix,
      Mhr_Rate: item.Mhr_Rate,
      BomQc: item.BomQc,
      ProductionDept: item.ProductionDept,
      MachineType: item.MachineType,
      Production_Cycle_Time: item.Production_Cycle_Time,
      Stop_Mc_Booking: item.Stop_Mc_Booking,
      Per_Day_Prod_Qty: item.Per_Day_Prod_Qty,
    });
    setIsEditing(true);
    setEditId(item.id);
  };

  // card2

  return (
    <div className="BillMaterial">
      <div className="container-fluid">
        <ToastContainer />
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="BillMaterial1">
                  <div className="BillMaterialMain">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-5 text-start">
                          <h5 style={{ color: "blue" }}>
                            Routing & Bill of Material (BOM)
                          </h5>
                        </div>
                        <div className="col-md-7 text-end">
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardProduction}
                          >
                            1. Production Dept
                          </button>
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardOperation}
                          >
                            2. Operation Master
                          </button>
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardStandard}
                          >
                            3. Std Routing
                          </button>
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardBomitem}
                          >
                            BOM Item Group
                          </button>
                          <button className="Billmaterialbtn">BOM Print</button>
                          <button className="Billmaterialbtn">BOM List</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {cardVisibleProduction && (
                    <div className="ProductionDeptCard">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>Production Department Master</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardProduction}
                          >
                            X
                          </button>
                        </div>

                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-12 text-start">
                              <h5 style={{ color: "blue" }}>
                                Production Department Master
                              </h5>
                            </div>
                          </div>
                          <form onSubmit={handleSave}>
                            <div className="row mb-3 text-start">
                              <div className="col-md-5">
                                <label
                                  htmlFor="Department_Name"
                                  className="form-label"
                                >
                                  Department Name:
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.Department_Name ? "is-invalid" : ""
                                  }`}
                                  id="Department_Name"
                                  name="Department_Name"
                                  value={formData.Department_Name}
                                  onChange={handleInputChange}
                                  placeholder="Enter department name"
                                />
                                {errors.Department_Name && (
                                  <div className="invalid-feedback">
                                    {errors.Department_Name}
                                  </div>
                                )}
                              </div>
                              <div className="col-md-5">
                                <label
                                  htmlFor="Short_Name"
                                  className="form-label"
                                >
                                  Short Name:
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.Short_Name ? "is-invalid" : ""
                                  }`}
                                  id="Short_Name"
                                  name="Short_Name"
                                  value={formData.Short_Name}
                                  onChange={handleInputChange}
                                  placeholder="Enter short name"
                                />
                                {errors.Short_Name && (
                                  <div className="invalid-feedback">
                                    {errors.Short_Name}
                                  </div>
                                )}
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="submit"
                                  className="bomButton"
                                  style={{ marginTop: "24px" }}
                                >
                                  {isEditing ? "Update" : "Save"}
                                </button>
                              </div>
                            </div>
                          </form>
                          <div className="row">
                            <div className="col-12">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Department Name</th>
                                    <th scope="col">Short Name</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {data.length > 0 ? (
                                    data.map((item, index) => (
                                      <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.Department_Name}</td>
                                        <td>{item.Short_Name}</td>
                                        <td>
                                          <FaEdit
                                            className="text-primary mx-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleEdit(item)}
                                          />
                                        </td>
                                        <td>
                                          <FaTrash
                                            className="text-danger mx-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                              handleDelete(item.id)
                                            }
                                          />
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr>
                                      <td colSpan="5" className="text-center">
                                        No data found!
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardVisibleOperation && (
                    <div className="Operation">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>Production Department Master</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardOperation}
                          >
                            X
                          </button>
                        </div>

                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-12 text-start">
                              <h5 style={{ color: "blue" }}>
                                Operation Master
                              </h5>
                            </div>
                          </div>
                          <form onSubmit={handleSave1}>
                            <div className="row mb-3 text-start">
                              {Object.keys(formData).map((key) => (
                                <div className="col-md-5 mb-3" key={key}>
                                  <label className="form-label">
                                    {key.replace(/_/g, " ")}
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errors[key] ? "is-invalid" : ""
                                    }`}
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleInputChange1}
                                    placeholder={`Enter ${key.replace(
                                      /_/g,
                                      " "
                                    )}`}
                                  />
                                  {errors[key] && (
                                    <div className="invalid-feedback">
                                      {errors[key]}
                                    </div>
                                  )}
                                </div>
                              ))}
                              <div className="col-md-2">
                                <button
                                  type="submit"
                                  className="bomButton"
                                  style={{ marginTop: "24px" }}
                                >
                                  {isEditing ? "Update" : "Save"}
                                </button>
                              </div>
                            </div>
                          </form>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">Sr. No.</th>
                                      <th scope="col">Std. Op No</th>
                                      <th scope="col">Operation Name</th>
                                      <th scope="col">Prefix</th>
                                      <th scope="col">MC-IR Rate</th>
                                      <th scope="col">Qc Apply</th>
                                      <th scope="col">Department</th>
                                      <th scope="col">Machine Type</th>
                                      <th scope="col">Allow Cycle Time</th>
                                      <th scope="col">Step wc Booking</th>
                                      <th scope="col">Print</th>
                                      <th scope="col">SAC Code</th>
                                      <th scope="col">Operation Rate</th>
                                      <th scope="col">Per Day Per Qty</th>
                                      <th scope="col">Edit</th>
                                      <th scope="col">Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {data.length > 0 ? (
                                      data.map((item, index) => (
                                        <tr key={item.id}>
                                          <td>{index + 1}</td>
                                          <td>{item.Std_Otp}</td>
                                          <td>{item.Operation_Name}</td>
                                          <td>{item.Prefix}</td>
                                          <td>{item.Mhr_Rate}</td>
                                          <td>{item.BomQc}</td>
                                          <td>{item.ProductionDept}</td>
                                          <td>{item.MachineType}</td>
                                          <td>{item.Production_Cycle_Time}</td>
                                          <td>{item.Stop_Mc_Booking}</td>
                                          <td>{item.Print}</td>
                                          <td>{item.SAC_Code}</td>
                                          <td>{item.Operation_Rate}</td>
                                          <td>{item.Per_Day_Per_Qty}</td>
                                          <td>
                                            <FaEdit
                                              className="text-primary mx-2"
                                              style={{ cursor: "pointer" }}
                                              onClick={() => handleEdit1(item)}
                                            />
                                          </td>
                                          <td>
                                            <FaTrash
                                              className="text-danger mx-2"
                                              style={{ cursor: "pointer" }}
                                              onClick={() =>
                                                handleDelete1(item.id)
                                              }
                                            />
                                          </td>
                                        </tr>
                                      ))
                                    ) : (
                                      <tr>
                                        <td
                                          colSpan="16"
                                          className="text-center"
                                        >
                                          No Records Found
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="row text-start">
                            <div className="col-md-12">
                              <h6>Total Records: {data.length}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardVisibleStandard && (
                    <div className="Standard">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>Standard Routing Master</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardStandard}
                          >
                            X
                          </button>
                        </div>
                        <VisibleStandard />
                      </div>
                    </div>
                  )}
                  {cardVisibleBomitem && (
                    <div className="Bomitem">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>BOM Item Group Details</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardBomitem}
                          >
                            X
                          </button>
                        </div>
                        <VisibleBomitem />
                      </div>
                    </div>
                  )}
                  <div className="BillMaterialsection">
                    <div className="container-fluid">
                      <div className="row mt-3 align-items-center">
                        <div className="col-md-2">
                          <select className="form-select">
                            <option>Select Option</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Input Field"
                          />
                        </div>
                        <div className="col-md-2">
                          <button className="materialbtn">Save</button>
                          <button className="materialbtn">Clear</button>
                        </div>
                        <div className="col-md-2" style={{ marginTop: "10px" }}>
                          <label className="form-label">Born Authorise</label>
                        </div>
                        <div className="col-md-1">
                          <select className="form-select">
                            <option>Select Option</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <button className="materialbtn">Copy BOM</button>
                        </div>
                        <div className="col-md-2">
                          <p style={{ color: "blue", marginTop: "10px" }}>
                            Calculate RM Wt
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-start">
                          <button className="BOMBOttombtn">BOM</button>
                          <button className="BOMBOttombtn">BOM History</button>
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

export default BillMaterial;

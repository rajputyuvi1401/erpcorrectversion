import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./ScrapRejectionEntry.css";
import {
  getNextNoteNo,
  submitScrapRejectionEntry,
} from "../../../Service/Production.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const ScrapRejectionEntry = () => {
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

  const [noteNo, setNoteNo] = useState("");
  const [formData, setFormData] = useState({
    Plant:"",
    Series: "",
    NoteType: "",
    NoteNo: "",
    NoteDate: "",
    ItemCode: "",
    PartCode: "",
    Stock: "",
    Rework: "",
    Reject: "",
    ScrapReason: "",
    ReworkScrapRemark: "",
    RejectScrapRemark: "",
    ScrapItemCode: "",
    ScrapWt: "",
    scrap_items: [],
  });
  const handleSeriesChange = async (e) => {
    const selectedSeries = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      Series: selectedSeries,
    }));
  
    if (selectedSeries === "FG Scrap Rejection Note") {
      const shortYear = localStorage.getItem("Shortyear"); // Get year from localStorage
      if (shortYear) {
        try {
          const nextNoteNo = await getNextNoteNo(shortYear);
          if (nextNoteNo) {
            setNoteNo(nextNoteNo); // Set the note number state
            setFormData((prevData) => ({
              ...prevData,
              NoteNo: nextNoteNo,
            }));
          }
        } catch (error) {
          console.error("Error fetching next note number:", error);
        }
      }
    } else {
      // Reset NoteNo if a different series is selected
      setNoteNo("");
      setFormData((prevData) => ({
        ...prevData,
        NoteNo: "",
      }));
    }
  };
  
  
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleAdd = () => {
    if (!formData.ItemCode || !formData.PartCode || !formData.Reject || !formData.ScrapReason || !formData.ScrapWt) {
      toast.error("Please fill all required fields!");
      return;
    }
  
    const newItem = {
      ItemDescription: formData.ItemCode,
      HeatCode: formData.PartCode,
      ReworkQty: formData.Rework,
      Reason: formData.ReworkScrapRemark,
      RejectQty: formData.Reject,
      Reason2: formData.RejectScrapRemark,
      ScrapWt: formData.ScrapWt
    };
  
    setFormData((prevData) => ({
      ...prevData,
      scrap_items: [...prevData.scrap_items, newItem],
      ItemCode: "",
      PartCode: "",
      Rework: "",
      Reject: "",
      ScrapReason: "",
      RejectScrapRemark: "",
      ScrapWt: "",
    }));
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData };
      console.log("Submitting Data:", payload); // Debugging
  
      const response = await submitScrapRejectionEntry(payload);
      console.log("API Response:", response); // Debug API response
  
      toast.success("Entry saved successfully!", { position: "top-right", autoClose: 2000 });
  
      // Reset form after submission
      setFormData({
        Plant: "",
        Series: "",
        NoteType: "",
        NoteNo: "",
        NoteDate: "",
        ItemCode: "",
        PartCode: "",
        Stock: "",
        Rework: "",
        Reject: "",
        ScrapReason: "",
        ReworkScrapRemark: "",
        RejectScrapRemark: "",
        ScrapItemCode: "",
        ScrapWt: "",
        scrap_items: [],
      });
  
      setNoteNo(""); // Reset Note No
    } catch (error) {
      console.error("API Error:", error); // Debugging error
      toast.error("Failed to save entry.", { position: "top-right", autoClose: 2000 });
    }
  };
  
  

  const handleRemove = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      scrap_items: prevData.scrap_items.filter((_, i) => i !== index),
    }));
  };
  
  return (
    <div className="ScrapRejectionEntryMaster">
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
                <div className="ScrapRejectionEntry">
                  <form onSubmit={handleSubmit}>
                    <div className="ScrapRejectionEntry-header mb-3">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <h5 className="header-title text-start">
                            FG Scrap/ Rejection Note
                          </h5>
                        </div>
                        <div className="col-md-9">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                            <select
                                id="seriesSelect"
                                className="form-select"
                                name="Plant"
                                value={formData.Plant}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Plant</option>
                                <option value="Produlink">Produlink</option>
                                <option value="FactoryA">Factory A</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ScrapRejectionEntry-form bg-light p-3 rounded">
                      <div className="row g-3 text-start">
                        <div className="col-md-2">
                          <label htmlFor="series" className="form-label">
                            Series
                          </label>
                          <select
  className="form-select"
  id="series"
  name="Series"
  value={formData.Series}
  onChange={handleSeriesChange}
>
  <option value="">Select</option>
  <option value="FG Scrap Rejection Note">FG Scrap Rejection Note</option>
</select>

                        </div>
                        <div className="col-md-2">
                          <label htmlFor="NoteType" className="form-label">
                            Note Type
                          </label>
                          <select
                            className="form-select"
                            id="NoteType"
                            name="NoteType"
                            value={formData.NoteType}
                            onChange={handleInputChange}
                          >
                            <option>Select</option>
                            <option value="Scrap">Scrap</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="noteNo" className="form-label">
                            Note No
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="noteNo"
                            name="NoteNo"
                            value={noteNo}
                            readOnly
                          />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="NoteDate" className="form-label">
                            Note Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="NoteDate"
                            name="NoteDate"
                            value={formData.NoteDate}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="ItemCode" className="form-label">
                            Item Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ItemCode"
                            name="ItemCode"
                            value={formData.ItemCode}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="PartCode" className="form-label">
                            Part Code
                          </label>
                          <select
                            className="form-select"
                            id="PartCode"
                            name="PartCode"
                            value={formData.PartCode}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="Option1">Option 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="row g-3 mt-1 text-start">
                        

                        <div className="col-md-2">
                          <label htmlFor="Stock" className="form-label">
                            Stock
                          </label>
                          <select
                            className="form-select"
                            id="Stock"
                            name="Stock"
                            value={formData.Stock}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="Option1">Option 1</option>
                          </select>
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="Rework" className="form-label">
                            Rework
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Rework"
                            name="Rework"
                            value={formData.Rework}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="Reject" className="form-label">
                            Reject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Reject"
                            name="Reject"
                            value={formData.Reject}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="ScrapReason" className="form-label">
                            Scrap Reason
                          </label>
                          <select
                            className="form-select"
                            id="ScrapReason"
                            name="ScrapReason"
                            value={formData.ScrapReason}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="Option1">Option 1</option>
                          </select>
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="ReworkScrapRemark" className="form-label">
                          Rework Scrap Remark
                          </label>
                          <textarea
                            className="form-control"
                            id="ReworkScrapRemark"
                            name="ReworkScrapRemark"
                            value={formData.ReworkScrapRemark}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                        
                        <div className="col-md-2">
                          <label htmlFor="RejectScrapRemark" className="form-label">
                           Reject Scrap Remark
                          </label>
                          <textarea
  className="form-control"
  id="rejectScrapRemark"
  name="RejectScrapRemark"  // Corrected
  value={formData.RejectScrapRemark}
  onChange={handleInputChange}
/>
                        </div>

                      </div>

                      <div className="row g-3 mt-1 text-start">
          
                        <div className="col-md-2">
                          <label htmlFor="ScrapItemCode" className="form-label">
                            Scrap Item Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ScrapItemCode"
                            name="ScrapItemCode"
                            value={formData.ScrapItemCode}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-md-2">
                          <label htmlFor="ScrapWt" className="form-label">
                            Scrap WT
                          </label>
                          <textarea
                          className="form-control"
                          id="scrapWt"
                          name="ScrapWt"
                          value={formData.ScrapWt}
                          onChange={handleInputChange}
                        ></textarea>

                        </div>

                        <div className="col-md-2" style={{marginTop:"49px"}}>
                          <button
                            className="vndrbtn w-100"
                            type="button"
                            onClick={handleAdd}
                          >
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ScrapRejectionEntry-table mt-2">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Sr.</th>
                            <th>Item Desc</th>
                            <th>Heat Code</th>

                            <th>Reject Qty</th>
                            <th>Reason</th>
                            <th>Reject Qty</th>
                            <th>Reason</th>

                            <th>Scrap wt</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
  {formData.scrap_items.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.ItemDescription}</td>
      <td>{item.HeatCode}</td>
      <td>{item.ReworkQty}</td>
      <td>{item.Reason}</td>
      <td>{item.RejectQty}</td>
      <td>{item.Reason2}</td>
      <td>{item.ScrapWt}</td>
      <td>
        <button className="vndrbtn" onClick={() => handleRemove(index)}><FaTrash/></button>
      </td>
    </tr>
  ))}
</tbody>

                      </table>
                    </div>

                    <div className="row mt-3 justify-content-end">
                      <div className="text-end col-auto d-flex gap-2">
                        {/* Save Entry Button */}
                        <button type="submit" className="vndrbtn">
                          Save Entry
                        </button>

                        {/* Clear Button */}
                        <button
                          type="button"
                          className="vndrbtn"
                         
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapRejectionEntry;

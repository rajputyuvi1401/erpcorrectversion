import axios from "axios";

// const BASE_URL = "http://13.201.136.34:8000/Production/";
const BASE_URL = "api/Production/";

export const createWorkOrder = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}workorderentry/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating work order:", error);
      throw error;
    }
  };


  export const fetchWorkOrders = async () => {
    try {
      const response = await axios.get(`${BASE_URL}workorderentry/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Work Orders:", error);
      throw error;
    }
  };



 



  const ProductionApi = {
    // Fetch contractor names
    getContractors: async () => {
      try {
        const response = await axios.get(`${BASE_URL}Production_contractor/`);
        return response.data;
      } catch (error) {
        console.error("Error fetching contractors:", error);
        throw error;
      }
    },
  
    // Save contractor production entry
    saveProductionEntry: async (data) => {
      try {
        const response = await axios.post(`${BASE_URL}Contractor_Production_Entry/`, data);
        return response.data;
      } catch (error) {
        console.error("Error saving production entry:", error);
        throw error;
      }
    },


  // Fetch unit machines
  fetchUnitMachines: async (searchTerm = "") => {
    try {
      const response = await axios.get(`${BASE_URL}Production_unitmachine/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching unit machines:", error);
      throw error;
    }
  },
  };
  
  export default ProductionApi;
  

  // Function to get the next scrap rejection number based on the series
export const getNextScrapRejectionNo = async (shortYear) => {
  try {
    const response = await axios.get(
      `${BASE_URL}scrap_rejection_no/`,{
        params: { Shortyear: shortYear },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching scrap rejection number:", error);
    throw error; // Rethrow error for handling in the calling component
  }
};





// Function to submit the scrap rejection form data
export const submitScrapRejection = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}scrap_rejection/`, payload);
    return response.data;
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error; // Rethrow error for handling in the calling component
  }
};

// GET all scrap rejections
export const getScrapRejections = async () => {
  try {
    const response = await axios.get(`${BASE_URL}scrap_rejection/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

// POST a new scrap rejection
export const addScrapRejection = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}scrap_rejection/`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding data", error);
    throw error;
  }
};

// DELETE a scrap rejection by id
export const deleteScrapRejection = async (id) => {
  try {
    await axios.delete(`${BASE_URL}scrap_rejection/${id}/`);
    return id;
  } catch (error) {
    console.error("Error deleting data", error);
    throw error;
  }
};



// Production

export const getProductionNumber = async (series, shortYear) => {
  try {
    // Adjust query parameters as required by your API
    const response = await axios.get(`${BASE_URL}api/production-entries/get_prod_no/`, {
      params: { series: series, year: shortYear },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching production number:", error);
    throw error; // Rethrow error for handling in the calling component
  }
};






export const createProductionEntry = async (productionData) => {
  try {
    const response = await fetch(`${BASE_URL}api/production-entries/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productionData),
    })

    if (!response.ok) {
      throw new Error("Failed to create production entry")
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating production entry:", error)
    throw error
  }
}

export const fetchHelpers = async () => {
  try {
    const response = await fetch(`${BASE_URL}Production_Helper/`);
    const data = await response.json();
    console.log("API Response for helpers:", data);

    // If data is already an array, use it directly
    const collection = Array.isArray(data) ? data : data.collection;

    if (!Array.isArray(collection)) {
      console.error("Invalid response format for helpers:", data);
      return [];
    }

    return collection.filter((item) => item.Name && item.Code);
  } catch (error) {
    console.error("Error fetching helpers:", error);
    return [];
  }
}

export const fetchUnitMachines = async () => {
  try {
    const response = await fetch(`${BASE_URL}Production_unitmachine/`);
    const data = await response.json();

    console.log("API Response for Unit Machines:", data);

    // If the response is an array, use it directly; otherwise, use `collection`
    const collection = Array.isArray(data) ? data : data.collection;

    if (!Array.isArray(collection)) {
      console.error("Invalid response format for unit machines:", data);
      return [];
    }

    return collection.filter((item) => item.WorkCenterCode && item.WorkCenterName);
  } catch (error) {
    console.error("Error fetching unit/machines:", error);
    return [];
  }
};


export const fetchContractors = async () => {
  try {
    const response = await fetch(`${BASE_URL}Production_contractor/`);
    const data = await response.json();

    console.log("API Response for Contractors:", data);

    const collection = Array.isArray(data) ? data : data.collection;

    if (!Array.isArray(collection)) {
      console.error("Invalid response format for contractors:", data);
      return [];
    }

    return collection.filter((item) => item.ContractorName);
  } catch (error) {
    console.error("Error fetching contractors:", error);
    return [];
  }
};



export const fetchOperators = async () => {
  try {
    const response = await fetch(`${BASE_URL}Production_operators/`);
    const data = await response.json();

    console.log("API Response for Operators:", data);

    const collection = Array.isArray(data) ? data : data.collection;

    if (!Array.isArray(collection)) {
      console.error("Invalid response format for operators:", data);
      return [];
    }

    return collection.filter((item) => item.Name && item.Code);
  } catch (error) {
    console.error("Error fetching operators:", error);
    return [];
  }
};



export const fetchSupervisors = async () => {
  try {
    const response = await fetch(`${BASE_URL}Production_supervisor/`);
    const data = await response.json();

    console.log("API Response for Supervisors:", data);

    const collection = Array.isArray(data) ? data : data.collection;

    if (!Array.isArray(collection)) {
      console.error("Invalid response format for supervisors:", data);
      return [];
    }

    return collection.filter((item) => item.Name && item.Code);
  } catch (error) {
    console.error("Error fetching supervisors:", error);
    return [];
  }
};



export const fetchShifts = async () => {
  try {
    const response = await fetch(`${BASE_URL}Production_shift/`);
    const data = await response.json();

    console.log("API Response for Shifts:", data);

    const collection = Array.isArray(data) ? data : data.collection;

    if (!Array.isArray(collection)) {
      console.error("Invalid response format for shifts:", data);
      return [];
    }

    return collection.filter((item) => item.Shift_Name && item.Shift_From && item.Shift_Till);
  } catch (error) {
    console.error("Error fetching shifts:", error);
    return [];
  }
};




export const fetchProductionEntries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/production-entries/`);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching production entries:", error);
    return []; // Return empty array if error occurs
  }
};

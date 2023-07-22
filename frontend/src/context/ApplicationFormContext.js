import React from 'react';

export const ApplicationFormContext = React.createContext();

export const ApplicationFormContextProvider = ({
  children
}) => {
  
  const today = new Date();
  const defaultDateValue = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const [newApplicationRecord, setNewApplicationRecord] = React.useState({
    date: defaultDateValue,
  });

  const metadataLoader = {
    getCompanies: () => {
      const p = new Promise([
        {
          name: "123",
          title: "Meta",
        },
        {
          name: "567",
          title: "Amazon",
        },
      ]);
      
    },
    getSatusValues: () => {
      const p = new Promise([
        {
          name: "0",
          title: "Applied",
        },
        {
          name: "1",
          title: "Pending",
        },
        {
          name: "2",
          title: "Under Review",
        },
        {
          name: "3",
          title: "In Progress",
        },
        {
          name: "4",
          title: "Accepted",
        },
        {
          name: "5",
          title: "Rejected",
        },
      ]);
      
    },

    getJobPositions: () => {
      const p = new Promise([
        {
          name: "123",
          title: "Software Developer",
        },
        {
          name: "567",
          title: "Backend Developer",
        },
        {
          name: "333",
          title: "Software Engineer",
        },
        {
          name: "444",
          title: "Frontend Engineer",
        },
        {
          name: "555",
          title: "Salesforce Developer",
        },
      ]);
    }
  };

  const formFieldChangeHandler = {
    handleSetCompany : (companyObj) => {
      if (companyObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          company: companyObj
        })
      }
    },
    handleSetJobPosition : (positionObj) => {
      if (positionObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          position: positionObj
        })
      }
    },
    handleSetDate : (dateValueObj) => {
      if (dateValueObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          date: dateValueObj
        })
      }
    },
    handleSetStatus : (statusObj) => {
      if (statusObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          status: statusObj
        })
      }
    },
  };

  return (
    <ApplicationFormContext.Provider value={{
      setCompany: formFieldChangeHandler.handleSetCompany,
      setJobPosition: formFieldChangeHandler.handleSetJobPosition,
      setApplicationDate: formFieldChangeHandler.handleSetDate,
      setApplicationStatus: formFieldChangeHandler.handleSetStatus,
      defaultDateValue
    }}>
    {children}
    </ApplicationFormContext.Provider>
  );
}; 
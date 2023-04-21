import React, { useState } from "react";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { getToken } from "../services/LocalStorage";
import { useGetAllEnquiryQuery } from "../services/profile";
import CircularProgress from "@mui/material/CircularProgress";


const EnquireForm = () => {
  const [search, setSearch] = useState()

  const token = getToken("token");
  console.log(token, "102");

  const { data, isLoading } = useGetAllEnquiryQuery(token);
  if (data) {
    console.log(data, "110");
  }

  const columns = [
    {
      name: "service",
      selector: (row) => row?.service?.map((value) => value),
      shortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      shortable: true,
    },
  ];


  let result = data?.filter(
    user => user?.fname && user?.fname?.toLowerCase()?.includes(search?.toLowerCase()) || user?.email && user?.email?.toLowerCase()?.includes(search?.toLowerCase())

  )

  return (
    <>
      {isLoading && <CircularProgress color="secondary" />}

      <div className=" w-full">
        <DataTable
          // className="text-black"
          title="Enquiry" //This is Title
          columns={columns} // Columns of the table
          data={search ? result : data} //Data From BackEnd
          pagination
          fixedHeader
          highlightOnHover

          fixedHeaderScrollHeight="450px"
          // selectableRowsHighlight
          // onSelectedRowsChange={handleChange}
          // actions={
          //   <button className="px-4 py-2 rounded bg-black/70 m-3 text-sm text-white">
          //     Export
          //   </button>
          // }
          subHeader
          subHeaderComponent={
            <input
              className="border-b-2  focus:outline-none hover:border-b-white shadow p-2 focus:bg-gray-900 focus:placeholder:text-white focus:text-white focus:px-4 duration-200 focus:rounded-md border placeholder:text-sm rounded-sm"
              placeholder="Search ... name, age, email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        // subHeaderAlign="right"
        // pointerOnHover
        // theme="dark"
        // // theme="solarized"

        // expandableRows
        // expandableRowsComponent={ExpandedComponent}
        // expandableRowDisabled={rowPreDisabled} // PreDisabled of non active persion
        // selectableRows
        // selectableRowDisabled={rowDisabledCriteria} // Disable Row whose fess is > 5000
        // conditionalRowStyles={conditionalRowStyles} // Higlite whose fee is less then 5000
        // customStyles={tableCustomStyles} //Chagne Loyout of Table
        />
      </div>
    </>
  );
};

export default EnquireForm;

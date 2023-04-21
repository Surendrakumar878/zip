import React, { useState } from "react";
import { useGetAllAppointmentQuery } from "../services/profile";
import { getToken } from "../services/LocalStorage";
import CircularProgress from "@mui/material/CircularProgress";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { useGetAllContactUsQuery } from "../services/profile";

const ContactUsData = () => {
    const [search, setSearch] = useState()
    const token = getToken("token");
    const { data, isLoading } = useGetAllContactUsQuery(token);
    console.log(data, "10");

    const columns = [
        {
            name: "First Name",
            selector: (row) => row.fname,
            shortable: true,
        },
        {
            name: "Last Name",
            selector: (row) => row.lname,
            shortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            shortable: true,
        },

        {
            name: "Phone Number",
            selector: (row) => row.phone,
            shortable: true,
        },
        {
            name: "Description",
            selector: (row) => row.description,
            shortable: true,
        },

    ];

    let result = data?.filter(
        user => user?.fname && user?.fname?.toLowerCase()?.includes(search?.toLowerCase()) || user?.email && user?.email?.toLowerCase()?.includes(search?.toLowerCase()) || user?.phone && user?.phone?.toLowerCase()?.includes(search?.toLowerCase())

    )


    return (
        <>
            <div >
                {isLoading && <CircularProgress color="secondary" />}
                <div className=" md:w-11/12 border w-full   ">
                    <DataTable
                        className="text-black "
                        title="Appointment" //This is Title
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
            </div>
        </>
    )
}

export default ContactUsData

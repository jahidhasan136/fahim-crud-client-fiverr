import { useEffect, useRef, useState } from "react";
import DataContent from "../DataContent/DataContent";
import { useLoaderData } from "react-router-dom";


const EditData = () => {

    const [data, setData] = useState([]);
    const [control, setControl] = useState(false);
    const {totalData} = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(5)
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     fetch('https://fahim-crud-server-1qqssc0wc-nurmorshed7987-gmailcom.vercel.app/addData')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [control])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://fahim-crud-server-1qqssc0wc-nurmorshed7987-gmailcom.vercel.app/addData?search=${search}&page=${currentPage}&limit=${itemPerPage}`);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    },[currentPage, itemPerPage, control, search])


    const totalPages = Math.ceil(totalData / itemPerPage)
    console.log(totalPages)

    const pageNumbers = [...Array(totalPages).keys()];

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }


    return (
        <>
            <div>
                <h1 className="text-3xl font-bold">This is edit page</h1>
                <p>{data.length}</p>
                <div className="my-10 flex justify-end">
                    {/* <FilterData></FilterData> */}
                    <input ref={searchRef} onChange={handleSearch} className="border rounded-md border-fuchsia-400 px-3 py-2" type="text"  />
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-md">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Address</th>
                                    <th>Product Serial No</th>
                                    <th>Product Model No</th>
                                    <th>Product Problem</th>
                                    <th>Issued Date</th>
                                    <th>Tentative Date</th>
                                    <th>Product Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((jvcoData, index) => <DataContent key={jvcoData._id} jvcoData={jvcoData} index={index} control={control} setControl={setControl}></DataContent>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <p>{currentPage}</p>
                {
                    pageNumbers.map(number => <button className="px-4 bg-yellow-300 rounded-md mr-4" key={number}
                    onClick={() => setCurrentPage(number)}
                    >{number + 1}</button>)
                }
            </div>
        </>
    );
};

export default EditData;
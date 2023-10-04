import { useEffect, useRef, useState } from "react";
import DataContent from "../DataContent/DataContent";
import { useLoaderData } from "react-router-dom";


const EditData = () => {

    const [data, setData] = useState([]);
    const [control, setControl] = useState(false);
    const { totalData } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10)
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://fahim-crud-server-ilhvxjxko-nurmorshed7987-gmailcom.vercel.app/addData?search=${search}&page=${currentPage}&limit=${itemPerPage}`);
            const data = await response.json();
            setData(data);
            setLoading(false)
        }
        fetchData();
    }, [currentPage, itemPerPage, control, search])


    const totalPages = Math.ceil(totalData / itemPerPage)

    const pageNumbers = [...Array(totalPages).keys()];

    const handleSearch = () => {
        const searchTerms = searchRef.current.value.split(' ');
        setSearch(searchTerms.join(' '));
    };

    return (
        <>
            {
                isLoading ?
                    <p className="text-center text-7xl text-slate-400 mt-10">Loading....</p>
                    :
                    <>
                        <div className="container">
                            <div className="my-10 flex justify-end">
                                <input placeholder="search your data ..." ref={searchRef} onChange={handleSearch} className="border rounded-md px-3 py-2" type="text" />
                            </div>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table table-md">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Name</th>
                                                <th>Number</th>
                                                <th>Address</th>
                                                <th>Product Serial No</th>
                                                <th>Product Model No</th>
                                                <th>Product Problem</th>
                                                <th>Issued Date</th>
                                                <th>Tentative Date</th>
                                                <th>Day Left</th>
                                                <th>Live Status</th>
                                                <th>Product Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((jvcoData, index) => <DataContent key={jvcoData?._id} jvcoData={jvcoData} index={index} control={control} setControl={setControl}></DataContent>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="container flex justify-end my-2">
                            {
                                pageNumbers?.map(number => <button className="px-4 bg-yellow-300 rounded-md mr-2" key={number}
                                    onClick={() => setCurrentPage(number)}
                                >{number + 1}</button>)
                            }
                        </div>
                    </>
            }
        </>
    );
};

export default EditData;
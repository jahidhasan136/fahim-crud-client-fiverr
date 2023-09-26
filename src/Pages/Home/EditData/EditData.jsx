import { useEffect, useState } from "react";
import DataContent from "../DataContent/DataContent";
import FilterData from "../FilterData/FilterData";
import { useLoaderData } from "react-router-dom";


const EditData = () => {

    const [data, setData] = useState([]);
    const [control, setControl] = useState(false);
    const {totalData} = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(2)

    useEffect(() => {
        fetch('http://localhost:5000/addData')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [control])

    const totalPages = Math.ceil(totalData / itemPerPage)
    console.log(totalPages)

    const pageNumbers = [...Array(totalPages).keys()];


    return (
        <>
            <div>
                <h1 className="text-3xl font-bold">This is edit page</h1>
                <p>{data.length}</p>
                <div className="my-10 flex justify-end">
                    <FilterData></FilterData>
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
                    >{number}</button>)
                }
            </div>
        </>
    );
};

export default EditData;
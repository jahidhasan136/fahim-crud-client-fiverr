import { useEffect, useState } from "react";
import DataContent from "../DataContent/DataContent";


const EditData = () => {

    const [data, setData] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/addData')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [control])

    return (
        <div>
            <h1 className="text-3xl font-bold">This is edit page</h1>
            <p>{data.length}</p>
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
    );
};

export default EditData;
import { useForm } from "react-hook-form";
import { FaUserEdit } from 'react-icons/fa'
import { Link } from "react-router-dom";

const AddData = () => {
    const {
        register,
        handleSubmit, reset
    } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/addData',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        reset()
    }
    return (
        <div>
            <h1 className="text-3xl font-bold">This is the add data page</h1>
            <div className="flex justify-end">
                <Link to='/editData'><button className="bg-amber-400 px-5 py-2 rounded-md flex items-center gap-2 font-medium">Edit Data <FaUserEdit></FaUserEdit></button></Link>
            </div>
            <div className="mt-24">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="">
                            <label>
                                <p>Full Name</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your name" type="text" {...register("name", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Mobile Number</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your number" type="text" {...register("number", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Address</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your address" type="text" {...register("address", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Product Serial No</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your serial no" type="text" {...register("productSerialNo", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Product Model No</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your model" type="text" {...register("productModelNo", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Issued Date</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" type="date" {...register("issueDate", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Tentative Date</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" type="date" {...register("tentativeDate", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Product Problem</p>
                            </label>
                            <select className="border rounded-md pl-4 py-2 w-[250px]" {...register("productProblem", { required: true })}>
                                <option value="panelProblem">Panel Problem</option>
                                <option value="panelBroken">Panel Broken</option>
                                <option value="pcbBurned">Pcb Burned</option>
                                <option value="pcbProcessor">Pcb Processor Problem</option>
                                <option value="panelBlind">Panel Blind</option>
                                <option value="soundBox">Sount Box & IC</option>
                                <option value="softwareProblem">Software Problem</option>
                            </select>
                        </div>
                        <div className="">
                            <label>
                                <p>Product Status</p>
                            </label>
                            <select className="border rounded-md pl-4 py-2 w-[250px]" {...register("productStatus", { required: true })}>
                                <option value="recieved">Recieved</option>
                                <option value="delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                    <input className="cursor-pointer bg-slate-400 px-10 py-3 rounded-md mt-5 text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddData;
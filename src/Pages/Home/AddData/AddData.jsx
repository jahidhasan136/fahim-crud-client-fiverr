import { useForm } from "react-hook-form";
import { FaUserEdit } from 'react-icons/fa'
import { Link } from "react-router-dom";

const AddData = () => {
    const {
        register,
        handleSubmit, reset
    } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/addData', {
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
        <div className="container">
            <div className="flex justify-end">
                <Link to='/editData'><button className="bg-amber-400 px-5 py-3 rounded-md flex items-center gap-2 font-medium text-white text-lg">Edit Data <FaUserEdit></FaUserEdit></button></Link>
            </div>
            <div className="mt-12 w-4/5 mx-auto shadow-md px-8">
                <h2 className="font-bold text-2xl pt-5">Entry to database</h2>
                <div className="w-10 h-[2px] bg-[#00B6B0] mb-5"></div>
                <p className="font-medium uppercase">Product Details</p>
                <form onSubmit={handleSubmit(onSubmit)} className="pb-8 pt-4">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Full Name</p>
                            </label>
                            <input className="border rounded-md pl-4 py-3 w-full" placeholder="Enter your name" type="text" {...register("name", { required: true })} />
                        </div>
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Mobile Number</p>
                            </label>
                            <input className="border rounded-md pl-4 py-3 w-full" placeholder="Enter your number" type="text" {...register("number", { required: true })} />
                        </div>
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Address</p>
                            </label>
                            <input className="border rounded-md pl-4 py-3 w-full" placeholder="Enter your address" type="text" {...register("address", { required: true })} />
                        </div>
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Product Serial No</p>
                            </label>
                            <input className="border rounded-md pl-4 py-3 w-full" placeholder="Enter your serial no" type="text" {...register("productSerialNo", { required: true })} />
                        </div>
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Product Model No</p>
                            </label>
                            <input className="border rounded-md pl-4 py-3 w-full" placeholder="Enter your model" type="text" {...register("productModelNo", { required: true })} />
                        </div>
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Issued Date</p>
                            </label>
                            <input className="border rounded-md pl-4 py-3 w-full" type="date" {...register("issueDate", { required: true })} />
                        </div>
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Tentative Date</p>
                            </label>
                            <input className="border rounded-md pl-4 py-3 w-full" type="date" {...register("tentativeDate", { required: true })} />
                        </div>
                        <div className="">
                            <label className="font-bold">
                                <p className=" mb-2">Product Problem</p>
                            </label>
                            <select className="border rounded-md pl-4 py-3 w-full" {...register("productProblem", { required: true })}>
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
                            <label className="font-bold">
                                <p className=" mb-2">Product Status</p>
                            </label>
                            <select className="border rounded-md pl-4 py-3 w-full" {...register("productStatus", { required: true })}>
                                <option value="recieved">Recieved</option>
                                <option value="delivered">Delivered</option>
                                <option value="Still Working">Still Working</option>
                                <option value="ok">Ok</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <input className="cursor-pointer bg-[#00B6B0] hover:bg-[#00b69e] transition-all duration-500 px-10 py-3 rounded-md mt-5 text-white" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddData;
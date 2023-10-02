import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
    const loader = useLoaderData();
    console.log(loader)
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/addData/${loader._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
    }

    return (
        <div className="mt-24">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="">
                            <label>
                                <p>Full Name</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your name" type="text" defaultValue={loader?.name} {...register("name", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Mobile Number</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your number" type="text" defaultValue={loader?.number} {...register("number", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Address</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your address" type="text" defaultValue={loader?.address} {...register("address", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Product Serial No</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your serial no" type="text" defaultValue={loader?.productSerialNo} {...register("productSerialNo", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Product Model No</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" placeholder="Enter your model" type="text" defaultValue={loader?.productModelNo} {...register("productModelNo", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Issued Date</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" type="date" defaultValue={loader?.issueDate} {...register("issueDate", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Tentative Date</p>
                            </label>
                            <input className="border rounded-md pl-4 py-2 w-[250px]" type="date" defaultValue={loader?.tentativeDate} {...register("tentativeDate", { required: true })} />
                        </div>
                        <div className="">
                            <label>
                                <p>Product Problem</p>
                            </label>
                            <select className="border rounded-md pl-4 py-2 w-[250px]" defaultValue={loader?.productProblem} {...register("productProblem", { required: true })}>
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
                            <select className="border rounded-md pl-4 py-2 w-[250px]" 
                            defaultValue={loader?.productStatus} 
                            {...register("productStatus", { required: true })}>
                                <option value="recieved">Recieved</option>
                                <option value="delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                    <input className="cursor-pointer bg-slate-400 px-10 py-3 rounded-md mt-5 text-white" type="submit" />
                </form>
            </div>
    );
};

export default UpdateData;
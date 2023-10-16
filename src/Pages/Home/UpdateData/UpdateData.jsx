import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
    const loader = useLoaderData();
    console.log(loader)
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = (data) => {
        fetch(`https://fahim-crud-server-3bt9ltv7v-nurmorshed7987-gmailcom.vercel.app/addData/${loader._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            toast.success('Update your information')
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-5">
                    <div className="">
                        <label>
                            <p>Full Name</p>
                        </label>
                        <input className="border rounded-md px-4 py-3 w-full" placeholder="Enter your name" type="text" defaultValue={loader?.name} {...register("name", { required: true })} />
                    </div>
                    <div className="">
                        <label>
                            <p>Mobile Number</p>
                        </label>
                        <input className="border rounded-md px-4 py-3 w-full" placeholder="Enter your number" type="text" defaultValue={loader?.number} {...register("number", { required: true })} />
                    </div>
                    <div className="">
                        <label>
                            <p>Address</p>
                        </label>
                        <input className="border rounded-md px-4 py-3 w-full" placeholder="Enter your address" type="text" defaultValue={loader?.address} {...register("address", { required: true })} />
                    </div>
                    <div className="">
                        <label>
                            <p>Product Serial No</p>
                        </label>
                        <input className="border rounded-md px-4 py-3 w-full" placeholder="Enter your serial no" type="text" defaultValue={loader?.productSerialNo} {...register("productSerialNo", { required: true })} />
                    </div>
                    <div className="">
                        <label>
                            <p>Product Model No</p>
                        </label>
                        <input className="border rounded-md px-4 py-3 w-full" placeholder="Enter your model" type="text" defaultValue={loader?.productModelNo} {...register("productModelNo", { required: true })} />
                    </div>
                    <div className="">
                        <label>
                            <p>Issued Date</p>
                        </label>
                        <input className="border rounded-md px-4 py-3 w-full" type="date" defaultValue={loader?.issueDate} {...register("issueDate", { required: true })} />
                    </div>
                    <div className="">
                        <label>
                            <p>Tentative Date</p>
                        </label>
                        <input className="border rounded-md px-4 py-3 w-full" type="date" defaultValue={loader?.tentativeDate} {...register("tentativeDate", { required: true })} />
                    </div>
                    <div className="">
                        <label>
                            <p>Product Problem</p>
                        </label>
                        <select className="border rounded-md px-4 py-3 w-full" defaultValue={loader?.productProblem} {...register("productProblem", { required: true })}>
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
                        <select className="border rounded-md px-4 py-3 w-full"
                            defaultValue={loader?.productStatus}
                            {...register("productStatus", { required: true })}>
                            <option value="recieved">Recieved</option>
                            <option value="delivered">Delivered</option>
                            <option value="Still Working">Still Working</option>
                            <option value="ok">Ok</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-slate-400 px-10 py-3 rounded-md mt-5 text-white">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateData;
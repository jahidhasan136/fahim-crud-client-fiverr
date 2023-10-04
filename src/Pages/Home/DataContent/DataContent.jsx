import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const DataContent = ({ jvcoData, index, control, setControl }) => {
    const {
        _id,
        name,
        number,
        address,
        productSerialNo,
        productModelNo,
        productProblem,
        productStatus,
        issueDate,
        tentativeDate
    } = jvcoData;

    // Calculate the number of days left
    const issueDateObj = new Date(issueDate);
    const tentativeDateObj = new Date(tentativeDate);
    const timeDifference = tentativeDateObj - issueDateObj;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Map productStatus values to new values
    const updatedProductStatus = (productStatus) => {
        if (daysLeft === 0) {
            return <p className='bg-red-500 text-white pl-2 rounded-full'>Expired</p>;
        } else if(daysLeft === 5){
            return 'Expired Soon'
        }
        switch (productStatus) {
            case 'recieved':
                return 'Active';
            case 'delivered':
                return 'Done';
            default:
                return productStatus;
        }
    };

    const handleDelete = (_id) => {
        fetch(`https://fahim-crud-server-ilhvxjxko-nurmorshed7987-gmailcom.vercel.app/addData/${_id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setControl(!control);
            });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>{address}</td>
            <td>{productSerialNo}</td>
            <td>{productModelNo}</td>
            <td>{productProblem}</td>
            <td>{issueDate}</td>
            <td>{tentativeDate}</td>
            <td>{daysLeft}</td>
            <td>{updatedProductStatus(productStatus)}</td>
            <td>{productStatus}</td>
            <td className='flex items-center justify-between'>
                <Link to={`/home/${_id}`}>
                    <FaEdit className='cursor-pointer text-lg text-green-500'></FaEdit>
                </Link>
                <MdDelete onClick={() => handleDelete(_id)} className='cursor-pointer text-lg text-red-500'></MdDelete>
            </td>
        </tr>
    );
};

export default DataContent;

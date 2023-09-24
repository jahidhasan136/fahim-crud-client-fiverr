import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

const DataContent = ({ jvcoData, index, control, setControl }) => {


    const { _id, name, number, Address, productSerialNo, productModelNo, productProblem, productStatus, issueDate, tentativeDate } = jvcoData;
    
    const handleDelete = _id => {
        fetch(`http://localhost:5000/addData/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setControl(!control)
        })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>{Address}</td>
            <td>{productSerialNo}</td>
            <td>{productModelNo}</td>
            <td>{productProblem}</td>
            <td>{issueDate}</td>
            <td>{tentativeDate}</td>
            <td>{productStatus}</td>
            <td className='flex items-center justify-between'>
                <FaEdit className='cursor-pointer'></FaEdit>
                <MdDelete onClick={() => handleDelete(_id)} className='cursor-pointer'></MdDelete>
            </td>
        </tr>
    );
};

export default DataContent;
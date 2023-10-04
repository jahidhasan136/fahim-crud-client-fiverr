import { Link } from 'react-router-dom';
import logo from './images/logo.png'

const Header = () => {
    return (
        <div className='shadow-lg mb-[60px]'>
            <div className='flex justify-between items-center container py-5'>
                <Link to='/'>
                    <img className='w-[100px]' src={logo} alt="" />
                </Link>
                <div className='flex items-center gap-5'>
                    <Link to='/' className='font-bold text-xl uppercase hover:text-[#00B6B0] transition-all duration-500'>Home</Link>
                    <Link to='/' className='font-bold text-xl uppercase hover:text-[#00B6B0] transition-all duration-500'>Webos Entry</Link>
                    <Link to='/' className='font-bold text-xl uppercase hover:text-[#00B6B0] transition-all duration-500'>Dealer/Customer Token</Link>
                    <Link to='/' className='font-bold text-xl uppercase hover:text-[#00B6B0] transition-all duration-500'>About Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
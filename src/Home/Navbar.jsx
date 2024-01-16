import heading from '../images/headline/headling.png'

const Navbar = () => {
    return (
        <nav className='lg:mx-20 flex justify-between items-center mt-10'>
            <div>
                <img src={heading} alt="" />
            </div>
            <div className='flex text-lg'>
                <p className='mx-5'>Home</p>
                <p className='mx-5'>Flashcard</p>
                <p className='mx-5'>Contact</p>
                <p className='mx-5'>FAQ</p>
                <p className='mx-5 px-5 py-2 bg-bl'>Login</p>
            </div>
        </nav>
    );
};

export default Navbar;
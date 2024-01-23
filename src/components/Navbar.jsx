import '../css/Navbar.css'

function Navbar() {
    return (
        <nav className='nav'>
            <div></div>
            <ul className='nav_list'>
                {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                    <li className="nav_item" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='navbar_menu'>
            </div>
        </nav>
    );
}

export default Navbar;
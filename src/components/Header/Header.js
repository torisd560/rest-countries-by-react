import './Header.css'

const Header = () => {
    return (
        <div className= 'container'>
            <nav className ='navbar '>
                <div  className = 'menu'>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                </div>
                <div>
                <input placeholder = 'Search country by name...........' type="text"/>
                <button className ='search-btn'>Search</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
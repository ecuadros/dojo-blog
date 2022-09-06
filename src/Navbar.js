const Navbar = () => {
    return (  
        <nav className="navbarx">
            <h1>The dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New blog</a>
            </div>
        </nav>
    );
}

/* const Navbarz = () => {
    return (  
        <nav className="navbarz">
            <h1>Titulo Z</h1>
            <div className="links">
                <a href="/">Home Z</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New blog</a>
            </div>
        </nav>
    );
} */
export default Navbar;
//export {Navbarz};
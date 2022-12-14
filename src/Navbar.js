const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>My To Do List</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>Contact</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;
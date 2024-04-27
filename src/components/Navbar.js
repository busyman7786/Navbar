import "./Navbar.css"
const Navbar = () => {
return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Requirements</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
        

      </ul>
     
        <button class="btn nav-btn" type="submit">Contact</button>

    </div>
  </div>
</nav> 

    </>
)
}
export default Navbar
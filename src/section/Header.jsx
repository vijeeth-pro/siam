import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <div className='nav-headWithLogo'>
            <img className='logo' src='https://siamcomputing.com/wp-content/uploads/2021/09/siam-computing-trans.png' alt='logo' />
            <button class='nav-bookBtn'>Book a free Call</button>

        </div>
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span class="navbar-toggler-icon"></span> */}
        <img src="https://siamcomputing.com/wp-content/uploads/2021/09/Siam_hamburger.png" alt='toggle'/>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header
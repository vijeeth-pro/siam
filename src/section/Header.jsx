import { CaretDownOutlined, CloseOutlined } from '@ant-design/icons'
import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

function Header() {
  const {dynamicWidth, Y} = useWindowSize()
  const [showMenu, setShowMenu] = React.useState(false)
  const [navLinks] = React.useState(['Service', 'Skills', 'About', 'Resource'])



  return (
    <section className={`home-screen`}>
      <header className={`${Y >100 ? 'shadow' : ''}`}>
      <div className={`header ${Y >= 100 ? 'sticky' : ''}`}>
        <img src='https://siamcomputing.com/wp-content/uploads/2021/09/siam-computing-trans.png' alt='logo'/>
        
        <nav className='desktop-nav'>
          {dynamicWidth > 1200 && <ul>
            {navLinks.map((link, i) => <li key={i}><a href='#'>{link} <CaretDownOutlined  style={{paddingLeft: 10}}/></a></li>)}            
          </ul>}
          
          <button className='book-btn'>Book a free call</button>

          {dynamicWidth < 1200 && <button className='menu-btn' onClick={() => setShowMenu(true)}></button>}
          {showMenu && dynamicWidth < 1200 && <div className='menu' onClick={() => setShowMenu(false)}>
            <div className='menu-box' onClick={(e) => e.stopPropagation()}>
              <nav className='mobile-nav'>
                <ul>
                  <li onClick={() => setShowMenu(false)}><a><CloseOutlined  style={{paddingRight: 10, color: '#cf2e2e'}}/> Close </a></li>
                  {navLinks.map((link, i) => <li key={i}><a href='#'>{link} <CaretDownOutlined  style={{paddingLeft: 10}}/></a></li>)}
                </ul>
              </nav>
            </div>
            </div>}
        </nav>
      </div>
      </header>
    </section>
  )
}

export default Header



//Bootstarp Navbar

// import React from 'react'

// function Header() {
//   return (
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//     <div class="container-fluid">
//         <div className='nav-headWithLogo'>
//             <img className='logo' src='https://siamcomputing.com/wp-content/uploads/2021/09/siam-computing-trans.png' alt='logo' />
//             <button class='nav-bookBtn'>Book a free Call</button>

//         </div>
//         <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//         {/* <span class="navbar-toggler-icon"></span> */}
//         <img src="https://siamcomputing.com/wp-content/uploads/2021/09/Siam_hamburger.png" alt='toggle'/>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item">
//             <a class="nav-link disabled">Disabled</a>
//             </li>
//         </ul>
//         </div>
//     </div>
//     </nav>
//   )
// }

// export default Header
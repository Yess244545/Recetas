import React from 'react'

function Footer() {
  return (
    <footer className='text-center w-full absolute bottom-0 left-0 bg-slate-300 '>
        <div className='' >
            <div className=' '>
                <h3 className=''>Cook World</h3>
                <p className=''>Recetas y mas recetas.</p>
            </div>
            
            <div className=''>
                <h3 className=''>Redes Sociales</h3>

                <ul className=''>
                <li className=''>
                    <a href="https://www.facebook.com" target="_blank"><i className="bx bxl-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank"><i className='bx bxl-instagram'></i></a>
                </li>
                <li>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                </li>
                </ul>
            </div>
        </div>

        <p className='text-center pt-3 border-t-2 border-gray-600 '>
        &copy; 2024, Todos los derechos reservados
        </p>
    </footer>
  )
}

export default Footer
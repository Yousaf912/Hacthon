import style from './Header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    return (
        <div className={`container-fluid`}>
            <div className="container">
                <header className="d-flex align-items-center justify-content-between  mb-4 ">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2 col-1" ><use ></use></svg>
                        <span className=" text-white ">
                            <h2>Unbrew.</h2>
                        </span>
                    </a>
                    <div className='d-none d-md-block col-lg-6 d-xl-5 col-8'>
                        <ul className={`nav nav-pills ${style.lst} `}>
                            <li className="nav-item"><a href="#" className="nav-link text-white " aria-current="page">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-white ">Features</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-white ">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-white ">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-white ">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-white ">Blogs</a></li>
                        </ul>
                    </div>
                    <div className='d-md-none'>
                    <GiHamburgerMenu className='fs-1 text-white'/>
                    </div>
                </header>
            </div>
        </div>
    )
}

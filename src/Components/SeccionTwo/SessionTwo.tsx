
import Header from '../Header/Header'
import style from './SessionTwo.module.css'
import img1 from '../../assets/Screenshot_2024-07-21_182847-removebg-preview.png'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter,FaInstagram ,FaGooglePlusG } from "react-icons/fa";
import Button from '../button/Button';



export default function SessionTwo() {
    return (
        <div className={`${style.main}`}>
            <Header />
            <div className={` ${style.min} container `}>
                <div className="row mt-md-5  pb-5 d-lg-flex justify-content-between" >
                    <div className="col-lg-6 text-white order-2 mt-5 mt-lg-0 order-lg-1">
                        <h1>Boost Personal Productivity</h1>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <div className='btn btn-white'>
                            <button className={`${style.btn1}`}>Start a Project</button>
                            <Button txt={'Call Us for Quiry'}/>
                            
                        </div>
                        <div className={`${style.icn} d-flex fs-5 justify-content-between col-3 m-4`}>
                        <CiFacebook />
                        <FaTwitter />
                        <FaGooglePlusG />
                        <FaInstagram/>

                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src={img1} style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

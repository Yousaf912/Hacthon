
import style from './WhyChooseUs.module.css'
import { TbSettingsCog } from "react-icons/tb";
import { FaUserLock } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import AwosomeWork from '../Awosome work/AwosomeWork';
import Footer from '../Footer/Footer';


export default function WhySchooseUs() {
    return (
        <div className={`${style.main} mt-5 mb-5`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-white mt-5 mb-5 mx-auto text-center">
                        <h6>Why Choose Us</h6>
                        <h2>Easy Management for Your Businesses</h2>
                        <p className='mt-4 text-white'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="col-12 mt-5 flex-wrap d-md-flex justify-content-around">
                    <div className="col-lg-3 col-md-5 shadow-lg bg-white text-center p-4 mb-5 rounded-4">
                        <div className={`mb-3 ${style.crd} text-center border mx-auto `}>
                            <TbSettingsCog className='fs-1 mt-2' />
                        </div>
                        <h5>Easy Management</h5>
                        <p className=' mt-3 text-black'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                    <div className="col-lg-3 col-md-5 shadow-lg bg-white text-center p-4 mb-5 rounded-4">
                        <div className={`mb-3 ${style.crd} text-center border mx-auto `}>
                            <FaUserLock className='fs-1 mt-2' />
                        </div>
                        <h5>Protect your Profile</h5>
                        <p className=' mt-3 text-black'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                    <div className="col-lg-3 col-md-5 shadow-lg bg-white text-center p-4 mb-5 rounded-4">
                        <div className={`mb-3 ${style.crd} text-center border mx-auto `}>
                            <MdSupportAgent className='fs-1 mt-2' />
                        </div>
                        <h5>24/7 Help Support</h5>
                        <p className=' mt-3 text-black'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>

                </div>
            </div>
            <AwosomeWork />
            <Footer/>
        </div>

    )
}

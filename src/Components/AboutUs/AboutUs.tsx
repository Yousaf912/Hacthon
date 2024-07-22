import img1 from '../../assets/bg-2.png'
import Button from '../button/Button'
import style from './About.module.css'

export default function AboutUs() {
    return (
        <div className={` container mt-5 pt-5 pb-5`}>
            <div className={`${style.main} col-lg-3 col-md-4  col-5 text-center mx-auto mt-5`}>
                <h1 className='pb-3'>About Us</h1>
            </div>
            <div className="row mt-5 pt-5 d-md-flex align-items-center justify-content-between">
                <div className="col-md-5">
                    <img src={img1} style={{ width: "100%" }} />
                </div>
                <div className="col-md-7 mb-5">
                    <h2 >Unbrew A Digital Agency Company</h2>
                    <p className='mb-5 mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <Button txt={'More About Us'} />
                </div>
            </div>
        </div>
    )
}

import img1 from '../../assets/work-1.jpg';
import img2 from '../../assets/work-2.jpg';
import img4 from '../../assets/work-4.jpg';
import style from './AwoseomWork.module.css'

export default function AwosomeWork() {
    return (
        <div className="container-fluid pb-5 mt-5 ">
            <div className='col-8 mx-auto text-center mb-5 mt-5 pt-5 pb-5'>
                <h1 style={{color: "blueviolet"}}>Our Awesome Work</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className='d-flex justify-content-around'>


                <div className={`${style.icn} col-2 shadow text-center pb-2`}>
                    <div >
                        <img src={img1} style={{ width: '100%' }} />
                    </div>
                    <p>BRANDING, PRINTING</p>
                    <h6>High Quality Design Concept</h6>
                </div>
                <div className={`${style.icn} col-2 shadow text-center pb-2`}>
                    <div >
                        <img src={img2} style={{ width: '100%' }} />
                    </div>
                    <p>BRANDING, PRINTING</p>
                    <h6>High Quality Design Concept</h6>
                </div>
                <div className={`${style.icn} col-2 shadow text-center pb-2`}>
                    <div >
                        <img src={img1} style={{ width: '100%' }} />
                    </div>
                    <p>BRANDING, PRINTING</p>
                    <h6>High Quality Design Concept</h6>
                </div>
                <div className={`${style.icn} col-2 shadow text-center pb-2`}>
                    <div >
                        <img src={img4} style={{ width: '100%' }} />
                    </div>
                    <p>BRANDING, PRINTING</p>
                    <h6>High Quality Design Concept</h6>
                </div>
            </div>
        </div>
    )
}

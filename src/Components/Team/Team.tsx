import style from './team.module.css'
import img1 from '../../assets/team-1.jpg'
import img2 from '../../assets/team-2.jpg'
import img3 from '../../assets/team-3.jpg'
import img4 from '../../assets/team-4.jpg'


export default function Team() {
  return (
    <div className={` mt-5 pt-5 mb-5 pb-5`}>
        <div className="container">
            <div className="row">
                <div className={`${style.hi} col-md-8 text-center mx-auto mt-5`}>
                    <h6 style={{  color:"#bc6ff1"}}>Out Team</h6>
                    <h2>Our Digital Experts Team</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className={`${style.img} d-flex flex-wrap justify-content-evenly col-12 mt-5`}>
                    <div className="col-lg-2 col-md-6 mt-3 text-center shadow pb-2">
                        <img src={img1}  />
                        <h5 className='mt-3'>Adrian Molises</h5>
                        <p>ceo & Developer Founder</p>
                    </div>
                    <div className="col-lg-2 col-md-6 mt-3 text-center shadow pb-2">
                        <img src={img2}  />
                        <h5 className='mt-3'>Adrian Molises</h5>
                        <p>ceo & Developer Founder</p>
                    </div>
                    <div className="col-lg-2  col-md-6 mt-3 text-center shadow pb-2">
                        <img src={img3}  />
                        <h5 className='mt-3'>Adrian Molises</h5>
                        <p>ceo & Developer Founder</p>
                    </div>
                    <div className="col-lg-2 col-md-6 mt-3 text-center shadow pb-2">
                        <img src={img4}  />
                        <h5 className='mt-3'>Adrian Molises</h5>
                        <p>ceo & Developer Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

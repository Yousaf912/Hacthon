
import style from './service.module.css'
import Button from '../button/Button'
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoCameraReverseOutline } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { TbBulb } from "react-icons/tb";
import { BsFillRocketFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

import img1 from '../../assets/about2.jpg'




export default function Services() {
    const data = [
        {
            title: 'Marketing',
            dis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            icon: <HiOutlineSpeakerphone />
        },
        {
            title: 'SEO',
            dis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            icon: <IoCameraReverseOutline />
        },
        {
            title: 'Ux/Ui Design',
            dis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            icon: <SiMaterialdesignicons />
        },
        {
            title: 'Creative',
            dis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            icon: <TbBulb />
        },
        {
            title: 'Optimization',
            dis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            icon: <BsGraphUpArrow />
        },
        {
            title: 'Business Startegy',
            dis: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            icon: <BsFillRocketFill />
        },
    ]
    return (
        <div className={``}>
            <div className="container">
                <div className={`col-lg-3 col-7 col-sm-5 col-md-4 col-xl-3 text-center mx-auto mt-5 pt-5 ${style.title}`}>
                    <h1 className='position-relative pb-4 ' style={{ borderBottom: '2px solid blueviolet' }}>Our Services</h1>
                </div>
                <div className="row d-lg-flex justify-content-between align-items-center mt-5 mb-5">
                    <div className="col-lg-4 col-md-10 mx-auto">
                        <h6>Our Services</h6>
                        <h1>We Provide A Lot of Cool Services</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <Button txt={'Our Services'} />
                    </div>
                    <div className={`col-lg-8 d-sm-flex flex-wrap justify-content-between mt-5`}>
                        {data.map((val: any, i: any) => {
                            return (
                                <div key={i} className="col-lg-6 col-xl-4 mt-3  col-sm-6 col-md-5 border shadow p-4 text-center">
                                    <div className='border col-5 py-2 rounded-circle bg-secondary-subtle mb-3  mx-auto fs-1' style={{ color: '#bc6ff1' }}>{val.icon}</div>
                                    <h4 className='mb-4'>{val.title}</h4>
                                    <p>{val.dis}</p>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className={`${style.cont} col-md-10 shadow-lg  mt-5 mb-5 mx-auto d-flex justify-content-between`}>
                    <div className='col-2'>
                        <img src={img1} style={{ width: '100%' }} />
                    </div>
                    <div className="col-2">
                        <h1>400+</h1>
                        <p>Projects Done</p>
                    </div>
                    <div className="col-2">
                        <h1>346+</h1>
                        <p>OPTIMIZE SITES</p>
                    </div>
                    <div className="col-2">
                        <h1>654+</h1>
                        <p>COFFEE CUPS</p>
                    </div>
                    <div className="col-2">
                        <h1>987+</h1>
                        <p>HAPPY PEOPLE</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

import React from 'react';
import portfolioImage from '../../assets/images/portfolio-image.png';
import { BsArrowDownCircle } from 'react-icons/bs';
import { MdMarkEmailRead, MdSchool } from 'react-icons/md';
import HTML5Icon from '../../assets/icons/html-5.png';
import CSS3Icon from '../../assets/icons/css3.png';
import JsIcon from '../../assets/icons/js.png';
import ReactIcon from '../../assets/icons/react.png';
import ExpressJsIcon from '../../assets/icons/expressjs-icon.png';
import MongodbIcon from '../../assets/icons/mongodb.png';

const MyPortfolio = () => {

    const projects = [
        {
            id: 1,
            name: "Auto Ment",
            description: "This is a website for inventory management, which will help to manage all inventories",
            img: "https://i.ibb.co/0MJPGB5/AutoMent.png",
            link: "https://automent-4fd77.web.app/"
        },
        {
            id: 2,
            name: "Traveeel",
            description: "Traveeel is a website for passionate travelers. Who want to travel all over the world.",
            img: "https://i.ibb.co/JBPvkg1/Traveeel.png",
            link: "https://traveeel-7ce5d.web.app/"
        },
        {
            id: 3,
            name: "Coin Kinbo",
            description: "This is a coin buying website where user can buy coin whatever they want",
            img: "https://i.ibb.co/8MQ96Mw/Coin-Kinbo.png",
            link: "https://coin-kinbo.web.app/"
        }
    ]

    return (
        <section className='px-4 lg:px-20 my-10'>
            <div>
                <article className='grid lg:grid-cols-2 items-center'>
                    {/* about me  */}
                    <div className='order-2 lg:order-1'>
                        <h1 className='text-3xl lg:text-5xl font-serif'>
                            Hello, My name is
                            <br />
                            <span className='font-bold text-4xl lg:text-6xl'>Sajeeb Das Shuvo</span>
                        </h1>
                        <div className='my-5 text-lg'>
                            <p className='flex items-center'><span className='text-xl mr-2'><MdMarkEmailRead /></span>  hellosdshuvo@gmail.com</p>
                            <p className='flex items-center'><span className='text-xl mr-2'><MdSchool /></span>  Hon's 3rd Year, National University</p>
                        </div>
                        <div className='mb-8'>
                            <p className='uppercase font-bold'>List of Technologies : </p>
                            {/* icons  */}
                            <div className='flex flex-wrap gap-5 my-3'>
                                <div className='border border-primary rounded-full p-2 w-12 h-12'>
                                    <img src={HTML5Icon} alt="" />
                                </div>
                                <div className='border border-primary rounded-full p-2 w-12 h-12'>
                                    <img src={CSS3Icon} alt="" />
                                </div>
                                <div className='border border-primary rounded-full p-2 w-12 h-12'>
                                    <img src={JsIcon} alt="" />
                                </div>
                                <div className='border border-primary rounded-full p-2 w-12 h-12'>
                                    <img src={ReactIcon} alt="" />
                                </div>
                                <div className='border border-primary rounded-full p-2 w-12 h-12'>
                                    <img src={ExpressJsIcon} alt="" />
                                </div>
                                <div className='border border-primary rounded-full p-2 w-12 h-12'>
                                    <img src={MongodbIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <a href='#project' >
                            <button className='btn btn-primary btn-outline'>
                                Recent Projects
                                <span className='ml-3 text-base'><BsArrowDownCircle /></span>
                            </button>
                        </a>
                    </div>
                    {/* image  */}
                    <div className='p-5 lg:p-10 order-1 lg:order-2'>
                        <img src={portfolioImage} alt="" />
                    </div>
                </article>

                {/* projects  */}
                <article className='py-20' id='project'>
                    <div className='text-center'>
                        <h1 className='text-3xl lg:text-4xl font-bold'>My Recent Projects</h1>
                        <p className='mt-4 text-base text-gray-600 md:text-lg'>Here you will get the overview of latest <br className="hidden md:block" /> three projects done by me.</p>
                    </div>
                    <section className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {
                            projects.map(project =>
                                <div key={project.id} className="card max-w-xl bg-white border border-primary shadow-xl">
                                    <figure className="px-5 pt-5">
                                        <img src={project.img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{project.name}</h2>
                                        <p>{project.description}</p>
                                        <div className="card-actions mt-3">
                                            <a href={project.link} target="_blank" rel='noreferrer' role="button" className="btn btn-primary px-10">Visit Project</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                </article>
            </div>
        </section>
    );
};

export default MyPortfolio;
import React from 'react'

const Projects = () => {
  return (
    <>
        <h1 className='text-center text-light py-3'>Projects</h1>
        <div className="container pt-3 d-flex justify-content-center" >
            
        <div className="d-flex justify-content-center row text-center">
            <div className="col services pb-3 me-5">
            <div className="card" style={{width: '19rem'}}>
            <img src="past.svg" className="card-img-top img1" alt="Church beautification" />
            <div className="card-body bg-info">
                <h5 className="card-title">No Past Projects Yet</h5>
                <p className="card-text">We will provide interior and exterior design services to enhance the aesthetic appeal of churches, creating a welcoming and beautiful environment for worshippers.
                </p>
                <a href="#" className="btn btn-primary">Past Projects</a>
            </div>
        </div>
            </div>
            <div className="col services pb-3 me-5">
            <div className="card" style={{width: '19rem'}}>
            <img src="s.jpg" className="card-img-top" alt="Musical Instruments" />
            <div className="card-body bg-warning">
                <h5 className="card-title">Pilgrims Gospel Mission</h5>
                <p className="card-text">We will supply churches with essential equipments, including: <br />
                                        - Musical instruments <br />
                                        - Pulpits, altars, Chairs <br />
                                        - Sound and audio-visual systems
                                    </p>
                <a href="#" className="btn btn-primary">Current Projects</a>
            </div>
        </div>
            </div>
            <div className="col services pb-3">
            <div className="card" style={{width: '19rem'}}>
            <img src="future.gif" className="card-img-top img1" alt="Web Design" />
            <div className="card-body bg-info">
                <h5 className="card-title">Waiting On The Lord</h5>
                <p className="card-text">We will create professional websites for churches, enabling them to promote their ministries, share their message online to promote the Gospel of Christ.</p>
                <a href="#" className="btn btn-primary">Future Projects</a>
            </div>
        </div>     
        </div>           
        </div>
        </div>

    </>
  )
}

export default Projects
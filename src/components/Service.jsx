import React from 'react'

const Service = () => {
  return (
    <>  
        <div className="container pt-4">
            <h1 className='text-center text-light py-3'>What We Do</h1>
        <div className="justify-content-center row text-center ps-3">
            <div className="col services pb-3">
            <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body bg-info">
                <h5 className="card-title">Church Beautification</h5>
                <p className="card-text">We will provide interior and exterior design services to enhance the aesthetic appeal of churches, creating a welcoming and beautiful environment for worshippers.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
            </div>
            <div className="col services pb-3">
            <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body bg-warning">
                <h5 className="card-title">Equipments Provision</h5>
                <p className="card-text">We will supply churches with essential equipments, including: <br />
                                        - Musical instruments <br />
                                        - Pulpits, altars, Chairs <br />
                                        - Sound and audio-visual systems
                                    </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
            </div>
            <div className="col services pb-3">
            <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body bg-warning">
                <h5 className="card-title">Website Design</h5>
                <p className="card-text">We will create professional websites for churches, enabling them to promote their ministries, share their message online to promote the Gospel of Christ.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
            </div>
            <div className="col services pb-3">
            <div className="card" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body bg-info">
                <h5 className="card-title">Church Construction</h5>
                <p className="card-text">We will provide comprehensive construction services, from design to completion, for new worship centers or renovation and completion of existing ones.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
            </div>
        </div>
        </div>
        

    </>
  )
}

export default Service
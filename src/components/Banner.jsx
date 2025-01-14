import React from 'react'

const Banner = () => {
  return (
    <>
        <div className="container myBanner pt-4">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="b1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="bb.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="bbb.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        
          <div className="justify-content-center row text-center pt-4">
            <div className="col d-none d-lg-inline">
              <button className='btn btn-warning p-5 btn-lg mb-3'><h1>We</h1></button>
            </div>
            <div className="col d-none d-lg-inline">
            <button className='btn btn-warning pt-5 pb-5  btn-lg mb-3'><h1>Promote</h1></button>
            </div>
            <div className="col d-none d-lg-inline">
            <button className='btn btn-warning p-5 btn-lg mb-3'><h1>God's</h1></button>
            </div>
            <div className="col d-none d-lg-inline">
            <button className='btn btn-warning pt-5 pb-5 btn-lg mb-3'><h1>Kingdom</h1></button>
            </div>
            <div className="col d-none d-lg-inline">
            <button className='btn btn-warning p-5 btn-lg mb-3'><h1>On</h1></button>
            </div>
            <div className="col d-none d-lg-inline">
            <button className='btn btn-warning p-5 btn-lg mb-3'><h1>Earth</h1></button>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Banner
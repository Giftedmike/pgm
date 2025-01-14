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
        </div>
    </>
  )
}

export default Banner
import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='container bg-light rounded pt-4'>
            <h1 className='text-center'>Contact</h1>
            <div className="container row pt-2 h5">
              <div className="col-md-4 pb-4">
                <img src="Jesus.png" className='rounded' alt="" />
              </div>
              <div className="col-md-8">
                <form action="">
                  <div className="row pt-2">
                  <h5 className='text-center pb-5'>If you are ready to receive JESUS as your Lord and Personal SAVIOUR, <br /> Please Fill the Form Below</h5>
                    <div className="col-md-6 pb-3">
                      <label htmlFor="fName" className="form-label">Full Name</label>
                      <input type="text" className="form-control shadow p-2" id="fName" placeholder="Enter Your Full Name" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="pNo" className="form-label">Phone Number</label>
                      <input type="text" className="form-control shadow p-2" id="pNo" placeholder="Enter Your Phone Number" required />
                    </div>
                    <div className="row pt-4">
                      <div className="col-12">
                        <label htmlFor="fName" className="form-label">Full Address</label>
                        <input type="text" className="form-control shadow p-2" id="fName" placeholder="Enter Your Full Name" required />
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col-md-6 pb-3">
                      <label htmlFor="City" className="form-label">City</label>
                      <input type="text" className="form-control shadow p-2" id="City" placeholder="Enter The City You Currently Reside" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="state" className="form-label">State</label>
                      <input type="text" className="form-control shadow p-2" id="state" placeholder="Enter The State You Currently Reside" required />
                    </div>
                  </div>

                  <div className="row pt-4">
                      <div className="col-12">
                        <label htmlFor="prayer" className="form-label">Prayer Request</label>
                        <textarea type="text" className="form-control shadow p-2" id="prayer" placeholder="Enter Your Prayer Request" required />
                      </div>
                  </div>
                  <div className='text-center pt-4 pb-3'>
                    <button className='btn btn-primary p-2'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </>
  )
}

export default Contact
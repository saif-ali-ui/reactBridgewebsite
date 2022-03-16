import React from 'react'

const Help = () => {

    return (
        <div className='container'>
            <h1 className='heading'> Help </h1>

            <div className="row d-flex justify-content-center">
                <div className="col-md-9">
                    <div className="cardxs p-4 mt-3">
                        <h3 className="mt-5 text-center headings-color">Hi! How can we help You?</h3>
                        <div className="d-flex justify-content-center px-5">
                            <div className="search"> <input type="text" className="search-input" placeholder="Search..." name="" /> <a href="#" className="search-icon"> <i className="fa fa-search"></i> </a> </div>
                        </div>
                        <div className="row mt-4 g-1 px-4 mb-5">
                            <div className="col-md-2">
                                <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://i.imgur.com/Mb8kaPV.png" width="50"/>
                                    <div className="text-center mg-text"> <span className="mg-text">Account</span> </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://i.imgur.com/ueLEPGq.png" width="50"/>
                                    <div className="text-center mg-text"> <span className="mg-text">Payments</span> </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://i.imgur.com/tmqv0Eq.png" width="50"/>
                                    <div className="text-center mg-text"> <span className="mg-text">Delivery</span> </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://i.imgur.com/D0Sm15i.png" width="50"/>
                                    <div className="text-center mg-text"> <span className="mg-text">Product</span> </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://i.imgur.com/Z7BJ8Po.png" width="50"/>
                                    <div className="text-center mg-text"> <span className="mg-text">Return</span> </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-inner p-3 d-flex flex-column align-items-center"> <img src="https://i.imgur.com/YLsQrn3.png" width="50"/>
                                    <div className="text-center mg-text"> <span className="mg-text">Guarantee</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
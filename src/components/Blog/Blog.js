import React from 'react';

const Blog = () => {
    return (
        <div className="container text-center my-5">
            <h1>BEST TRAVELER'S SHARED PHOTOS</h1>
            <p>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p>
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="https://i.ibb.co/vwFFgBc/g1.jpg" alt="" className="img-fluid w-100 h-100" />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <img src="https://i.ibb.co/VmfLc6Z/g3.jpg" alt="" className="img-fluid w-100 h-100" />
                            </div>
                            <div className="col-md-6 mb-4">
                                <img src="https://i.ibb.co/MNf33Yr/g5.jpg" alt="" className="img-fluid w-100 h-100" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6 mb-4">
                                <img src="https://i.ibb.co/cxrxpf1/g4.jpg" alt="" className="img-fluid w-100 h-100" />
                            </div>
                            
                            <div className="col-md-6 mb-4">
                                <img src="https://i.ibb.co/V2KLCZF/g2.jpg" alt="" className="img-fluid w-100 h-100" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
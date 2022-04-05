import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="bg">
            <div className="bg-overlay">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <img src="https://i.ibb.co/VCy31qb/pexels-photo-2215380.jpg" alt="" className="img-fluid w-100 h-100" />
                    </div>
                    <div className="col-md-8 py-5">
                        <div className="row  pt-5">
                            <div className="col-md-4 ">
                                <p><span className="fas fa-envelope-open-text me-2"></span>support@gmail.com</p>
                                <p><span className="fas fa-envelope-open-text me-2"></span>admin@gmail.com</p>
                                <p><span className="fas fa-envelope-open-text me-2"></span>manager@gmail.com</p>
                            </div>
                            <div className="col-md-4 ">
                                <p><i className="fas fa-phone-square-alt me-2"></i>+8801794965841</p>
                                <p><i className="fas fa-phone-square-alt me-2"></i>+8801794965841</p>
                                <p><i className="fas fa-phone-square-alt me-2"></i>+8801794965841</p>
                            </div>
                            <div className="col-md-4 ">
                                <p>G5 Technology JSC, Room 1101</p>
                                <p> Glory Palace Apartment, Thi Ward</p>
                                <p>Nghe An Province, VietNam(42000)</p>
                            </div>
                        </div>
                        <hr />
                        <div className="col-md-12">
                            <h2>LETS JOIN US FOR MORE UPDATES</h2>
                            <button className="btn btn-warning mt-3 py-3 px-5">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-bg py-5">
            <div className="container text-light">
                <div className="text-center">
                    <h1 className="text-warning">Holidays</h1>
                    <p>Be designed and classified scientifically, courses are suitable to every levels, ensuring to maximize student’s capacity. You will find out many interesting things inside. Let’s discover right now!</p>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <h4>GET IN TOUCH</h4>
                        <p><span className="fas fa-map-marker-alt"></span> G5 Technology JSC, Room 1101, Glory Palace Apartment, Truong Thi Ward, Vinh City, Nghe An Province, VietNam(42000).</p>
                        <p><i className="fas fa-phone-alt"></i> (+84) 388-969-888</p>
                        <p><i className="fas fa-envelope-open-text"></i> g5plus@outlook.com</p>
                    </div>
                    <div className="col-md-6">
                        <h4>ASK A QUESTION</h4>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder="Description" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-warning">Send Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
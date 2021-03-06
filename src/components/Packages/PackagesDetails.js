import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PackagesDetails = () => {
    const { pacId } = useParams();
    const [pac, setPac] = useState([]);
    useEffect(() => {
        fetch(`http://nameless-plains-10260.herokuapp.com/packages/update/${pacId}`)
            .then(res => res.json())
            .then(data => setPac(data));
    }, []);
    // const details = services.find(service => service._id === pacId);
    



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //console.log(data);

        // use AXIOS for post into data base
        axios.post('http://nameless-plains-10260.herokuapp.com/placeOrder', data)
            .then(res => {
                //console.log(res);
                if (res.data.insertedId) {
                    alert('Order successfully complete');
                    reset();
                }
            })
    }
    const { user } = useAuth();
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="pb-5">
                        <h1>We are here to help when you need us</h1>
                        <p>By helping with daily activities, our caregivers enable clients to maintain their normal daily routines. Hourly home care allows clients to use our caregivers on an hourly or as-needed basis. Surrounded by their possessions, pets, and a familiar environment, our clients receive the support they need to enjoy their regular activities and continue living well at home.</p>
                    </div>
                    <div className="col-md-6 border-end">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={pac?.img} className="img-fluid h-100" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="py-3">
                                    <h1>{pac?.name}</h1>
                                    <p>Package Id No. {pacId}</p>
                                </div>
                                <p>Packages Offering price: ${pac?.price}</p><br />
                                <h6>Details:</h6>
                                <p>{pac?.description}</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center mb-2 sub-title">Fill up the Form for booking</h3>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                                <input className="w-50 mb-3"  {...register("name")} type="text" value={user.displayName} required />
                                <input className="w-50 mb-3" {...register("email")} type="email" value={user.email} required />
                                <input className="w-50 mb-3"  {...register("packageId")} type="text" value={pacId} />
                                <input className="w-50 mb-3"  {...register("packageName")} type="text" value={pac?.name} />
                                <textarea className="w-50 mb-3"  {...register("address")} type="text" placeholder="Address" required />
                                <input className="w-50 mb-3"  {...register("phone")} type="number" placeholder="Phone Number" required />
                                <input className="btn btn-color w-50 mb-3" type="submit" value="Book Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesDetails;
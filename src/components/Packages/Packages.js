import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Package from './Package';

const Packages = () => {
    const [packages,setPackages]=useState([]);
    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[]);

    return (
        <div>
           
            <div className="container py-5">
            <div className="text-center pb-4">
                <h1>POPULAR PACKAGES</h1>
                <p>The practice involves swishing oil around in your mouth to remove bacteria, which can turn into plaque and cause your teeth to look yellow.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    packages.map(pac => <Package
                        key={pac._id}
                        pac={pac}
                    ></Package>)
                }
            </div>
        </div>
            
        </div>
    );
};

export default Packages;
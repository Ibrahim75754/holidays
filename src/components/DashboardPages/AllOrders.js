import React, { useEffect, useState } from 'react';


const AllOrders = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://nameless-plains-10260.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    let Id = 1;

    const handleDelete = id => {
        const areUsure = window.confirm('Are You Sure, Want To Delete?');
        if (areUsure) {
            fetch(`/myOrders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // //console.log(data);
                    if (data.deletedCount) {
                        alert('Delete Successful');
                        const remaining = packages.filter(pac => pac._id !== id);
                        setPackages(remaining);
                    }
                })
        }
    }
    return (
        <div>
           
            <h2 className="text-center my-4">All order list :</h2>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">serial</th>
                            <th scope="col">PackageId No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            packages.map(pac => <tr>
                                <th scope="row">{Id++}</th>
                                <td>{pac.packageId}</td>
                                <td>{pac.name}</td>
                                <td>{pac.email}</td>
                                <td>{pac.phone}</td>
                                <td>{pac.address}</td>
                                <td><button onClick={() => handleDelete(pac._id)} className="btn btn-danger">Delete Order</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;
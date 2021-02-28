import React from 'react';
import './User.css'

const User = (props) => {
    // console.log(props.user);
    const {name,image,username,email,address,phone,website,company} = props.user;
    // console.log(address);
    const {street,suite,city,zipcode}=address;
    console.log(company);
    // const {name,bs,catchPhrase}=company;
    const {bs,catchPhrase}=company;
    return (
        <div className="user-box">
            <div className="image-box">
                <img src={image} alt=""/>
            </div>
            <div style={{width:'400px',height:'300px'}}>
                <h2>Basic Information</h2>
                <p> <strong>Name:</strong> {name}</p>
                <p><strong>UserName:</strong> {username}</p>
                <p className="website"><strong>Website:</strong> {website}</p>
            </div>
            <div style={{width:'400px',height:'300px'}}>
                <h2>Contact Information</h2>
                <p><strong>Street : </strong>{street}</p>
                <p><strong>Suite : </strong>{suite}</p>
                <p><strong>City : </strong>{city}</p>
                <p><strong>Email : </strong>{email}</p>
                <p><strong>Phone : </strong>{phone}</p>
                <p><strong>Zip Code : </strong>{zipcode}</p>
            </div>
            <div style={{width:'400px',height:'300px'}}>
                <h2>About Company</h2>
                <p><strong>Name : </strong>{company.name}</p>
                <p><strong>BS : </strong> {bs}</p>
                <p><strong>Catch Phrase : </strong>{catchPhrase}</p>
            </div>
            <button className="btn">Add Request</button>
        </div>
    );
};

export default User;
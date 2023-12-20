import React from 'react';
import "./Profile.css";

function Profile() {
     const details=sessionStorage.getItem("user")
     const {name,email}=JSON.parse(details)


    return (
        <section className='user_container'>
            <h1 className='user_head'>User Details</h1>
            <div className='detail_main'>
            <ul className='unorder'>
                <li className='user'>Name : {name}</li>
                <li className='user'>Email: {email}</li>
            </ul>
            </div>
        </section>
    )
}

export default Profile

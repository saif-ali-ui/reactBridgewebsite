import React from 'react'
import TeamMemberObj from './TeamMemberObj'
const TeamMenbers = () => {
    return (
        <div className='container'>
            <h1 className='heading'> Management & Operation Division </h1>

            <div className="row">
               {
                TeamMemberObj.map((members)=> {
                    let {id, name, image, description, designation} = members;
                    console.log(id);
                return(
                    <div className="col-lg-3">
                    <div className="cardd">
                        <div className="card-body text-center"> <img src={image} className="rounded-circle" width="200" height="200" />
                            <h5 className="card-title mt-2 mb-1"> {name} </h5> <span className="fs-2 mb-3 font-weight-bold">{designation}</span>
                            <p className="mb-3 mt-3"> {description} </p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a><i className="fa fa-facebook fa-2x facebook"></i></a></li>
                                <li className="list-inline-item"><a><i className="fa fa-twitter fa-2x twitter"></i></a></li>
                                <li className="list-inline-item"><a><i className="fa fa-linkedin fa-2x linkedin"></i></a></li>
                                <li className="list-inline-item"><a><i className="fa fa-google fa-2x google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                );
                
                })
               } 
            </div>
        </div>
    )
}

export default TeamMenbers
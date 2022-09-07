import React from "react";
import '../styles/styles.css'


const Characters = ({results}) => {
    let display;

    if (results) {
        display = results.map(x=>{
            let {id, name, image, location, status} = x;
            return( 
            <div key={id} className="col-4 mb-3 position-relative">
                <div className="cards">
                    <img src={image} alt="" className="img-fluid" />
                    <div className="content">
                        <div className="fs-4 fw-bold">{name}</div>
                        <div className="">
                            <div className="fs-6">Last location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>                    
                </div>
                {(()=> {
                    if( status === "Alive" ) {
                        return (
                        <div className="badge bg-success position-absolute">{status}</div> );
                    }
                    else if( status === "Dead" ){
                        return (
                        <div className="badge bg-danger position-absolute">{status}</div> );
                    }
                    else{
                        return (
                        <div className="badge bg-secondary position-absolute">{status}</div> );
                    }
                })()}                                
            </div>)
        })
    } else {
            display = "No characters found"
        }
    
    return <div className="row">{display}</div>;
};

export default Characters
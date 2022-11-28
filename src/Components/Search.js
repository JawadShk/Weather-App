import React from 'react'

export default function Search(props) {
  return (
    <div>
        <div className="row">
            <div className="col-lg-5">
                <div className="form-group">
                    <label htmlFor="">Type City Name</label>
                    <input type="text" className='form-control' name='city' onChange={props.change} id="city" value={props.city} aria-describedby='helpId' placeholder='City Name...'/>
                </div>
            </div>
            <div className="col-lg-1 text-center">
                <label htmlFor=""></label>
                <h5>Or</h5>
            </div>
            <div className="col-lg-5">
                <div className="form-group my-1">
                    <label htmlFor="">Get Co-ordinate</label>
                    <button className="btn fa fa-crosshairs" onClick={props.getLocation}></button>
                    <div className="row">
                        <div className="bg-dark text-white rounded pt-1 pl-1 pr-1 col-auto">lat:</div>
                        <input type="number" value={props.lat} onChange={props.change} step="any" className="form-control col mr-1 mx-1" name="lat" id="lat" aria-describedby='helpId' placeholder=''/>
                        <div className="bg-dark text-white rounded pt-1 pl-1 pr-1 col-auto">lon:</div>
                        <input type="number" value={props.lon} onChange={props.change} step="any" className="form-control col mx-1" name="lon" id="lon" aria-describedby='helpId' placeholder=''/>
                    </div>
                </div>
            </div>
            <div className="col-lg-1">
                <label htmlFor="">Search</label>
                <button className="btn btn-primary fa fa-search"></button>
            </div>
        </div>
    </div>
  )
}

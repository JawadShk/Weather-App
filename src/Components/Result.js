import React from 'react'

function Result() {
  return (
    <div>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-tilte">
                            <img src="" alt="" />
                            City Name ( Temp. ) <span className='pl-2'>Description</span>
                        </h4>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="table">
                                        <table>
                                        <tbody>
                                            <tr>
                                                <th>Feels like</th>
                                                <td>Feels like</td>
                                            </tr>
                                            <tr>
                                                <th>Min Temp</th>
                                                <td>min temp</td>
                                            </tr>
                                            <tr>
                                                <th>Max Temp</th>
                                                <td>max temp</td>
                                            </tr>
                                            <tr>
                                                <th>Sun Rise</th>
                                                <td>sun rise time</td>
                                            </tr>
                                            <tr>
                                                <th>Sun Set</th>
                                                <td>sun set time</td>
                                            </tr>
                                        </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Result
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Table() {

    const [Data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data").then((response) => {
            const _Data = response.data.data;
            setData(_Data);

        })

    }, []);


    console.log(Data);


    return (

    //     <div d-flex flex-column justify-content-evenly>
    //         <div d-flex flex-row justify-content-evenly>
    //             <div className="bd-highlight t-head">ASSET</div>
    //             <div className="bd-highlight t-head">AMOUNT</div>
    //             <div className="bd-highlight t-head">USER</div>
    //             <div className="bd-highlight t-head">REFERRAL EARNING</div>
    //         </div>
    //         <div d-flex flex-row justify-content-evenly>
    //             <div className="bd-highlight t-data">Bitcoin</div>
    //             <div className="bd-highlight t-data">0.001</div>
    //             <div className="bd-highlight t-data">0xflhi347vflbk598yewf</div>
    //             <div className="bd-highlight t-data">0.001</div>
    //         </div>
    //    </div>





        <table className="table table-borderless">
            <thead >
                <tr >
                    <th className="thead">ASSET</th>
                    <th className="thead">AMOUNT</th>
                    <th className="thead">USER ACCOUNT</th>
                    <th className="thead">REFERRAL EARNING</th>
                </tr>
            </thead>
            <tbody >

                {Data.map(item => {
                    return <tr className="trow">
                        <td className="tdata">{item.asset}
                            <tr><td className="secondary-text">{item.type}</td>
                                <td className="chain-name">{item.chain.name}</td></tr>
                        </td>
                        <td className="tdata">{item.amount}
                        <tr><td className="secondary-text">{item.state}</td></tr></td>
                        <td className="tdata">{item.user.substring(0, 5)}...{item.user.substring(35)}</td>
                        <td className="tdata">{item.referral_earnings}
                        <tr><td className="secondary-text">View on BSC Scan</td></tr></td>
                    </tr>
                })}

            </tbody>

        </table>
    )
}

export default Table;
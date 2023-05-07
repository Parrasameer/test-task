import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CustomerList() {
    const [customer, setCustomer] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:4000/api/customer")
            .then(res => res.json())
            .then(res => {
                setCustomer(res)
            })
    }, [])
    function createContact() {
        navigate("/details")
    }


    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age / Sex</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Address</th>
                        <th scope="col">Govt ID</th>
                        <th scope="col">Guardian Details</th>
                        <th scope="col">Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer.map((el, index) => (<tr>
                            <td className="colmn">{index + 1}</td>
                            <td className="colmn">{el.name}</td>
                            <td className="colmn">{el.age}/{el.sex}</td>
                            <td className="colmn">{el.mobile}</td>
                            <td className="colmn">{el.address}, {el.state}, {el.pincode}</td>
                            <td className="colmn">{el.IDtype}/{el.govtId}</td>
                            <td className="colmn">{el.guardian}/{el.guardianDetails}</td>
                            <td className="colmn">{el.nationality}</td>

                        </tr>


                        ))
                    }
                </tbody>

            </table>
            <button onClick={createContact} className="btn btn-success float-end">Create contact</button>
        </div>
    )
}


export default CustomerList
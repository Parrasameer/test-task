import { useState } from "react"
import './CustomerDetails.css'
import validation from "../Valadation"
import { useNavigate } from "react-router-dom"


function CustomerDetails() {
    const [customerData, setCustomerData] = useState({})
    const [flag, setFlag] = useState(false)

    const navigate = useNavigate()
    function cancel() {
        navigate("/")
    }
    const handleEventSubmit = async (e) => {
        e.preventDefault()
        // console.log(customerData)
        let fromData = {
            name: e.target[0].value,
            age: e.target[1].value,
            sex: e.target[2].value,
            mobile: e.target[3].value,
            idType: e.target[4].value,
            govtId: e.target[5].value,
            emergencyContactNumber: e.target[9].value,

        }

        const isValid = await validation.isValid(fromData)
        if (!isValid) {

            setFlag(true)

        }
        else {
            fetch("http://localhost:4000/api/customer", {
                method: "POST",
                body: JSON.stringify(customerData),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => {
                navigate("/")

            })
            setFlag(false)
        }


    }
    return (
        <div className="mainDiv container">
            {flag && <div class="alert alert-warning" role="alert">
                . Please fill in all the required fields marked with an asterisk (*) <br />
                . Please enter a valid mobile number <br />
                . Please enter a valid Govt ID number
            </div>}
            <form onSubmit={handleEventSubmit}>
                <div className="row">
                    <div className="col-12"><h5> Personal Details</h5> </div>
                    <div className="col-4 flex">   <label htmlFor="exampleInputName" className="form-label required">Name</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }
                            obj.name = e.target.value
                            setCustomerData(obj)
                        }} placeholder=" Enter name" type="text" className="form-control" id="exampleInputName" /></div>
                    <div className="col-4 flex">  <label htmlFor="exampleInputAge" className="form-label required">Age</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }
                            obj.age = e.target.value
                            setCustomerData(obj)
                        }} placeholder="Age in Years" type="text" className="form-control" id="exampleInputAge" /> </div>
                    <div className="col-4 flex">  <label htmlFor="exampleInputSex" className="form-label required">Sex</label>
                        <select id="exampleInputSex" onChange={(e) => {
                            let obj = { ...customerData }
                            obj.sex = e.target.value
                            setCustomerData(obj)
                        }} >
                            <option value="" selected> Enter Sex</option>
                            <option value="M"> Male</option>
                            <option value="F"> Female</option>
                            <option value="intersex"> Intersex</option>
                            <option value="other"> Other</option></select></div>
                </div>
                <div className="row">

                    <div className="col-4 flex">   <label htmlFor="exampleInputMobile" className="form-label required ">Mobile</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }
                            obj.mobile = e.target.value
                            setCustomerData(obj)
                        }} placeholder=" Enter mobile" type="text" className="form-control" id="exampleInputMobile" /></div>
                    <div className="col-8 flex">
                        <label htmlFor="exampleInputGovtID" className="form-label required col-2">Govt issued ID</label>
                        <select onChange={(e) => {
                            let obj = { ...customerData }
                            obj.IDtype = e.target.value
                            setCustomerData(obj)
                        }} >
                            <option value="" selected> ID type</option>
                            <option value="PAN"> PAN</option>
                            <option value="Aadhar"> Adhaar</option>
                        </select>
                        <input onChange={(e) => {
                            let obj = { ...customerData }

                            obj.govtId = e.target.value
                            setCustomerData(obj)
                        }} type="text" placeholder=" Enter Govt ID" className="form-control required " id="exampleInputGovtID" />
                    </div>

                    <div className="row">
                        <h5 className="col-12"> Contact Details</h5>
                        <div className="col-4 flex">  <label htmlFor="exampleInputGuardian" className="form-label col-4 ">Guardian Details</label>
                            <select onChange={(e) => {
                                let obj = { ...customerData }
                                obj.guardian = e.target.value
                                setCustomerData(obj)
                            }}> <option selected> Enter label</option>
                                <option value="father"> Father</option>
                                <option value="mother"> Mother</option>
                                <option value="grandParent"> GrandParent</option>
                                <option value="other"> Other</option>
                            </select>
                            <input value={customerData.employees} onChange={(e) => {
                                let obj = { ...customerData }
                                obj.guardianDetails = e.target.value

                                setCustomerData(obj)
                            }} placeholder=" Enter Guardian Name" type="text" className="form-control" id="exampleInputGuardian" />
                        </div>
                        <div className="col-4 flex"> <label htmlFor="exampleInputEmail" className="form-label  "> Email</label>
                            <input onChange={(e) => {
                                let obj = { ...customerData }
                                obj.email = e.target.value
                                setCustomerData(obj)
                            }} placeholder=" Enter email" type="email" className="form-control" id="exampleInputEmail" /> </div>
                        <div className="col-4 flex">  <label htmlFor="exampleInputEmergency" className="form-label required  "> Emergency Contact Number</label>
                            <input onChange={(e) => {
                                let obj = { ...customerData }
                                obj.emergencyNo = e.target.value
                                setCustomerData(obj)
                            }} placeholder=" Enter Emergency No" type="number" className="form-control" id="exampleInputEmergency" /></div>

                    </div>

                </div>
                <div className="row">
                    <h5 className="col-12"> Address Details</h5>
                    <div className="col-4 flex">  <label htmlFor="exampleInputAddress" className="form-label  "> Address</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }
                            obj.address = e.target.value
                            setCustomerData(obj)
                        }} placeholder=" Enter Address" type="text" className="form-control" id="exampleInputAddress" /></div>
                    <div className="col-4 flex">  <label htmlFor="exampleInputState" className="form-label  "> State</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }

                            obj.state = e.target.value

                            setCustomerData(obj)
                        }} placeholder=" Enter State" type="text" className="form-control" id="exampleInputState" /></div>
                    <div className="col-4 flex">  <label htmlFor="exampleInputCity" className="form-label  "> City</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }
                            obj.city = e.target.value
                            setCustomerData(obj)
                        }} type="text" className="form-control" id="exampleInputCity" /></div>
                    <div className="col-4 flex">  <label htmlFor="exampleInputCountry" className="form-label  "> Country</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }
                            obj.country = e.target.value
                            setCustomerData(obj)
                        }} type="text" className="form-control" id="exampleInputCountry" /></div>
                    <div className="col-4 flex">  <label htmlFor="exampleInputPincode" className="form-label  "> Pincode</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }
                            obj.pincode = e.target.value
                            setCustomerData(obj)
                        }} type="number" placeholder="Pincode" className="form-control" id="exampleInputPincode" /></div>

                </div>
                <div className="row">
                    <h5 className="col-12"> Other Details</h5>
                    <div className="col-3 flex">  <label htmlFor="exampleInputOccupation" className="form-label  "> Occupation</label>
                        <input onChange={(e) => {
                            let obj = { ...customerData }

                            obj.occupation = e.target.value
                            setCustomerData(obj)
                        }} type="text" placeholder="Enter Occupation" className="form-control" id="exampleInputOccupation" /></div>
                    <div className="col-3 flex">  <label htmlFor="exampleInputReligion" className="form-label  "> Religion Status</label>
                        <select onChange={(e) => {
                            let obj = { ...customerData }
                            obj.religion = e.target.value
                            setCustomerData(obj)
                        }} id="exampleInputReligion">
                            <option> Enter Religion</option>
                            <option value="islam"> Islam</option>
                            <option value="hinduism"> Hinduism</option>
                            <option value="buddhism"> Buddhism</option>
                            <option value="judaism"> Judaism</option>
                            <option value="christianity"> Christianity</option>
                            <option value=" sikhism">  Sikhism</option>
                            <option value=" other">  Other</option>
                        </select> </div>
                    <div className="col-3 flex">  <label htmlFor="exampleInputMartailStatus" className="form-label"> Martial Status</label>
                        <select id="exampleInputMartailStatus" onChange={(e) => {
                            let obj = { ...customerData }
                            obj.martialStatus = e.target.value
                            setCustomerData(obj)
                        }}> <option selected> Enter Martial Status</option>
                            <option value="married">Married</option>
                            <option value="separated">Separated</option>
                            <option value="single">Single</option></select></div>
                    <div className="col-3 flex">  <label htmlFor="exampleInputBloodGroup" className="form-label   "> Blood Group</label>
                        <select id="exampleInputBloodGroup" onChange={(e) => {
                            let obj = { ...customerData }
                            obj.bloodGroup = e.target.value
                            setCustomerData(obj)
                        }} >
                            <option selected> Group</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                            <option value="other">Other</option>
                        </select></div>
                    <div className="col-3 flex">  <label htmlFor="exampleInputNationality" className="form-label  "> Nationality</label>
                        <select id="exampleInputNationality" onChange={(e) => {
                            let obj = { ...customerData }
                            obj.nationality = e.target.value
                            setCustomerData(obj)
                        }} >
                            <option selected> Enter Nationality</option>
                            <option value="Indian">Indian</option></select></div>

                </div>
                <button type="submit" className="btn btn-primary float-end"> Submit</button>
                <button onClick={cancel} className="btn btn-danger float-end"> Cancel</button>



            </form>

        </div>


    )
}

export default CustomerDetails
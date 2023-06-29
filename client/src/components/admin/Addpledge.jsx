import React,{ useState} from 'react'
import  Axios  from 'axios';
import './Addpledge.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Swal from 'sweetalert2'
import Header from './Header.jsx';
function Addpledge () {
  const [typepawn, setTypepawn] = useState("");
  const [band, setBand] = useState("");
  const [model, setModel] = useState("");
  const [numberserial, setNumberserial] = useState("");
  const [pawnprice, setPawnprice] = useState("");
  const [interest, setInterest] = useState("");
  
  
  
  const addPledge = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.post("http://localhost:5000/Addpledge", { 
          typepawn: typepawn,
          band: band,
          model: model,
          numberserial: numberserial,
          pawnprice: pawnprice,
          interest: interest,
        }).then((response) => {
          if(!response.data.message){
            Swal.fire({
              text: response.data.message,
              position: 'center',
              icon: 'success',
              title: 'Success',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
        )
      }
    })
   
  };

  return (
    <> 
    <div className="vr"  style={{ height:100 }}/> 
  

    
    <Form className=""   onSubmit={addPledge}>
     
    
    <Row className="mb-4 ">
    <Form.Group as={Col} controlId="formGridTypepledge">
        <Form.Label>ประเภทขายฝาก</Form.Label>
        <Form.Select onChange={(e) => {setTypepawn(e.target.value)}}>
                  <option>มือถือ</option>
                  <option>กล้อง</option>
                  <option>เกมส์</option>
                  <option>โน๊ตบุ๊ค</option>
                  <option>ไอแพด</option>
                  <option>แทบเล็ต</option>
                  <option>อื่นๆ</option>
        </Form.Select>
      </Form.Group>
     

      <Form.Group as={Col} controlId="formGridBand">
        <Form.Label>ยี่ห้อ</Form.Label>
        <Form.Control type="text" placeholder="ยี่ห้อ" onChange={(e) => {setBand(e.target.value)}} required />
      </Form.Group>
    </Row>


    <Row className="mb-3">
    <Form.Group as={Col} className="mb-3" controlId="formGridNuberserial">
      <Form.Label>เลขเครื่อง</Form.Label>
      <Form.Control  placeholder="เลขเครื่อง" onChange={(e) => { setNumberserial(e.target.value)}} required/>
    </Form.Group>

    <Form.Group as={Col} className="mb-3" controlId="formGridModel">
      <Form.Label>รุ่น</Form.Label>
      <Form.Control placeholder="รุ่น" onChange={(e) => {setModel(e.target.value)}} required/>
    </Form.Group>
    </Row>


    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPawnprice">
        <Form.Label>ราคาจำนำ</Form.Label>
        <Form.Control type="number" placeholder='ราคาจำนำ'onChange={(e) => {setPawnprice(e.target.value)}} required/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridInterest">
        <Form.Label>ดอกเบี้ย</Form.Label>
        <Form.Control type="float" placeholder='ดอกเบี้ย'onChange={(e) => {setInterest(e.target.value)}} required/>
      </Form.Group>
    </Row>

    <Button variant="primary" type="submit">
      Submit
    </Button> 
   
 
   
  </Form>
 
  </>
  )
}



export default Addpledge
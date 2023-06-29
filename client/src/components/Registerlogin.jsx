import React, { useState } from "react";
import Axios from "axios";
import "./css/Registerlogin.css"; 
import Swal from "sweetalert2";
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBCard,
} from "mdb-react-ui-kit";

function Registerlogin() {
  const [Lemail, setLEmail] = useState("");
  const [Lpassword, setLPassword] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const addUser = (e) => {
    Axios.post("http://localhost:5000/create", {
      email: email,
      password: password,
      fname: fname,
      lname: lname,
      phonenumber: phonenumber,
    });
  };

  const login = (e) => {
    Axios.post("http://localhost:5000/login", {
      Lemail: Lemail,
      Lpassword: Lpassword,
    }).then((response) => {
      if (response.data.message) {
        Swal.fire({
          text: response.data.message,
          position: "center",
          icon: "error",
          title: "Error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
        
    <div className="scard">
    <MDBRow >
      <MDBCol md="7"  >
        
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50 " >
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between"
            >
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                >
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                >
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === "tab1"}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                </div>

                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              </MDBTabsPane>

              <MDBTabsPane show={justifyActive === "tab2"}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    label="I have read and agree to the terms"
                  />
                </div>

                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
       
      </MDBCol>
      <MDBCol md="5">aaaaaaaaaaaaaaa</MDBCol>
    </MDBRow>
    </div> 
  
  );
}

export default Registerlogin;

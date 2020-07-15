import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const InfoSection = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">LuPu Solutions</h2>
			<p className="lead">
              Your business boost from IT perspective
            </p>
            <hr className="my-2" />
            <MDBCol>
                <p className="text-left" >
                  <li>IT consulting and coding</li>
                  <li>Full stack mobile and web applications</li>
                  <li>Security of virtual identity</li>
                  <li>Computer vision and neural networks</li>
                </p>
            </MDBCol>
            <p className="lead">
              <a className="btn btn-dark" href='mailto:lukas.puchon@gmail.com'  >Contact us</a>
            </p>
          </MDBJumbotron>
			<p className="lead">
              How far can you go in few seconds?
            </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default InfoSection;

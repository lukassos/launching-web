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
              How far can you go in few seconds?
            </p>
            <hr className="my-2" />
            <p>
              IT consulting and coding - Android, web sites, computer vision, neural networks
            </p>
            <p className="lead">
              <a className="btn btn-dark" href='mailto:lukas.puchon@gmail.com' target="_blank" >Contact us</a>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default InfoSection;

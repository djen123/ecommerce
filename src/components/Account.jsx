import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import profileImg from '../assets/profileimg.jpg'


function Account() {
  return (
   <Container fluid>
<div className="row g-4">


  <div className="col-sm-6 col-md-4 ">
    <img
      src={profileImg}
      width="300px"
      className="img-fluid mt-3"
      alt="Amosh Elamel"
    />
    <h4 className="text-muted">Amosh Elamel</h4>
  </div>


  <div className="col-sm-6 col-md-8 mt-5">

 
    <div className="row mb-3">
      <div className="col">
        <h5 className="fw-bold">Account Details</h5>
      
      </div>
    </div>


    <div className="row">
      <div className="col">
          <ListGroup>
      <ListGroup.Item className = "fw-bold account">Your orders</ListGroup.Item>
      <ListGroup.Item className = "fw-bold  account">Login & Security</ListGroup.Item>
      <ListGroup.Item className = "fw-bold  account"> Your addresses</ListGroup.Item>
      <ListGroup.Item className = "fw-bold  account">Your payments</ListGroup.Item>
      <ListGroup.Item className = "fw-bold  account">Your Messagess</ListGroup.Item>
    </ListGroup>
      </div>
    </div>

  </div>

</div>


   </Container>



    
  )
}

export default Account;
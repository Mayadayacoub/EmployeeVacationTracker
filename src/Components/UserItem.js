import React from "react";
import { Card } from "react-bootstrap";

function UserItem({ user }) {
  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className="my-2 text-center"
        key={user.id}
      >
        <Card.Body>
          <Card.Title>
            {user?.firstName} {user?.lastName}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted ">
            {user.role}
          </Card.Subtitle>
          <Card.Text> Email: {user.email}</Card.Text>
          <Card.Text>Phone Number : {user.phone}</Card.Text>
          <Card.Text>BirthDate: {user.birthDate}</Card.Text>
          <Card.Text>Gender: {user.gender}</Card.Text>
          <Card.Text>Marital Status: {user.maritalStatus}</Card.Text>
          <Card.Text>Code: {user.code}</Card.Text>
          {user.status === "inActive" && (
            <Card.Text> In Active Type Of Vacation: {user.vacation}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserItem;

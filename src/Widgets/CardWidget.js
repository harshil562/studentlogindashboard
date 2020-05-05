import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardWidget = ({ student }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`Total marks : ${student.marks.subject_1 + student.marks.subject_2 + student.marks.subject_3}`}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {`Student Id : ${student.student_id}`}</Card.Subtitle>
        <Link
          to={{
            pathname: `${student.student_id}`,
            state: { student: student }
          }}
        >Details</Link>
      </Card.Body>
    </Card>
  )
}

export default CardWidget;
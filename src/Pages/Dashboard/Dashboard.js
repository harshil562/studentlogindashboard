import React, { Component } from 'react'
import { Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { isEmpty } from 'lodash';
import { Navbar, FormControl, Button, Nav, Form } from 'react-bootstrap';

import CardWidget from './../../Widgets/CardWidget';
import { naturalCompare } from '../Utils';


export default class Dashboard extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      studentsData: {},
      initialStudentsData: {},
      toggleMarks: false,
      toggleName: false
    };
  }

  componentDidMount() {
    fetch('https://api.npoint.io/1953ab244d9a35de08a6')
      .then(response => response.json())
      .then(data => this.setState({ studentsData: data, isLoading: false, initialStudentsData: data }));
  }

  handleSearch = (event) => {
    const { initialStudentsData } = this.state;
    const searchText = event.target.value;

    const filteredData = Object.values(initialStudentsData).filter((student) => student.name.includes(searchText));
    this.setState({ studentsData: filteredData });
  }


  handleNameClick = () => {
    const { studentsData, toggleName } = this.state;
    const sortedData = Object.values(studentsData).sort((studentA, studentB) => {
      const nameStudentA = studentA.name;
      const nameStudentB = studentB.name;
      if (toggleName) {
        return naturalCompare(nameStudentA, nameStudentB);
      } else {
        return naturalCompare(nameStudentB, nameStudentA);
      }
    });
    this.setState({ studentsData: sortedData, toggleName: !toggleName });
  }

  handleMarksClick = () => {
    const { studentsData, toggleMarks } = this.state;
    const sortedData = Object.values(studentsData).sort((studentA, studentB) => {
      const totalMarksStudentA = studentA.marks.subject_1 + studentA.marks.subject_2 + studentA.marks.subject_3;
      const totalMarksStudentB = studentB.marks.subject_1 + studentB.marks.subject_2 + studentB.marks.subject_3;
      if (toggleMarks) {
        return totalMarksStudentB - totalMarksStudentA;
      } else {
        return totalMarksStudentA - totalMarksStudentB;
      }
    });
    this.setState({ studentsData: sortedData, toggleMarks: !toggleMarks });
  }

  handleLogout = () => {
    const { cookies } = this.props;
    cookies.remove('isSessionActive');
  }

  render() {
    const { isLoading, studentsData } = this.state;
    if (isLoading) {
      return <p>Loading ....</p>
    } else {
      return (
        <>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#">Embibe</Navbar.Brand>
            <Nav className="mr-auto">
              <Button onClick={this.handleNameClick} variant="outline-light">Name</Button>
              <Button onClick={this.handleMarksClick} variant="outline-light">
                <span className="glyphicon glyphicon-arrow-up"></span> Marks</Button>
            </Nav>
            <Form inline>
              <FormControl onChange={this.handleSearch} type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={this.handleLogout} variant="outline-light">Logout</Button>
            </Form>
          </Navbar>
          <div className="row">
            {
              !isEmpty(studentsData) && Object.values(studentsData).map(student => {
                return (
                  <div className="col-xs-12 .col-sm-6 col-md-4">
                    <CardWidget student={student} />
                  </div>)
              })
            }
          </div>
        </>
      )
    }
  }
}

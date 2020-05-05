import React from 'react'
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';

import CanvasJSReact from './../../assets/canvasjs.react';
import { getChartOptions } from './../Utils';
import './details.css';

const Details = ({ location }) => {
  const { CanvasJSChart } = CanvasJSReact;
  let student = '';
  if (!isUndefined(location.state)) {
    student = location.state.student;
  }
  const chartOptions = getChartOptions(student);

  return (
    <div className="details">
      <CanvasJSChart options={chartOptions} />
    </div>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        student_id: PropTypes.number.isRequired,
        marks: PropTypes.shape({
          subject_1: PropTypes.number.isRequired,
          subject_2: PropTypes.number.isRequired,
          subject_3: PropTypes.number.isRequired
        })
      })
    })
  })
}

export default Details;

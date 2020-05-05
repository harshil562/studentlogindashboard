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
    pathname: PropTypes.string.isRequired
  })
}

export default Details;

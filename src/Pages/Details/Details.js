import React from 'react'
import { isUndefined } from 'lodash';
import CanvasJSReact from './../../assets/canvasjs.react';
import {getChartOptions} from './../Utils';
import './details.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Details = (props) => {
  let student = '';
  if (!isUndefined(props.location.state)) {
    student = props.location.state.student;
  }
  const chartOptions = getChartOptions(student);
  return (
    <div className="details">
      <CanvasJSChart options={chartOptions} />
    </div>
  );
}

export default Details;

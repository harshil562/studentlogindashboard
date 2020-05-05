import { isUndefined, isEmpty } from 'lodash';

export const naturalCompare = (a, b) => {
  var ax = [], bx = [];

  a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
  b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

  while (ax.length && bx.length) {
    var an = ax.shift();
    var bn = bx.shift();
    var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
    if (nn) return nn;
  }

  return ax.length - bx.length;
}

export const getChartOptions = (student) => {
  let options = [];
  if (!isUndefined(student) && !isEmpty(student)) {
    options = {
      title: {
        text: `${student.name} marks in 3 subjects`
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: "Subject 1 marks", y: student.marks.subject_1 },
          { label: "Subject 2 marks", y: student.marks.subject_2 },
          { label: "Subject 3 marks", y: student.marks.subject_3 },
        ]
      }]
    }
  }
  return options;
}

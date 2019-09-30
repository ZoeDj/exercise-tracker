import React from "react";
import { render } from "react-dom";

let ExerciseData = {
  total: 50,
  yoga: 15,
  running: 5,
  walking: 30,
  goal: 100
};
//function components and custom methods
const getPercent = decimal => {
  return decimal * 100 + "%";
};
const goalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const ExerciseCounter = ({ total, yoga, running, walking, goal }) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Yoga Days: {yoga}</p>
      </div>
      <div>
        <p>Running Days: {running}</p>
      </div>
      <div>
        <p>Walking Days: {walking}</p>
      </div>
      <div>
        <p>Goal Progress: {goalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

render(
  <ExerciseCounter
    total={ExerciseData.total}
    yoga={ExerciseData.yoga}
    running={ExerciseData.running}
    walking={ExerciseData.walking}
    goal={ExerciseData.goal}
  />,

  document.getElementById("root")
);

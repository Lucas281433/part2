const Total = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
      <strong>Total of {total} exercises</strong>
    </div>
  );
};

export default Total;

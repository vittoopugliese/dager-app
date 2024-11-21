export const ExpCard = ({exp}) => {
  return (
    <div className="exp-card">
      <h3>{exp.title}</h3>
      <p>{exp.date}</p>
      <ul>{exp.jobItems.map((item, index) => <li key={index*2}>{item}</li>)}</ul>
    </div>
  );
};
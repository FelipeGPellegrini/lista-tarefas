const Task = ({ title, description }) => {
  return (
    <div className="task bg-yellow-200 p-4 m-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-yellow-800">{title}</h2>
      <p className="text-yellow-700">{description}</p>
    </div>
  );
};

export default Task;


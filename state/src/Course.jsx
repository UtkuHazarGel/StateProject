import Angular from "./images/angular.jpg";
import BootStrap5 from "./images/bootstrap5.png";
import CcSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import "./Course.css"

const courseMap = {
  Angular,
  BootStrap5,
  CcSharp,
  KompleWeb,
};
function Course({ courseName }) {
  console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt={courseName} />
    </div>
  );
}

export default Course;

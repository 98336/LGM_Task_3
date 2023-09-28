import React, { useState } from 'react';
import './App.css';

function App() {
  const initialFormData = {
    name: '',
    gender: 'Male',
    course: '', 
    email: '',
    skills: [],
    image: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [students, setStudents] = useState([]);

  const courses = [
    'Web Development',
    'Cyber Security',
    'Cloud Computing',
    'Data Science',
    'Machine Learning', 
    'Artificial Intelligence',
    'Mobile App Development',
  ];

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'radio' ? value : value,
      }));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, formData]);
    setFormData(initialFormData);
  };

  const loadFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>STUDENT COURSE REGISTRATION FORM</h1>
      <hr />
      <div className="box">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <div className="f1">
              <label htmlFor="name">Name*:</label>
              <input
                type="text"
                name="name"
                className="in"
                placeholder="Enter name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="f2">
              <label>Gender:</label>
              <div className="c">
                <div className="c1">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleInputChange}
                  />
                  <label>Male</label>
                </div>
                <div className="c1">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleInputChange}
                  />
                  <label>Female</label>
                </div>
              </div>
            </div>
            <div className="f1">
              <label htmlFor="course">Course*:</label>
              <select
                name="course"
                className="in"
                required
                value={formData.course}
                onChange={handleInputChange}
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            <div className="f1">
              <label htmlFor="email">Email*:</label>
              <input
                type="email"
                name="email"
                className="in"
                placeholder="Enter email id"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="f1">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                name="image"
                className="in"
                id="img"
                alt="student image"
                accept="image/*"
                onChange={loadFile}
              />
            </div>
            <div className="f2">
              <label htmlFor="skills">Skills:</label>
              <div className="c">
                <div className="c1">
                  <input
                    type="checkbox"
                    name="skills"
                    value="HTML"
                    checked={formData.skills.includes('HTML')}
                    onChange={handleInputChange}
                  />
                  <label>HTML</label>
                </div>
                <div className="c1">
                  <input
                    type="checkbox"
                    name="skills"
                    value="CSS"
                    checked={formData.skills.includes('CSS')}
                    onChange={handleInputChange}
                  />
                  <label>CSS</label>
                </div>
                <div className="c1">
                  <input
                    type="checkbox"
                    name="skills"
                    value="JS"
                    checked={formData.skills.includes('JS')}
                    onChange={handleInputChange}
                  />
                  <label>JS</label>
                </div>
                <div className="c1">
                  <input
                    type="checkbox"
                    name="skills"
                    value="Python"
                    checked={formData.skills.includes('Python')}
                    onChange={handleInputChange}
                  />
                  <label>Python</label>
                </div>
                <div className="c1">
                  <input
                    type="checkbox"
                    name="skills"
                    value="Java"
                    checked={formData.skills.includes('Java')}
                    onChange={handleInputChange}
                  />
                  <label>Java</label>
                </div>
              </div>
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>
        </div>
        <div className="display">
          <h2>Registered Students</h2>
          {students.map((student, index) => (
            <div key={index} className="d">
              <div className="div1">
                <div>NAME: {student.name}</div>
                <div>Gender: {student.gender}</div>
                <div>Course: {student.course}</div>
                <div>EMAIL: {student.email}</div>
                <div>Skills: {student.skills.join(', ')}</div>
              </div>
              <img className="img" src={student.image} alt="student" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

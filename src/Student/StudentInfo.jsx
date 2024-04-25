import React from 'react'
import { useState } from 'react'

const StudentInfo = () => {

  const [formData, setFormData] = useState({
    EmpId: '',
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    gender: '',
    program: '',
    year: '',
    gpa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container w-50">
      <h1>Employee Registration Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="EmpId">Emp ID:</label>
          <input type="text" className="form-control" id="EmpId" name="EmpId" value={formData.EmpId} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder='Enter Name' />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="image">Phone:</label>
          <input type="text" className="form-control" id="image" name="image" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea className="form-control" id="address" name="address" rows="4" value={formData.address} onChange={handleChange} required></textarea>
        </div>

          <div className="form-group">
          <label htmlFor="program">Program:</label>
          <select className="form-control" id="program" name="program" value={formData.program} onChange={handleChange} required>
            <option value="">Select Program</option>
            <option value="Computer Science">Computer Science</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year of Study:</label>
          <input type="number" className="form-control" id="year" name="year" min="1" max="4" value={formData.year} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="gpa">GPA:</label>
          <input type="number" className="form-control" id="gpa" name="gpa" step="0.01" min="0" max="4" value={formData.gpa} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h2 className='mt-5'>Form Data</h2>
            <table class="table table-hover">
              <tr>
              <td class="border border-secondary ">{formData.EmpId}</td>
              <td class="border border-secondary">{formData.name}</td>
              <td class="border border-secondary">{formData.email}</td>
              <td class="border border-secondary">{formData.dob}</td>
              <td class="border border-secondary">{formData.phone}</td>
              <td class="border border-secondary">{formData.program}</td>
              <td class="border border-secondary">{formData.address}</td>
              <td class="border border-secondary">{formData.year}</td>
              <td></td>
              </tr>
            </table>
    </div>
  )
}

export default StudentInfo
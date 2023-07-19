import React from 'react';


const students = [
    {
      id: 1,
      studentCode: 'SV001',
      fullName: 'Nguyễn Văn A',
      dateOfBirth: '01/01/2000',
      gender: 'Nam'
    },
    {
      id: 2,
      studentCode: 'SV002',
      fullName: 'Trần Thị B',
      dateOfBirth: '05/05/2001',
      gender: 'Nữ'
    }
  ];
const StudentInfoComponent = () => {
    return (
        <div id='student'>
        <h1>Thông tin sinh viên</h1>
        <table id='studentInfor'>
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
            </tr>
          </thead>
          <tbody>
  {students.map((student) => (
    <tr key={student.id}>
      <td>{student.studentCode}</td>
      <td>{student.fullName}</td>
      <td>{student.dateOfBirth}</td>
      <td>{student.gender}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    );
  }
  
  export default StudentInfoComponent;
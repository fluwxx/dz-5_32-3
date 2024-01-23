import React, { useState } from 'react';


const AuthForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
      <div style={{}}>
        <h2>Форма авторизации/регистрации</h2>
        <form>
          <label style={{justifyContent:'center', display:'flex'}}>
            ФИО:
            <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
            />
          </label>
          <br />

          <label  style={{justifyContent:'center', display:'flex'}}>
            Возраст:
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
          </label>
          <br />

          <label  style={{justifyContent:'center', display:'flex'}}>
            Электронная почта:
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
          </label>
          <br />

          <label  style={{justifyContent:'center', display:'flex'}}>
            Номер телефона:
            <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
            />
          </label>
          <br />

        </form>

        <div >
          <h2>Данные пользователя в реальном времени:</h2>
          <p>ФИО: {formData.fullName}</p>
          <p>Возраст: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Номер телефона: {formData.phoneNumber}</p>
        </div>
      </div>
  );
};

export default AuthForm;


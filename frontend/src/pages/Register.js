import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './login.css';
import { register } from './redux/actions/userActions';

const Register = () => {
  // const {loading, users} = useSelector((state) => state.userReducer);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [firstName,setFirName] = useState('');
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // registering users
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      firstName,
      email,
      matricule,
      password,
    };
    dispatch(register(newUser));
  };
  return (
                  
    <div>
        <div className="form">
          <h1>Sign Up</h1> <br></br>
          <form onSubmit={handleRegister}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Please fill in your full name..."
            />
             <label>firstName</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirName(e.target.value)}
              required
              placeholder="Please fill in your firstName..."
            />
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="example@gmail.com..."
            />
            <label>matricule</label>
            <input
              type="text"
              onChange={(e) => setMatricule(e.target.value)}
              value={matricule}
              required
              placeholder="Please fill in your phone matricule..."
            />
            
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Please fill in your address..."
            />
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  );
};

export default Register;
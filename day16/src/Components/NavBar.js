import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import {Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../redux/userSlice';
import '../Assets/CSS/NavBar.css'
export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const Email = useSelector(selectUser);
  const [search,setSearch]=useState('')
  console.log(Email.email);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(logout());
    nav("/");
  };
  console.log(search)
  const HandleSearch = () => {
    localStorage.setItem("search",search)
    nav("/search");
  };
  const HandleNav = (param) => {
    nav(`${param}`);
  };


  const HandleLogin = () => {
    if (Email.email) {
      return (
        <>
          <div className="nav-item">
            <button className="nav-link btn btn-link" onClick={()=>HandleNav("/profile")}>
              Profile
            </button>
          </div>
          <div className="nav-item">
                <button className="nav-link btn btn-link" onClick={()=>HandleNav("/cart")}>
                  Cart
                </button>
              </div>
          <div className="nav-item">
            <button className="nav-link btn btn-link" onClick={HandleLogout}>
              Logout
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="nav-item">
          <button className="nav-link btn btn-link" onClick={()=>HandleNav("/login")}>
            Login
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">AMITY</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            onClick={() => setShowBasic(!showBasic)}
          />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <div className="nav-item">
                <button className="nav-link btn btn-link" onClick={()=>HandleNav("/")}>
                  Home
                </button>
              </div>
              <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => HandleNav('/men')}>Men's</Dropdown.Item>
            <Dropdown.Item onClick={() => HandleNav('/women')}>Women's</Dropdown.Item>
            <Dropdown.Item onClick={() => HandleNav('/kids')}>Kids</Dropdown.Item>
            <Dropdown.Item onClick={() => HandleNav('/accessories')}>Accessories</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
              {HandleLogin()}
            </Nav>
          </Navbar.Collapse>
              <div className="nav-item mr-auto justify-content-end">
              <div class="">
    <input type="text" class="input" id="text" name="seaect" placeholder="search" autocomplete="off" onChange={(e)=>{setSearch(e.target.value)}} />
    <input class="button--submit" value="Search" type="submit" onClick={HandleSearch}/>
        </div>
        </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

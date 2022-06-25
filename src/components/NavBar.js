import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './NavBar.module.css';
import { getInput } from '../Slices/SearchSlice';

const NavBar = (props) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    // dispatch(getInput(img));
    // console.log(img);
    if (text) {
      dispatch(getInput(text));
      props.fetching(text);
      setText('');
    } else {
      console.log('Enter valid Input');
      throw Error("Search field can't be Empty");
    }
  };

  return (
    <nav className={classes.navs}>
      <ul className={classes.bar}>
        <li className={classes.list1}>
          <h2>PICS</h2>
          <i
            className="fa-solid fa-camera-retro"
            style={{ color: 'hotpink', fontSize: '20px' }}
          ></i>
        </li>

        <li className={classes.search}>
          <form onSubmit={searchHandler}>
            <input
              type="text"
              value={text}
              placeholder="Search.."
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className={classes.searchBtn}>
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: 'green', fontSize: '18px' }}
              ></i>
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

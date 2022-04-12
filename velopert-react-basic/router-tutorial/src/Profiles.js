import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white',
    };
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink
                        style={({ isActive }) => {
                            if (isActive) {
                                return activeStyle;
                            }
                        }}
                        to='pyeonne'
                    >
                        pyeonne
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => {
                            if (isActive) {
                                return activeStyle;
                            }
                        }}
                        to='gildong'
                    >
                        gildong
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path='/' element='사용자를 선택해 주세요.' />
                <Route path=':username' element={<Profile />} />
            </Routes>
        </div>
    );
};

export default Profiles;

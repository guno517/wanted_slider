import React from 'react';
import './Header.css';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa'

export default function Header() {
    return (
        <div className='Mainbar'>
            <div className='Header'>            
                <nav className='Main'>
                    <div className='Navigation'>
                        <div className="NavBarWrapper">
                            <div className='NavBar'>
                                <AiOutlineMenu size="24"/>
                            </div>
                            <div className='Logo'>
                                <a href='/'>wanted</a>
                            </div>
                        </div>
                    </div>
                        <ul className='MenuList'>
                            <li className='Menu'>
                                <a href='/'>채용</a>
                            </li>
                            <li className='Menu'>
                                <a href='/'>이벤트</a>
                            </li>
                            <li className='Menu'>
                                <a href='/'>직군별 연봉</a>
                            </li>
                            <li className='Menu'>
                                <a href='/'>이력서</a>
                            </li>
                            <li className='Menu'>
                                <a href='/'>
                                    커뮤니티
                                    <em>New</em>
                                </a>
                            </li>
                            <li className='Menu'>
                                <a href='/'>프리랜서</a>
                            </li>
                            <li className='Menu'>
                            <a href='/'>
                                AI 합격예측
                                <em>Beta</em>
                            </a>
                            </li>
                        </ul>
                    <aside>
                        <ul className='AddOns'>
                            <li className='SearchIcon'><AiOutlineSearch size="24"/></li>
                            <li className='BellIcon'><AiOutlineBell size="24"/></li>
                            <li className='UserIcon'><FaRegUserCircle size="24"/></li>
                            <li className='ServiceButton'>
                                <button className='Service'>기업 서비스</button>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
    )
}

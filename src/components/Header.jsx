import React from 'react';
import './Header.css';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import {BsThreeDots} from 'react-icons/bs'

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
                            <li className='Menu Home'>
                                <a href='/'>홈</a>
                            </li>
                            <li className='Menu'>
                                <a href='/'>채용</a>
                            </li>
                            <li className='Menu'>
                                <a href='/'>이벤트</a>
                            </li>
                            <li className='Menu hidden800'>
                                <a href='/'>직군별 연봉</a>
                            </li>
                            <li className='Menu hidden800'>
                                <a href='/'>이력서</a>
                            </li>
                            <li className='Menu hidden800'>
                                <a href='/'>
                                    커뮤니티
                                    <em>New</em>
                                </a>
                            </li>
                            <li className='Menu hidden800'>
                                <a href='/'>프리랜서</a>
                            </li>
                            <li className='Menu hidden800'>
                            <a href='/'>
                                AI 합격예측
                                <em>Beta</em>
                            </a>
                            </li>
                        </ul>
                    <span>
                        <ul className='AddOns'>
                            <li className='SearchIcon'><AiOutlineSearch size="24"/></li>
                            <li className='BellIcon'><AiOutlineBell size="24"/></li>
                            <li className='UserIcon'><FaRegUserCircle size="24" /></li>
                            <li className="ThreeDots"><BsThreeDots size="24" /></li>
                            <li className='ServiceButton'>
                                <button className='Service'>기업 서비스</button>
                            </li>
                        </ul>
                    </span>
                </nav>
            </div>
        </div>
    )
}

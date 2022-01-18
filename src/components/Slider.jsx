import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

const Base = styled.div`
    width: 100%;
    overflow: hidden;
    @media screen and (max-width:1085px){
        width: 90%;
    }
`

const Container = styled.div`
    position: relative;
    margin: 0 calc((100% - 1210px)/2);
    margin-top: 20px;
    @media screen and (max-width:1199px){
        display: block;
        margin: 20px 0;
    }
`

const ArrowButton = styled.button`
    position: absolute;
    top: 40%;
    z-index: 10;
    user-select: none;
    width: 30px;
    height: 60px;
    align-items: center;
    border-radius: 15px;
    font-weight: bold;
    background-color: lightgray;
    border-style: none;
    opacity: 0.5;
    color: #000;
    cursor: pointer;
    @media screen and (max-width:1199px){
        display: none;
    }
    ${({ pos }) => pos === 'left' ? 
            css`
            left: calc((100% - 1210px)/2);
            ` : 
            css`
            right: calc((100% - 1210px)/2);
            `};
`;

const CarouselList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 60px;
    @media screen and (max-width:1199px){
        overflow: hidden;
    }
`;

const CarouselListItem = styled.li`
    width: 100%;
    flex: 1 0 100%;
    transform: translate3d(-${({ currentSlide }) => currentSlide * 100}%, 0px, 0px);
    -webkit-transition-duration: .5s;
    -moz-transition-duration: .5s;
    -o-transition-duration: .5s;
    transition-duration: .5s;
`;

const CarouselImage = styled.img`
    border-radius: 10px;
    @media screen and (max-width:1199px){
        width: 1040px;
        height: 183px;
        object-fit: none;
    }
    @media screen and (min-width:760px) and (max-width:1085px) {
    }
`;

const InfoBox = styled.div`
    width: 330px;
    height: 146px;
    background-color: white;
    color: black;
    border-radius: 10px;
    position: absolute;
    top: 130px;
    left: 60px;
    padding-bottom: 5px;
    @media screen and (max-width:1199px){
        position: relative;
        top: 0;
        text-align: center;
        width: 90%;
        margin: 0;
        padding: 0;
        hr{
            display: none;
        }
    }
`;

const BannerTitle = styled.h2`
    margin-left: 15px;
`;

const BannerSubTitle = styled.h4`
    margin-top: 0;
    margin-left: 15px;
    font-weight: 500;
`;

const BannerUrl = styled.a`
    margin-left: 15px;
    color: blue;
    font-weight: 700;
`

const banners = [
    ['https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg', "마케터를 위한 데이터", "잘 나가는 마케터는 무엇이 다를까!?"], // 1
    ['https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg', "개발자 성장 비결 공개!", "Velog, 글 쓰는 개발자들의 이야기"], // 2
    ['https://static.wanted.co.kr/images/banners/1454/e504b006.jpg', "포트폴리오를 부탁해!", "디자이너의 포폴 살펴보기"], // 3
    ['https://static.wanted.co.kr/images/banners/1453/7a978579.jpg', "2022년 달라지는 노동법령", "노무관리 쟁점 한 눈에 파악하기"], // 4
    ['https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg', "성과를 내는 마케팅", "실제 사례를 공개합니다!"], // 5
];


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isFocused, setIsFocused] = useState(false);
    //const [needTransition, setNeedTransition] = useState(true);

    const totalSlides = banners.length;
    const slideRef = useRef();

    const handleNext = () => {
        setCurrentSlide(currentSlide => (currentSlide + 1) % totalSlides);
        /*if (currentSlide >= totalSlides - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }*/
        let outerSlide = currentSlide % totalSlides; // 마지막 사진 -> 첫번째 사진으로 이어지는 슬라이더
    }
    const handlePrev = () => {
        setCurrentSlide(currentSlide - 1);
        if (currentSlide === 0) {
            setCurrentSlide(totalSlides - 1)
        }
        let outerSlide = currentSlide % totalSlides; // 첫번째 사진 -> 마지막 사진으로 이어지는 슬라이더
    };

    const handleMouseEnter = () => setIsFocused(true);
    const handleMouseLeave = () => setIsFocused(false);

     useEffect(() => { // 슬라이더 자동으로 옮겨지는 함수
        let intervalId;

        if (!isFocused) {
            intervalId = setInterval(handleNext, 5000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isFocused]);

    return (
        <Base>
            <Container>
            <CarouselList className='CarouselList' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {banners.length && <ArrowButton pos="left" onClick={handlePrev}>
                        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                        </svg>
                </ArrowButton>}
                {
                    banners.map((value, index) => (
                        <CarouselListItem className='CarouselListItem' currentSlide={currentSlide} key={index} ref={slideRef}>
                            <CarouselImage src={value[0]} alt="/" />
                                <InfoBox>
                                    <BannerTitle>{value[1]}</BannerTitle>
                                <BannerSubTitle>{value[2]}</BannerSubTitle>
                                <hr />
                                <BannerUrl href='/'>바로가기 &gt; </BannerUrl>
                                </InfoBox>
                        </CarouselListItem>
                    ))
                    }
                {banners.length && <ArrowButton pos="right" onClick={handleNext}>
                    <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                </ArrowButton>}
            </CarouselList>
            </Container>
        </Base>
    )
}

export default Carousel;
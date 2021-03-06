import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

const Base = styled.div`
    width: 100%;
    overflow: hidden;
    @media screen and (max-width:1085px){
        border-top: 1px solid rgb(0 0 0 / 30%);
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
    ${({ pos }) => pos === 'left' ? 
        css`
        left: calc((100% - 1210px)/2);
        ` : 
        css`
        right: calc((100% - 1210px)/2);
        `
    };
    @media screen and (max-width:1199px){
        top: 20%;
        ${({ pos }) => pos === 'left' ? 
            css`
            left: 0;
            ` : 
            css`
            right: 0;
            `
        }
    }
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
        width: inherit;
        max-width: 100%;
        height: 183px;
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
        width: 100%;
        text-align: center;
        justify-content: center;
        max-width: 100%;
        margin: 0;
        padding: 0;
        left: 0;
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
    ['https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg', "???????????? ?????? ?????????", "??? ????????? ???????????? ????????? ?????????!?"], // 1
    ['https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg', "????????? ?????? ?????? ??????!", "Velog, ??? ?????? ??????????????? ?????????"], // 2
    ['https://static.wanted.co.kr/images/banners/1454/e504b006.jpg', "?????????????????? ?????????!", "??????????????? ?????? ????????????"], // 3
    ['https://static.wanted.co.kr/images/banners/1453/7a978579.jpg', "2022??? ???????????? ????????????", "???????????? ?????? ??? ?????? ????????????"], // 4
    ['https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg', "????????? ?????? ?????????", "?????? ????????? ???????????????!"], // 5
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isFocused, setIsFocused] = useState(false);

    const totalSlides = banners.length;
    const slideRef = useRef();

    const handleNext = useCallback(() => {
        setCurrentSlide(currentSlide => (currentSlide + 1) % totalSlides);
    },[totalSlides])
    const handlePrev = () => {
        setCurrentSlide(currentSlide - 1);
        if (currentSlide === 0) {
            setCurrentSlide(totalSlides - 1)
        }
    };

    const handleMouseEnter = () => setIsFocused(true);
    const handleMouseLeave = () => setIsFocused(false);

    useEffect(() => { // ???????????? ???????????? ???????????? ??????
        let intervalId;

        if (!isFocused) {
            intervalId = setInterval(handleNext, 5000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [handleNext, isFocused]);
    return (
        <Base>
            <Container>
                <CarouselList className='CarouselList'
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

                    ref = {slideRef}
                >
                {banners.length && <ArrowButton pos="left" onClick={handlePrev}>
                        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                        </svg>
                </ArrowButton>}
                {
                    banners.map((value, index) => (
                        <CarouselListItem className='CarouselListItem' currentSlide={currentSlide} key={index} >
                            <CarouselImage src={value[0]} alt="/" />
                                <InfoBox>
                                    <BannerTitle>{value[1]}</BannerTitle>
                                <BannerSubTitle>{value[2]}</BannerSubTitle>
                                <hr />
                                <BannerUrl href='/'>???????????? &gt; </BannerUrl>
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

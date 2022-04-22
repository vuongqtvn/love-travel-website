import styled, { keyframes } from "styled-components";
import { colors } from "../../../../theme/colors";

const AnimatedImage = keyframes`
 0% {
    background-position: -200px 0;
  }
  to {
    background-position: calc(200px + 100%) 0;
  }
`;

export const PlaceTop = styled.div`
  padding: 8px;
  margin-bottom: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  position: relative;
  @media (max-width: 991px) {
    margin-bottom: 6px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  }
`;

export const PlaceTopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 8px;
  h1 {
    @media (max-width: 991px) {
      font-size: 22px;
      font-weight: 600;
    }
  }
  .place-action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    .place-saved {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      width: 40px;
      height: 40px;
      font-size: 22px;
      margin-bottom: -8px;
      background: ${colors.white};
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 20px;
      border-radius: 4px;
      color: ${colors.primary};
    }
    @media (max-width: 991px) {
      padding: 2px 0;
      margin-top: -4px;
      margin-bottom: -2px;
    }
  }
`;
export const PlaceTopAddress = styled.div`
  font-size: 16px;
  padding-left: 8px;
  p {
    padding: 0;
    margin: 0;
  }
  .place-intro {
    margin-bottom: 4px;
    margin-right: 40px;
  }
  @media (max-width: 991px) {
    font-size: 14px;
    .place-intro {
      display: none;
    }
  }
`;
export const PlaceTopGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  background-color: ${colors.white};
  border-radius: calc(10px - 4px);
  a {
    color: inherit;
    text-decoration: none;
    .contributePhoto {
      position: absolute;
      top: auto;
      right: auto;
      bottom: 10px;
      left: 10px;
      cursor: pointer;
      font-size: 16px;
      opacity: 1;
      padding: 4px 10px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.6666666666666666);
      border-radius: 10px;
      box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
      transition: all 0.15s ease;
      i {
        padding-right: 4px;
      }
    }
  }
  div {
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
  .place-one {
    background-image: url("https://toidicafe.vn/static/images/place/jouri-dessert-tea/e5872b69-fbd5-4672-8daa-a4a8f501e0b9.jpg?w=960");
  }

  .place-two {
    background-image: url("https://toidicafe.vn/static/images/place/jouri-dessert-tea/0610fa02-8dd2-4f1c-b953-7723d174d297.jpg?w=960");
  }

  .place-one,
  .place-two {
    margin-right: 5px;
  }

  .place-three {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${colors.white};

    & > div {
      width: 100%;
      background-color: ${colors.grey};
    }
    .place-three-one {
      margin-bottom: 5px;
      flex-grow: 4;
      background-image: url("https://toidicafe.vn/static/images/place/jouri-dessert-tea/f82cd075-a719-46c9-ab58-0b805b4d0ec3.jpg?w=960");
    }
    .place-three-two {
      background-color: ${colors.white};
      flex-grow: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        height: 100%;
        flex: 1;
        background-color: ${colors.grey};
      }
      & > div:first-child {
        margin-right: 4px;
        background-image: url("https://toidicafe.vn/static/images/place/jouri-dessert-tea/ba9d44b9-163d-4eb9-bb05-ef8f5757d09a.jpg?w=960");
      }
      & > div:last-child {
        background-image: url("https://toidicafe.vn/static/images/place/jouri-dessert-tea/e4048f16-9c9f-4473-9fbc-7512c9f1a319.jpg");
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 20px;
          font-weight: 500;
          color: #fff;
          z-index: 1;
        }
        ::after {
          opacity: 0.9;
        }
      }
    }
  }

  .place-one,
  .place-two,
  .place-three {
    height: 355px;
    flex: 1;
    background-color: ${colors.grey};
  }
  .place-one,
  .place-two,
  .place-three-one,
  .place-three-two > div {
    position: relative;
    transition: all 0.15s ease;
    ::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: rgba(0, 0, 0, 0.4);
      transition: all, 0.25s ease-in-out;
    }
    :hover::after {
      opacity: 1;
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const PlaceTopGalleryMobile = styled.div`
  position: relative;
  display: none;
  margin: 8px -4px -4px;
  background-color: ${colors.white};
  border-radius: calc(10px - 4px);
  overflow: hidden;
  .keen-slider {
    .lazy__slide {
      background-color: #eee;
      background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
      background-size: 200px 100%;
      background-repeat: no-repeat;
      animation: ${AnimatedImage} 1.2s ease-in-out infinite;
      border-radius: calc(10px - 4px);
      .place__image {
        height: 350px;
        border-radius: calc(10px - 4px);
        img {
          background-position: 50%;
          background-size: cover;
          height: 100%;
          width: 100%;
          object-fit: cover;
          image-rendering: -webkit-optimize-contrast;
          border-radius: calc(10px - 4px);
        }
        @media (max-width: 767px) {
          height: 280px;
        }
      }
    }
  }
  a {
    .view-all {
      position: absolute;
      top: auto;
      right: auto;
      bottom: 10px;
      left: 10px;
      display: block;
      color: #fff;
      background: #000;
      padding: 4px 6px;
      opacity: 0.8;
      border-radius: 10px;
      cursor: pointer;
      z-index: 1;
    }
  }
  .total-photo {
    position: absolute;
    top: auto;
    right: 10px;
    bottom: 10px;
    left: auto;
    display: block;
    cursor: pointer;
    color: #fff;
    background: #000;
    padding: 4px 6px;
    opacity: 0.8;
    border-radius: 10px;
    z-index: 1;
  }
  @media (max-width: 991px) {
    display: block;
  }
`;

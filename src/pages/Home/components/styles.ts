import styled from "styled-components";
import { images } from "../../../assets";
import { mediaScreen } from "../../../constants/mediaScreen";
import { colors } from "../../../theme/colors";

export const HomeWrapper = styled.div`
  overflow-x: hidden;
`;

export const HomeSection = styled.section`
  padding-bottom: 36px;
  @media (max-width: 991px) {
    padding-bottom: 2px;
  }
`;

export const HomeContainer = styled.section`
  width: 100%;
  margin: auto;
  padding: 0 16px;
  @media (min-width: 1280px) {
    width: 1200px;
  }
  @media (max-width: 991px) {
    padding: 0;
    padding-left: 10px;
  }
`;

export const HomeTitle = styled.h2`
  position: relative;
  text-align: center;
  margin: 40px 0;
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 991px) {
    font-size: 20px;
    padding-left: 4px;
    border-left: 4px solid ${colors.primary};
    text-align: left;
    margin: 14px 0 10px 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: auto;
    right: 0;
    bottom: -10px;
    left: 0;
    width: 90px;
    height: 2px;
    margin: 0 auto;
    border-radius: 6px;
    background: ${colors.primary};
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

// * Search Home

export const HomeHero = styled.section`
  position: relative;
  display: flex;
  z-index: 2;
  color: ${colors.white};
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url(${images.hero}) no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 500px;
  @media (max-width: 991px) {
    height: 240px;
  }
  @media (max-width: 767px) {
    height: 180px;
  }
`;

export const HeroContent = styled.div`
  &::before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: 2;
    background: ${colors.mask};
    pointer-events: none;
    transition: all 0.2s ease-out;
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const HeroContentTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 991px) {
    margin-bottom: 20px;
    margin-top: -10px;
  }
  h1 {
    color: ${colors.white};
    font-size: 40px;
    text-transform: capitalize;
    @media (max-width: 991px) {
      font-size: 20px;
    }
  }
  h3 {
    color: ${colors.grey};
    @media (max-width: 991px) {
      display: none;
      font-size: 12px;
    }
  }
`;

export const HeroSearch = styled.form`
  display: flex;
  position: relative;

  .search-input {
    display: block;
    width: 100%;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    overflow: hidden;
    @media (max-width: 991px) {
      font-size: 24px;
      margin: 0;
      padding-right: 10px;
    }
    .icon {
      display: none;
      @media (max-width: 991px) {
        position: absolute;
        top: 5px;
        right: auto;
        bottom: 0;
        left: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-size: 16px;
        color: ${colors.black};
      }
    }
    input {
      width: 100%;
      height: 65px;
      font-size: 20px;
      letter-spacing: 0.3px;
      line-height: 1.5;
      padding: 20px 60px 20px 20px;
      border: 0;
      outline: none;
      color: ${colors.textInput};
      background: ${colors.white};
      background-clip: padding-box;
      @media (max-width: 991px) {
        height: 50px;
        font-size: 16px;
        padding: 10px 20px 10px 20px;
        border-radius: 24px;
      }
    }
  }
  .search-btn {
    height: 100%;
    @media (max-width: 991px) {
      display: none;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.white};
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      border-radius: 10px;
      transition: all 0.15s ease;
      font-size: 20px;
      font-weight: 600;
      height: 65px;
      width: 200px;
      box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
      cursor: pointer;
      &:hover {
        color: ${colors.white};
        background-color: ${colors.hover};
      }
    }
  }
`;

export const SearchListResult = styled.div`
  display: block;
  border-top: 2px ${colors.black} solid;
  width: 100%;
  color: ${colors.black};
  background: ${colors.white};
  padding: 14px 0;
  @media (max-width: 991px) {
    display: none;
  }
  .search-all {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 24px;
    cursor: pointer;
    color: inherit;
    &:hover {
      color: ${colors.black};
      background: ${colors.grey};
    }
    span {
      font-size: 18px;
      font-weight: 500;
      display: inline-flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
  }
  .title {
    padding: 4px 16px;
    font-size: 18px;
    font-weight: 700;
  }
  .list-place {
    .list-place-item {
      position: relative;
      color: ${colors.black} !important;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      padding: 8px 24px;
      .place-image {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 4px;
        overflow: hidden;
      }
      .place-info {
        flex: 1;
        .place-info-name {
          font-size: 18px;
          font-weight: 500;
        }
        .place-info-desc {
          font-size: 14px;
          color: #6b6b6b;
        }
      }
    }
  }
`;

// * Categories Home
// * Regions Home
export const RegionContent = styled.div`
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  text-align: left;
  color: ${colors.white};
  padding: 16px 20px;
  border-radius: 10px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.9));
  z-index: 2;
  h3 {
    font-size: 24px;
    font-weight: 700;
    color: ${colors.white};
    margin: 0;
    padding: 0;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

// * Place Home
export const PlaceList = styled.div`
  display: grid;
  padding-bottom: 20px;
  justify-content: flex-start;
  grid-auto-columns: 67.5%;
  grid-auto-flow: column;
  overflow: auto;
  grid-gap: 10px;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  touch-action: manipulation;
  scroll-padding: 0;
  padding-right: 10px;

  grid-template-columns: unset;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  & > * {
    scroll-snap-align: start;
  }
  @media ${mediaScreen.md} {
    grid-auto-columns: 40%;
  }
  @media ${mediaScreen.lg} {
    all: unset;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 20px;
  }
`;

// * Suggest Place
export const HomeSuggest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    margin-top: -6px;
    margin-bottom: 10px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
  }
  .image {
    width: 220px;
    @media (max-width: 991px) {
      width: 124px;
    }
  }
  .content {
    text-align: center;
    h3 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    span {
      display: inline-flex;
      margin: 0 auto;
      cursor: pointer;
      button {
        display: inline-flex;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.white};
        background-color: ${colors.primary};
        border-color: ${colors.primary};
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
    }
    @media (max-width: 991px) {
      padding: 20px 10px 20px 0;
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        button {
          font-size: 12px;
          height: 30px;
          line-height: 30px;
          padding: 0 14px;
        }
      }
    }
  }
`;

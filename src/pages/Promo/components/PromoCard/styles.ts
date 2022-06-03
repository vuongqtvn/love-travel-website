import styled from "styled-components";

export const PromoCard = styled.div`
  margin: 0 12px 24px;
  position: relative;
  display: block;
  cursor: pointer;
  color: inherit;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  -webkit-transition: color 0.15s ease, border-color 0.15s ease;
  transition: color 0.15s ease, border-color 0.15s ease;
  @media (max-width: 991px) {
    margin: 0 16px 12px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
  }
  .card-image {
    width: 100%;
    background-color: #eee;
    background-image: -webkit-linear-gradient(left, #eee, #f5f5f5, #eee);
    background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    -webkit-animation: Promo_loading-image-animation__dHF7Q 1.2s ease-in-out
      infinite;
    animation: Promo_loading-image-animation__dHF7Q 1.2s ease-in-out infinite;
    border-radius: 10px;
    overflow: hidden;
    height: 240px;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-body {
    padding: 2px 15px;
    .spec {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #e03;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 1px solid #ebebeb;
      padding: 8px 0 9px;
    }
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 18px;
      font-weight: 700;
      padding: 6px 0 0;
    }
    .text {
      color: #000;
      font-size: 14px;
      padding-bottom: 6px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

import styled from "styled-components";

export const ProfileUserReview = styled.div`
  padding: 20px 0 0 20px;
  @media (max-width: 991px) {
    padding: 0;
  }
  .box {
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    background-color: #fff;
  }
`;

export const ProfileEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  margin: 40px 20px;
  img {
    height: 180px;
    margin-bottom: 20px;
    vertical-align: middle;
    border-style: none;
  }
  span {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
  }
`;

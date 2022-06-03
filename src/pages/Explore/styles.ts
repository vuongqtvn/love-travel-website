import styled from "styled-components";

export const ExploreWrapper = styled.div`
  padding: 15px 0;
  .center {
    text-align: center;
    padding: 15px 0;
  }
  .list-image {
    padding: 20px 0;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    /* grid-template-rows: repeat(2, 200px); */
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    .list-item {
      position: relative;
      padding-top: 100%;
      border-radius: 8px;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: all linear 0.3s;
      }
      &:hover img {
        transform: scale(1.2);
        transition: all linear 0.3s;
      }
    }
  }
`;

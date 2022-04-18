import styled from "styled-components";

export const SortSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .search-title {
    font-size: 18px;
    small {
      cursor: pointer;
      margin: 0 8px;
      font-weight: 700;
    }
  }
  .search-sort {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 16px;
  }
  @media (max-width: 991px) {
    padding: 0 6px;
    margin-bottom: 6px;
    .search-title {
      font-size: 16px;
      small {
        display: block;
        margin: 0;
      }
    }
    .search-sort {
      display: none;
    }
  }
`;

import styled, { keyframes } from "styled-components";

const Skeleton = keyframes`
  0% {
      background-position: -200px 0;
  }
  to {
    background-position: -webkit-calc(200px + 100%) 0;
    background-position: calc(200px + 100%) 0;
  }
`;

interface ImageProps {
  height?: string;
  width?: string;
  radius?: string;
}

export const ImageWrapper = styled.div<ImageProps>`
  position: relative;
  height: ${({ height }) => (height ? height : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: ${({ radius }) => (radius ? radius : 0)};
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  animation: ${Skeleton} 1.2s ease-in-out infinite;
  overflow: hidden;
  &.hover:hover {
    img {
      box-shadow: 0 4px 10px rgb(27 27 27 / 20%);
      transform: scale3d(1.1, 1.1, 1.1) translateZ(0);
      @media (max-width: 991px) {
        transform: translateZ(0);
      }
    }
  }
  .card-image {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .card-lazy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        border-radius: ${({ radius }) => (radius ? radius : 0)};
        transition: transform 1.5s cubic-bezier(0, 0, 0.2, 1),
          opacity 0.5s linear;
        &.active {
          opacity: 1;
        }
      }
    }
  }
`;

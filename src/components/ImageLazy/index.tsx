/* eslint-disable react-hooks/exhaustive-deps */
import React, { CSSProperties, useEffect, useRef } from "react";
import * as Styled from "./styles";

type Props = {
  src: string;
  alt: string;
  style?: CSSProperties;
  radius?: string;
  height?: string;
  width?: string;
  className?: string;
  children?: JSX.Element;
};

const ImageLazy = (props: Props) => {
  const imgRef = useRef<any>(null);

  useEffect(() => {
    const img = imgRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute("src", props.src);
        img.classList.add("active");
      }
    });

    if (img) {
      observer.observe(img);
    }
    return () => {
      if (img) {
        observer.unobserve(img);
      }
    };
  }, []);
  return (
    <Styled.ImageWrapper
      radius={props.radius}
      width={props.width}
      height={props.height}
      style={props.style}
      className={props.className}
    >
      <div className="card-image">
        <div className="card-lazy">
          <img ref={imgRef} alt={props.alt} />
        </div>
      </div>
      {props.children}
    </Styled.ImageWrapper>
  );
};

export default ImageLazy;

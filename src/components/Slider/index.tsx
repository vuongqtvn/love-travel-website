import React, { CSSProperties } from "react";
import { useKeenSlider } from "keen-slider/react";

import * as Styled from "./styles";
import ImageLazy from "../ImageLazy";
import { mediaScreen } from "../../constants/mediaScreen";
import { SlideItemType } from "../../types";

interface Props {
  renderContent?: (item: SlideItemType) => any;
  data: SlideItemType[];
  height?: string;
  width?: string;
  radius?: string;
  onClick?: (item: SlideItemType) => any;
  style?: CSSProperties;
  item: {
    xxl?: number;
    xl?: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
  spacing: {
    xxl?: number;
    xl?: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
}

const Slider = ({
  data,
  onClick,
  height,
  width,
  item,
  spacing,
  renderContent,
  style,
  radius,
}: Props) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        [mediaScreen.xs]: {
          slides: { perView: item.xs, spacing: spacing.xs },
        },
        [mediaScreen.sm]: {
          slides: { perView: item.sm, spacing: spacing.sm },
        },
        [mediaScreen.md]: {
          slides: { perView: item.md, spacing: spacing.md },
        },
        [mediaScreen.lg]: {
          slides: { perView: item.lg, spacing: spacing.lg },
        },
        [mediaScreen.xl]: {
          slides: {
            perView: item.xl ? item.xl : item.lg,
            spacing: spacing.xl ? spacing.xl : spacing.lg,
          },
        },
        [mediaScreen.xxl]: {
          slides: {
            perView: item.xxl ? item.xxl : item.xl ? item.xl : item.lg,
            spacing: spacing.xxl ? spacing.xxl : item.xl ? item.xl : item.lg,
          },
        },
      },
      slides: { perView: 1 },
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <Styled.Slider ref={sliderRef} className="keen-slider">
      {data.map((item, key) => {
        return (
          <Styled.Slide
            style={style}
            key={key}
            onClick={() => onClick && onClick(item)}
            className="keen-slider__slide"
          >
            <ImageLazy
              src={item.image}
              width={width}
              height={height}
              radius={radius || "10px"}
              alt={item.name}
            />
            {renderContent && renderContent(item)}
          </Styled.Slide>
        );
      })}
    </Styled.Slider>
  );
};

export default Slider;

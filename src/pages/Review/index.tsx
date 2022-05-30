import { Container, SearchModal, Section } from "../../components";
import ReviewForm from "./components/ReviewForm";
import { EnvironmentOutlined } from "@ant-design/icons";
import * as Styled from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import path from "../../constants/path";
import { setPlaceReview } from "./reviewSlice";

type Props = {};

const Review = (props: Props) => {
  const dispatch = useAppDispatch();
  const { placeSelected } = useAppSelector((state) => state.review);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(setPlaceReview(null));
    };
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Styled.NewReview>
          <div className="header">
            <h1>Viết Review</h1>
          </div>
          <div className="content">
            <ReviewForm />
            <div className="review-place">
              <div className="review-input">
                <h3>Địa điểm</h3>
                {placeSelected ? (
                  <Styled.NewReviewPlace>
                    <div className="image">
                      <img
                        src={placeSelected.thumbnail}
                        alt={placeSelected.name}
                      />
                    </div>
                    <div className="place-info">
                      <Link to={`${path.place}/${placeSelected._id}`}>
                        {placeSelected.name}
                      </Link>
                      <div className="address">{placeSelected.address}</div>
                      <div className="rate">
                        <i className="fas fa-star"></i>
                        <span> Chưa có đánh giá</span>
                      </div>
                      <div
                        className="close"
                        onClick={() => dispatch(setPlaceReview(null))}
                      >
                        <i className="fa-solid fa-x"></i>
                      </div>
                    </div>
                  </Styled.NewReviewPlace>
                ) : (
                  <div
                    className="review-select-place"
                    onClick={() => setOpen(true)}
                  >
                    <span>
                      <EnvironmentOutlined /> Nhấn vào đây để chọn địa điểm
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Styled.NewReview>
      </Container>
      {open && (
        <SearchModal
          title="Chọn địa điểm đánh giá"
          onClose={() => setOpen(false)}
        />
      )}
    </Section>
  );
};

export default Review;

import { Container, SearchModal, Section } from "../../components";
import ReviewForm from "./components/ReviewForm";
import { EnvironmentOutlined } from "@ant-design/icons";
import * as Styled from "./styles";
import { useState } from "react";

type Props = {};

const Review = (props: Props) => {
  const [open, setOpen] = useState(false);

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
                <div
                  className="review-select-place"
                  onClick={() => setOpen(true)}
                >
                  <span>
                    <EnvironmentOutlined /> Nhấn vào đây để chọn địa điểm
                  </span>
                </div>
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

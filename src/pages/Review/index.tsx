import { Container, Section } from "../../components";
import ReviewForm from "./components/ReviewForm";
import { EnvironmentOutlined } from "@ant-design/icons";
import * as Styled from "./styles";

type Props = {};

const Review = (props: Props) => {
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
                <div className="review-select-place">
                  <span>
                    <EnvironmentOutlined /> Nhấn vào đây để chọn địa điểm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Styled.NewReview>
      </Container>
    </Section>
  );
};

export default Review;

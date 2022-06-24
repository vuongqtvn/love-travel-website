import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../api";
import { images } from "../../assets";
import {
  FeedCard,
  FeedCardLoading,
  ImageLazy,
  ReviewModal,
} from "../../components";
import * as Styled from "./styles";

const ReviewDetail = () => {
  const { id } = useParams();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updateReview, setUpdateReview] = useState<any>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient
        .get(`/post/${id}`)
        .then((data: any) => {
          setReview(data.post);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  const openUpdate = (review: any) => {
    setUpdateReview(review);
  };

  return (
    <Styled.ReviewDetailWrapper>
      <Styled.ReviewDetailHeader />
      <Styled.ReviewDetailContainer>
        <Styled.ReviewDetailContent>
          {loading ? (
            <FeedCardLoading />
          ) : (
            review && <FeedCard openUpdate={openUpdate} feed={review} />
          )}
        </Styled.ReviewDetailContent>
        <Styled.ReviewDetailSidebar>
          <ImageLazy height="300px" hover={false} src={images.ads} alt="ads" />
        </Styled.ReviewDetailSidebar>
      </Styled.ReviewDetailContainer>
      {Boolean(updateReview) && (
        <ReviewModal
          mode="update"
          review={updateReview}
          onClose={() => {
            setUpdateReview(null);
          }}
        />
      )}
    </Styled.ReviewDetailWrapper>
  );
};

export default ReviewDetail;

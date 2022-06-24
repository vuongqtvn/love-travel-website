import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";
import Box from "../Box";

const ShareModal = ({ url }: { url: string }) => {
  return (
    <Box justifyContent="flex-end" gap="10px">
      <FacebookShareButton url={url}>
        <FacebookIcon round={true} size={32} />
      </FacebookShareButton>
      <EmailShareButton url={url}>
        <EmailIcon round={true} size={32} />
      </EmailShareButton>
    </Box>
  );
};

export default ShareModal;

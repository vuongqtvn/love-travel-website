import { Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";
import { colors } from "../../theme/colors";
import Box from "../Box";
import * as Styled from "./styles";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Styled.FooterWrapper>
      <Styled.FooterTop>
        <Styled.FooterContainer>
          <Row>
            <Col lg={8}>
              <Box>
                <Link to="/">
                  <img height="60px" src={images.logo} alt="logo" />
                </Link>
              </Box>
              <Box
                style={{
                  marginTop: 20,
                }}
              >
                <Link to="/contact">
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    gap="10px"
                    style={{
                      backgroundColor: colors.primary,
                      borderRadius: 10,
                      padding: "6px 12px",
                      color: colors.white,
                    }}
                  >
                    <img src={images.contact} alt="" />
                    <span>Hợp tác với chúng tôi</span>
                  </Box>
                </Link>
              </Box>
            </Col>
            <Col lg={8}>
              <Styled.FooterMenu>
                <Typography.Title
                  level={4}
                  style={{ fontWeight: "bold" }}
                  ellipsis
                >
                  VỀ CHÚNG TÔI
                </Typography.Title>
                <Box flexDirection="column" gap="5px">
                  <Link to="/about">
                    <Typography.Text strong>Giới thiệu</Typography.Text>
                  </Link>

                  <Link to="/contact">
                    <Typography.Text strong>Giải đáp thắc mắc</Typography.Text>
                  </Link>

                  <Link to="/contact">
                    <Typography.Text strong> Liên hệ góp ý</Typography.Text>
                  </Link>

                  <Link to="/contact">
                    <Typography.Text strong>Điều khoản sử dụng</Typography.Text>
                  </Link>
                </Box>
              </Styled.FooterMenu>
            </Col>
            <Col lg={8}>
              <Styled.FooterMenu>
                <Typography.Title
                  level={4}
                  style={{ fontWeight: "bold" }}
                  ellipsis
                >
                  THEO DÕI CHÚNG TÔI TRÊN
                </Typography.Title>
                <Box flexDirection="column" gap="5px">
                  <a href="/about">
                    <Box
                      flexDirection="row"
                      alignItems="center"
                      gap="5px"
                      style={{
                        fontSize: 16,
                      }}
                    >
                      <FacebookFilled style={{ color: colors.black }} />
                      <Typography.Text strong>Facebook</Typography.Text>
                    </Box>
                  </a>

                  <a href="/about">
                    <Box
                      flexDirection="row"
                      alignItems="center"
                      gap="5px"
                      style={{
                        fontSize: 16,
                      }}
                    >
                      <GithubFilled style={{ color: colors.black }} />
                      <Typography.Text strong>Github</Typography.Text>
                    </Box>
                  </a>

                  <a href="/about">
                    <Box
                      flexDirection="row"
                      alignItems="center"
                      gap="5px"
                      style={{
                        fontSize: 16,
                      }}
                    >
                      <LinkedinFilled style={{ color: colors.black }} />
                      <Typography.Text strong>Linkedin</Typography.Text>
                    </Box>
                  </a>
                </Box>
              </Styled.FooterMenu>
            </Col>
          </Row>
        </Styled.FooterContainer>
      </Styled.FooterTop>
      <Styled.FooterBottom>
        <Box
          justifyContent="center"
          style={{
            padding: "10px 0",
            fontSize: 16,
            color: colors.white,
          }}
        >
          <Typography.Text strong>
            Bản quyền © 2022 <Link to="/">Love Travel</Link>
          </Typography.Text>
        </Box>
      </Styled.FooterBottom>
    </Styled.FooterWrapper>
  );
};

export default Footer;

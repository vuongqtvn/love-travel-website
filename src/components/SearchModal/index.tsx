import { Spin } from "antd";
import React, { useState } from "react";
import * as Styled from "./styles";

const SearchModal = ({
  title = "Chọn địa điểm đánh giá",
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => {
  const [search, setSearch] = useState("");
  return (
    <Styled.SearchModalOverlay>
      <Styled.SearchModalWrapper>
        <Styled.SearchModal>
          <Styled.ModalHeader>
            <div className="modal-title">
              <h2>{title}</h2>
            </div>
            <div className="modal-close" onClick={onClose}>
              <i className="bx bx-x"></i>
            </div>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <div className="search">
              <div className="search-header">
                <div className="search-box">
                  <div className="search-input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Tìm kiếm địa điểm"
                    />
                  </div>
                  {true ? (
                    <div className="spin">
                      <Spin size="small" />
                    </div>
                  ) : (
                    search && (
                      <button onClick={() => setSearch("")}>
                        <i className="bx bx-x"></i>
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="search-content">Search Body</div>
            </div>
          </Styled.ModalBody>
        </Styled.SearchModal>
      </Styled.SearchModalWrapper>
    </Styled.SearchModalOverlay>
  );
};

export default SearchModal;

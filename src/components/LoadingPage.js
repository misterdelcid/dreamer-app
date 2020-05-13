import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import styled from "styled-components";

const LoadingPage = () => (
  <StyledLoading>
    <StyledLoadingDiv>
      <StyledLogo />
      <StyledLoadingMessage>Dream.r</StyledLoadingMessage>
    </StyledLoadingDiv>
    <StyledProgress />
  </StyledLoading>
);

const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #eee;
`;

const StyledLogo = styled(FilterDramaIcon)`
  &&& {
    font-size: 100px;
    margin-right: 16px;
    color: #ff6a00;
  }
`;

const StyledLoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  height: 200px;
  color: #212121;
  font-size: 80px;
  font-weight: 500;
  background-image: linear-gradient(to right, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledLoadingDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StyledProgress = styled(CircularProgress)`
  &&& {
    color: #ee0979;
    font-size: 150px;
  }
`;

export default LoadingPage;
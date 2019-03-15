import React from "react";
import styled from "styled-components";

export default function HomePage() {
  const HomeContainer = styled.div`
    width: 335px;
    margin: 0 auto;
  `
  return (
    <HomeContainer>
      <h1>Hello from Homepage!</h1>
    </HomeContainer>
  );
}

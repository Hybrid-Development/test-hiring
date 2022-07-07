import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  /* width: 600px; */
  /* height: 600px; */

  .slider-container {
    height: 600px;
    width: 600px;
  }
`;

export const SliderItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

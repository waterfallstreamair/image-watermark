import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: 2em;
  margin-left: 1em;
  padding: 0px;
`;

export const ItemWrapper = styled.div`
  position: absolute;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

export const ImageArea = styled.div`
  min-width: 1024px;
  min-height: 576px;
  background-color: #cccccc;
  margin: 0px;
  padding: 0px;
`;

export const CropWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: flex-end;
  align-content: center;
  padding: 2em;
`;

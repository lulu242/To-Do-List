import styled from 'styled-components';
import { Icon } from '@iconify/react';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eeeeee;
  height: 177px;
  width: 350px;
  position: absolute;
  top: 65%;
  border-radius: 10px;
`;

const IconContainter = styled.div`
  width: ${(props) => (props.width ? props.width : '200px')};
  display: flex;
  justify-content: ${(props) => props.content};
  align-items: center;
  margin: ${(props) => props.margin};
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  background-color: ${(props) => props.color};
  width: 131px;
  height: 58px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
`;

function Correction() {
  return (
    <ModalContainer>
      <IconContainter width="290px" content="space-between">
        <Button color="#00ADB5">수정하기</Button>
        <Button color="#393E46">삭제하기</Button>
      </IconContainter>
      <IconContainter></IconContainter>
    </ModalContainer>
  );
}

export default Correction;

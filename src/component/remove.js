import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import {RemoveToDo} from '../actions/index'

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eeeeee;
  height: 204px;
  width: 350px;
  border-radius: 10px;
  margin-top: auto;
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

function Correction({ setModal, id }) {
  const dispatch = useDispatch()
  return (
    <ModalContainer>
      <IconContainter width="290px" content="space-between" margin="20px 0px 0px 0px">
        <Button color="#00ADB5"
        onClick={(e) => {
          setModal(false)
          }}>수정하기</Button>
        <Button color="#393E46" onClick={(e) => {
          setModal(false)
          dispatch(RemoveToDo(id))
        }}>삭제하기</Button>
      </IconContainter>
      <IconContainter content="center" margin="20px 0px 0px 0px" onClick={() => setModal(false)}>
      <Icon
              icon="bxs:x-circle"
              color="white"
              width="60"
              height="60"
            />
      </IconContainter>
    </ModalContainer>
  );
}

export default Correction;

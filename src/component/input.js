import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { addToDo, ModalSet } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eeeeee;
  height: 204px;
  width: 350px;
  margin-top: auto;
  border-radius: 10px
  `;
  
const IconContainter = styled.div`
  width: ${(props) => (props.width ? props.width : '200px')};
  display: flex;
  justify-content: ${(props) => props.content};
  align-items: center;
  margin: ${(props) => props.margin};
`;

function InputModal() {
  const [input, setInput] = useState('');
  const modal = useSelector(state => state.modalReducer)
  const dispatch = useDispatch();

  return (
    <>
      { modal ? (
        <ModalContainer>
          <textarea placeholder="할 일을 입력 후, Enter를 눌러주세요"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
          <IconContainter content="space-between">
            <Icon icon="bxs:plus-circle" color="#00adb5" width="60" height="60" onClick={(e) => {
                dispatch(addToDo(input));
                setInput('')
                dispatch(ModalSet(!modal))}}/>
            <Icon
              icon="bxs:x-circle"
              color="#222831"
              width="60"
              height="60"
              onClick={() => dispatch(ModalSet(!modal))}
            />
          </IconContainter>
        </ModalContainer>
) : (
        <IconContainter margin="auto 0px 20px 0px" width="100%" content="center">
          <Icon
            icon="bxs:plus-circle"
            color="#00adb5"
            width="60"
            height="60"
            onClick={() => dispatch(ModalSet(!modal))}
          />
        </IconContainter>
      )}
    </>
  );
}

export default InputModal;

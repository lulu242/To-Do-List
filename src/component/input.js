import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { addToDo, InputSet, CorrectSet } from '../actions';
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
  border-radius: 10px;
`;

const IconContainter = styled.div`
  width: ${(props) => (props.width ? props.width : '200px')};
  display: flex;
  justify-content: ${(props) => props.content};
  align-items: center;
  margin: ${(props) => props.margin};
`;

function InputModal( {id}) {
  const [input, setInput] = useState('');
  const inputModal = useSelector((state) => state.modalReducer.input);
  const correct = useSelector((state) => state.modalReducer.correct);
  const todoState = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(()=> {
    if(correct) {
      const filtered = todoState.filter(el => el.id === id)[0].todo
      setInput(filtered)
      dispatch(CorrectSet(false))
    }
  }, [id])

  return (
    <>
      {inputModal ? (
        <ModalContainer>
          <textarea
            placeholder="할 일을 입력 후, Enter를 눌러주세요"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
          <IconContainter content="space-between">
            <Icon
              icon="bxs:plus-circle"
              color="#00adb5"
              width="60"
              height="60"
              onClick={(e) => {
                dispatch(addToDo(id, input));
                setInput('');
                dispatch(InputSet(!inputModal));
              }}
            />
            <Icon
              icon="bxs:x-circle"
              color="#222831"
              width="60"
              height="60"
              onClick={() => {
                dispatch(InputSet(!inputModal))
                setInput('')}}
            />
          </IconContainter>
        </ModalContainer>
      ) : (
        <IconContainter
          margin="auto 0px 20px 0px"
          width="100%"
          content="center"
        >
          <Icon
            icon="bxs:plus-circle"
            color="#00adb5"
            width="60"
            height="60"
            onClick={() => dispatch(InputSet(!inputModal))}
          />
        </IconContainter>
      )}
    </>
  );
}


export default InputModal;

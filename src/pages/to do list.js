import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { toDo, ModalSet, TabSet } from '../actions/index';
import { useState } from 'react';
import Correction from '../component/remove';
import InputModal from '../component/input';

const Box = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  margin: 2px;
  transition: 0.5s ease;
`;

const IconContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  cursor: pointer;
`;

const List = styled.div`
  padding: 5px 10px;
  color: ${(props) => props.color};
  font-size: 20px;
  cursor: pointer;
  text-align: left;
`;

function ToDoList() {
  const state = useSelector((state) => state.todoReducer);
  const per = (state.filter((el) => el.done).length / state.length) * 100 || 0;
  const dispatch = useDispatch();
  // const [modal, setModal] = useState(false)
  const modal = useSelector((state) => state.modalReducer.modal);
  const [id, setId] = useState('');

  const today = new Date();
  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const date = today.getDate(); // 날짜
  const day = today.getDay(); // 요일
  const 요일 = ['일', '월', '화', '수', '목', '금', '토'];

  // 완료체크
  function check(data) {
    fetch(`http://localhost:3001/todo/` + data.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({"done": !data.done}),
    })
    .then((res) => {
      return res.json()
    })
    .then(data => {
      dispatch(toDo(data))
    })
    .catch((error) => {
      console.error('Error', error);
    });
  }

  return (
    <div className="main">
      {/* 날짜 */}
      <h1 className="title">
        {year}년 {month}월 {date}일
      </h1>
      <h2 className="week">{요일[day] + '요일'}</h2>
      {/* 달성률 */}
      <div className="boxContainter">
        <Box color={per >= 10 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 20 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 30 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 40 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 50 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 60 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 70 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 80 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 90 ? '#00adb5' : '#eeeeee'} />
        <Box color={per >= 100 ? '#00adb5' : '#eeeeee'} />
      </div>
      <div className="percentContainer">
        <div className="line"></div>
        <span className="percent">{parseInt(per)}%</span>
      </div>
      {/* 할일 */}
      <ul>
        {state.map((el) => {
          return (
            <li className="list" key={el.id}>
              <IconContainter>
                {el.done ? (
                  <Icon
                    icon="mdi:check-circle-outline"
                    color="#00adb5"
                    width="22"
                    height="22"
                    onClick={() => check(el)}
                  />
                ) : (
                  <Icon
                    icon="mdi:checkbox-blank-circle-outline"
                    color="#d9d9d9"
                    width="22"
                    height="22"
                    onClick={() => check(el)}
                  />
                )}
              </IconContainter>
              <List
                color={el.done ? '#D9D9D9' : '#222831'}
                onClick={() => check(el)}
              >
                {el.todo}
              </List>
              <IconContainter
                margin="0px 0px 0px auto"
                onClick={() => {
                  dispatch(ModalSet(true));
                  setId(el.id);
                  dispatch(TabSet(1))
                }}
              >
                <Icon
                  icon="majesticons:more-menu"
                  color="#d9d9d9"
                  width="40"
                  height="40"
                />
              </IconContainter>
            </li>
          );
        })}
      </ul>
      {modal ? <Correction id={id} /> : <InputModal id={id} />}
    </div>
  );
}

export default ToDoList;

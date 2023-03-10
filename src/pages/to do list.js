import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { toDo } from '../actions/index';
import { useState } from 'react';
import Correction from '../component/remove';

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
`;

function ToDoList() {
  const state = useSelector((state) => state.todoReducer);
  const per = (state.filter((el) => el.done).length / state.length) * 100;
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false)

  const today = new Date();
  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const date = today.getDate(); // 날짜
  const day = today.getDay(); // 요일
  const 요일 = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="main">
      <Correction />
      {/* 날짜 */}
      <h1 className="day">
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
                  />
                ) : (
                  <Icon
                    icon="mdi:checkbox-blank-circle-outline"
                    color="#d9d9d9"
                    width="22"
                    height="22"
                  />
                )}
              </IconContainter>
              <List
                color={el.done ? '#D9D9D9' : '#222831'}
                onClick={() => dispatch(toDo(el.id))}
              >
                {el.todo}
              </List>
              <IconContainter margin="0px 0px 0px auto">
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
    </div>
  );
}

export default ToDoList;

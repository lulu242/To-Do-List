import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #fff;
  height: 844px;
  width: 262px;
  padding: 25px;
  position: absolute;
  left: 128px;
`;

const Li = styled.li`
  color: #222831;
  text-align: left;
  margin-left: 5px;
  padding: 5px;
  font-size: 20px;
  font-weight: 800;
  position: relative;
  ::after {
    content: '';
    background-color: #d9d9d9;
    width: 208px;
    height: 0.1px;
    position: absolute;
    top: 100%;
    left: 0%;
  }
`;

const MenuIcon = styled(Icon)`
  color: #00adb5;
  width: 40px;
  height: 40px;
  margin-right: 190px;
  cursor: pointer;
`;

function Nav({ setOpen }) {
  return (
    <div className="back">
      <Container>
        <MenuIcon
          icon="material-symbols:chevron-right"
          onClick={(e) => setOpen(false)}
        />
        <ul>
          <Link to="/">
            <Li onClick={(e) => setOpen(false)}>오늘의 할 일</Li>
          </Link>
          <Link to="/goal">
            <Li onClick={(e) => setOpen(false)}>목표 보기</Li>
          </Link>
          <Link to="/made">
            <Li onClick={(e) => setOpen(false)}>만든 사람</Li>
          </Link>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;

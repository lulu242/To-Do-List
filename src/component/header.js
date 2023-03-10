import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Container = styled.div`
  background-color: #393e46;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: #00adb5;
  font-size: 22px;
  font-weight: 600;
  flex: 10;
  padding-left: 38px;
`;

const IconContainter = styled.div`
  flex: 1;
  padding-right: 5px;
`;

function Header() {
  return (
    <Container>
      <Title>To Do List</Title>
      <IconContainter>
        <Icon
          icon="material-symbols:menu"
          color="#d9d9d9"
          width="33"
          height="33"
        />
      </IconContainter>
    </Container>
  );
}

export default Header;

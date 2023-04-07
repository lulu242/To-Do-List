import styled from 'styled-components';

const Container = styled.div`
  height: 788px;
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    color: #00adb5;
    font-size: 20px;
    font-weight: 500;
    padding: 5px;
  }
`;

const Profile = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background-image: url('https://velog.velcdn.com/images/heelieben/post/63766f3f-ffd7-445e-a7bc-41ba722c7cf0/image.png');
  background-repeat: no-repeat; /* 반복하지 않음 */
  background-size: cover; /* 이미지 크기를 콘텐츠 영역에 맞춤 */
  background-position: center;
  margin-top: 132px;
  margin-bottom: 60px;
`;

function Made() {
  return (
    <Container>
      <Profile />
      <div>E-mail: kgsol3242@gmail.com</div>
      <div>GitHub: lulu242</div>
    </Container>
  );
}

export default Made;

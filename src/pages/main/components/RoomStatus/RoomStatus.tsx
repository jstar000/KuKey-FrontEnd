import { Container, RoomName, LockStatus, OpenRequestButton } from './RoomStatus.styles';

type RoomStatusProps = {
  roomName: string;
  lockStatus: string;
};

const RoomStatus = ({ roomName, lockStatus }: RoomStatusProps) => {
  const handleClick = () => {
    console.log('개방요청하기 버튼클릭!');
  };

  return (
    <Container>
      <RoomName>{roomName}</RoomName>
      <LockStatus status="{lockStatus}">{lockStatus}</LockStatus>
      <OpenRequestButton onClick={handleClick}>개방 요청하기</OpenRequestButton>
    </Container>
  );
};
export default RoomStatus;

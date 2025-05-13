import styled from '@emotion/styled';

type LockStatusProps = {
  status: string;
};

export const Container = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid black;
  background-color: beige;
  display: flex;
  flex-direction: column;
`;

export const RoomName = styled.div`
  width: 100%;
  font-size: 20px;
  padding-top: 10px;
  color: green;
  display: flex;
  justify-content: center;
`;

export const LockStatus = styled.div<LockStatusProps>`
  width: 100%;
  font-size: 40px;
  padding-top: 20px;
  color: ${({ status }) => (status === '잠금' ? 'red' : 'blue')};
  display: flex;
  justify-content: center;
`;

export const OpenRequestButton = styled.button`
  all: unset;
  cursor: pointer;
  padding-top: 30px;
  color: green;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

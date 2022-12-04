import styled from "styled-components";

export default function PostModal() {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a Post</h2>
          <button>
            <img src="/images/close.svg" alt="" />
          </button>
        </Header>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: black;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: rgba(255, 255, 255, 1);
  max-height: 90%;
  border-radius: 5px;
  overflow: initial;
  position: relative;
  display: flex;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  padding: 16px 20px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    background: transparent;
    border: none;
    outline: none;
    transition-duration: 167ms;
    border-radius: 50%;
    display: flex;
    align-items: center;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }

    img {
      width: 24px;
      height: 24px;
      margin: 0 auto;
    }
  }
`;

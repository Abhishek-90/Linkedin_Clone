import styled from "styled-components";

function Main() {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a Post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Events</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  background-color: #fff;
  position: relative;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 1px rgb(0 0 0 / 20%);
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  margin: 0 0 8px;

  div {
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      border-radius: 5px;
      transition-duration: 167ms;
      outline: none;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.5;
      min-height: 48px;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      padding: 12px 8px 0 8px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        flex-grow: 1;
        padding: 0 0 0 16px;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 4px 0;

      button {
        &:hover {
          background: rgba(0, 0, 0, 0.08);
        }

        & > span {
          margin-left: 8px;
          color: #70b5f9;
        }
      }
    }
  }
`;

export default Main;

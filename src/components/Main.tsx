import styled from "styled-components";
import { connect } from "react-redux";

function Main(props: any) {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src={props.user?.photoURL} alt="" />
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
      <div>
        <ArticleBox>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Abhishek Holani</span>
                <span>a@gmail.com</span>
                <span>21/03/2022</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/shared-img.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCount>
            <li>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/cm8d2ytayynyhw5ieaare0tl3"
                  alt=""
                />
              </button>
              <span>75</span>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCount>
          <SocialActions>
            <button>
              <img src="/images/post-like.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/post-comment.svg" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/post-repost.svg" alt="" />
              <span>Repost</span>
            </button>
            <button>
              <img src="/images/post-send.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </ArticleBox>
      </div>
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

const ArticleBox = styled(CommonCard)`
  overflow: visible;
  margin: 0 0 8px;
  padding: 0;
`;

const SharedActor = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;

  button {
    outline: none;
    border: none;
    background: transparent;
    position: absolute;
    top: 0;
    right: 12px;
  }

  a {
    flex-grow: 1;
    margin-right: 12px;
    display: flex;
    overflow: hidden;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 1;
      margin-left: 8px;
      font-size: 14px;
      text-align: left;

      span {
        line-height: 1.33;

        &:first-child {
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  font-size: 14px;
  overflow: hidden;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  img {
    width: 100%;
  }
`;

const SocialCount = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  padding: 8px 0;
  margin: 0 16px;
  line-height: 1.3;
  border-bottom: 1px solid #e9e5df;

  li {
    font-size: 12px;

    &:first-child {
      display: flex;
      align-items: center;
      margin-right: 16px;

      button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;

        img {
          width: 16px;
          &:nth-child(n + 2) {
            margin-left: -4px;
          }
        }
      }
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: space-around;
  min-height: 42px;

  & > button {
    background: transparent;
    border: none;
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    transition-duration: 167ms;
    border-radius: 5px;
    img {
      margin-right: 4px;

      @media (min-width: 768px) {
        margin-right: 8px;
      }
    }
    span {
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
    }
    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;

const mapStateToProps = (state: any) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Main);

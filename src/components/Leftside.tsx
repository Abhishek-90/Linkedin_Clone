import styled from "styled-components";

function Leftside() {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow you network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <img src="/images/item-icon.svg" alt="" />
          <span>My items</span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>Groups</a>
        <a>
          Events
          <img src="/images/plus-icon.svg" alt="" />
        </a>
        <a>Follows Hashtags</a>
        <a>Discover More</a>
      </CommunityCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  background: white;
  margin-bottom: 8px;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 1px rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background-image: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;

const AddPhotoText = styled.div`
  line-height: 1.33;
  margin-top: 4px;
  color: #0a66c2;
  font-weight: 400;
  font-size: 12px;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);

      span {
        font-size: 14px;
        line-height: 1.333;
      }

      span:nth-child(1) {
        color: rgba(0, 0, 0, 0.6);
        font-weight: 500;
      }

      span:nth-child(2) {
        font-weight: 600;
      }
    }

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const Item = styled.a`
  padding: 12px;
  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 12px;
  }
`;

const CommunityCard = styled(ArtCard)`
  display: flex;
  flex-direction: column;

  a {
    padding: 4px 8px;
    line-height: 1.75;
    font-size: 14px;
    font-weight: 600;
    display: flex;

    &:nth-child(2) {
      justify-content: space-between;
    }

    &:nth-child(3) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    &:hover {
      color: #0a66c2
    }
  }
`;

export default Leftside;

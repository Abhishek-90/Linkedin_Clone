import { useState } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { postArticleAPI } from "../actions";
import { serverTimestamp } from "firebase/firestore";

function PostModal(props: any) {
  const [editorText, setEditorText] = useState<any>("");
  const [shareImage, setShareImage] = useState<any>("");
  const [videoLink, setVideoLink] = useState<any>("");
  const [assetArea, setAssetArea] = useState<any>("");

  const handleChange = (e: any) => {
    const image = e.target.files[0];

    if (image === null || image === undefined) {
      alert(`Invalid image, type is ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const switchAssetArea = (area: any) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e: any) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: serverTimestamp(),
    };

    props.postArticle(payload);
    reset(e);
  };

  const reset = (e: any) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a Post</h2>
              <button onClick={(e: any) => reset(e)}>
                <img src="/images/close.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <div>
                  <a>
                    {props.user && props.user.photoURL ? (
                      <img src={props.user.photoURL} alt="" />
                    ) : (
                      <img src="/images/user.svg" alt="" />
                    )}
                  </a>
                </div>
                <div>
                  <a>{props.user?.displayName}</a>
                </div>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e: any) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                {assetArea === "image" && (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an Image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="" />
                    )}
                  </UploadImage>
                )}
                {assetArea === "video" && (
                  <>
                    <input
                      type="text"
                      placeholder="Please enter a video URL"
                      onChange={(e: any) => setVideoLink(e.target.value)}
                      value={videoLink}
                    />
                    {videoLink && (
                      <ReactPlayer width={"100%"} url={videoLink} />
                    )}
                  </>
                )}
              </Editor>
            </SharedContent>
            <SharedCreations>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("video")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                  </svg>
                </AssetButton>
              </AttachAssets>
              <SharedComment>
                <AssetButton>
                  <img src="/images/post-comment.svg" alt="" />
                  <span>Anyone</span>
                </AssetButton>
              </SharedComment>
              <PostButton
                disabled={!editorText ? true : false}
                onClick={(e: any) => {
                  postArticle(e);
                }}
              >
                Post
              </PostButton>
            </SharedCreations>
          </Content>
        </Container>
      )}
    </>
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
  animation: fadeIn 0.3s;
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
  flex-direction: column;
`;

const Header = styled.div`
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
      background: rgba(0, 0, 0, 0.08);
    }

    svg,
    img {
      width: 24px;
      height: 24px;
      margin: 0 auto;
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 16px 20px;
  overflow-y: auto;
`;

const UserInfo = styled.div`
  display: flex;
  margin-bottom: 12px;
  div:first-child {
    margin-right: 5px;
    a {
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }
  }

  div:nth-child(2) {
    a {
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.8);
      line-height: 1.5;
    }
  }
`;

const SharedCreations = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  border: none;
  outline: none;
  transition-duration: 167ms;
  height: 40px;
  min-width: auto;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  svg {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const AttachAssets = styled.div`
  display: flex;
  padding-right: 8px;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.15);

  ${AssetButton} {
    width: 40px;
  }
`;

const SharedComment = styled.div`
  margin-right: auto;
  padding-left: 8px;

  ${AssetButton} {
    svg,
    img {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: #0a66c2;
  color: white;
  border: none;
  outline: none;

  &:hover {
    background: #004182;
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.8);
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Editor = styled.div`
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    padding: 12px 6px;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  & > p > label {
    font-size: 16px;
    font-weight: 600;
    color: #0a66c2;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
`;

const mapStateToProps = (state: any) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  postArticle: (payload: any) => {
    dispatch(postArticleAPI(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);

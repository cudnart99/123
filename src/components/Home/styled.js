import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0px 3%;
  .add-block-container {
    display: inline-block;
    border-radius: 20px;
    border: 1px solid black;
    padding: 10px;
  }
  .text {
    margin-top: 3px;
    margin-right: 20px;
  }
  .input-add-block {
    display: inline-block;
  }
  .add-button {
    margin: auto;
    display: block;
    margin-top: 10px;
  }
  .blockchain-container {
    margin-top: 20px;
    background-color: #ccccff;
    width: 1200px;
    /* margin: auto; */
    border-radius: 10px;
    /* border: 1px solid black; */
    padding: 0px 10px;
    flex-wrap: wrap;
    .block {
      margin: 10px 0px;
      width: 300px;
      .block-content {
        cursor: pointer;
        width: 200px;
        background-color: #7df9ff;
        border-radius: 10px;
        padding: 10px;
        .title {
          text-align: center;
        }
        .text {
          width: 199px;
          font-size: 12px;
          word-break: break-all;
        }
      }
      .block-content:hover {
        filter: brightness(1.2);
      }
      .block-img {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
          margin: auto;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  .check-container {
    margin-left: 20px;
    .check-content {
      margin-left: 20px;
      max-width: 300px;
    }
    .green {
      color: green;
    }

    .red {
      color: red;
    }
  }
`;

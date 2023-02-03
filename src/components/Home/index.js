import { Button, Input, Modal } from "antd";
import { sha256 } from "js-sha256";
import { StyledWrapper } from "./styled";
import React, { useEffect, useState } from "react";
import Chain from "../../assets/chain.png";
function Home() {
  const [blockchain, setBlockchain] = useState([]);
  const [tempData, setTempData] = useState("");
  const [selected, setSelected] = useState();
  const [indexSelected, setIndexSelected] = useState();
  const [fakeBlockIndex, setFakeBlockIndex] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [check, setCheck] = useState("helo");
  const handleFakePrevHash = () => {
    var prevHash = "First block";
    if (blockchain.length != 0 && indexSelected != 0) {
      prevHash = blockchain[indexSelected - 1].currentHash;
    }
    return prevHash;
  };
  const showModal = (index, item) => {
    setIsModalOpen(true);
    setSelected(item);
    setIndexSelected(index);
  };
  const handleOk = () => {
    const prevHash = handleFakePrevHash();
    const timeCreate = new Date().toString();
    const data = tempData;
    const currentHash = sha256(data + timeCreate + prevHash);
    const newFakeBlock = {
      data: data,
      prevHash: prevHash,
      timeCreate: timeCreate,
      currentHash: currentHash,
    };
    var newBlockchain = blockchain;
    var findIndex = newBlockchain.indexOf(selected);
    if (findIndex !== -1) {
      newBlockchain[findIndex] = newFakeBlock;
    }
    setBlockchain(newBlockchain);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    console.log(blockchain, "helo123");
  }, [blockchain]);
  const handlePrevHash = () => {
    var prevHash = "First block";
    if (blockchain.length != 0) {
      prevHash = blockchain[blockchain.length - 1].currentHash;
    }
    return prevHash;
  };
  const handleAddBlock = () => {
    const prevHash = handlePrevHash();
    const timeCreate = new Date().toString();
    const data = tempData;
    const currentHash = sha256(data + timeCreate + prevHash);
    const newBlock = {
      data: data,
      prevHash: prevHash,
      timeCreate: timeCreate,
      currentHash: currentHash,
    };
    setBlockchain([...blockchain, newBlock]);
  };
  const handleCheck = () => {
    var tempCheck = true;
    for (let i = 0; i < blockchain.length - 1; i++) {
      if (blockchain[i + 1].prevHash != blockchain[i].currentHash) {
        tempCheck = false;
        setFakeBlockIndex(i);
        break;
      }
    }
    setCheck(tempCheck);
  };
  return (
    <StyledWrapper>
      <h1>Demo blockchain</h1>
      <div className="d-flex">
        <div className="add-block-container">
          <b>Add block</b>
          <div className="d-flex">
            <div className="text">Nhập data: </div>
            <div>
              <Input
                className="input-add-block"
                onChange={(e) => {
                  console.log(e.target.value);
                  setTempData(e.target.value);
                }}
              ></Input>
            </div>
          </div>
          <Button
            className="add-button"
            type="primary"
            onClick={handleAddBlock}
          >
            Add block
          </Button>
        </div>
        <div className="check-container d-flex">
          <Button type="primary" onClick={handleCheck}>
            Kiểm tra blockchain
          </Button>
          {check === "helo" ? (
            <></>
          ) : check === true ? (
            <div className="check-content green">Blockchain hợp lệ</div>
          ) : (
            <div className="check-content red">
              Blockchain không hợp lệ ở block thứ {fakeBlockIndex + 1}
            </div>
          )}
        </div>
      </div>

      <h3>The blockchain : </h3>
      <div className="blockchain-container d-flex">
        {blockchain?.map((item, index) => {
          return (
            <div className="block d-flex">
              <div
                className="block-content"
                onClick={() => showModal(index, item)}
              >
                <div className="title">Block {index + 1}</div>
                <div className="text">
                  <b>Current Hash</b> : {item?.currentHash}
                </div>
                <div className="text">
                  <b>Previous Hash</b> : {item?.prevHash}{" "}
                </div>
                <div className="text">
                  <b>Data</b> : {item?.data}
                </div>
                <div className="text">
                  <b>Time create</b> : {item?.timeCreate}
                </div>
              </div>
              {blockchain.length - 1 !== index && (
                <div className="block-img">
                  <img src={Chain} alt="" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Modal
        title={`Sửa block ${indexSelected + 1}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <StyledWrapper>
          <div className="d-flex">
            <div className="text">Nhập data: </div>
            <div>
              <Input
                className="input-add-block"
                onChange={(e) => {
                  console.log(e.target.value);
                  setTempData(e.target.value);
                }}
              ></Input>
            </div>
          </div>
        </StyledWrapper>
      </Modal>
    </StyledWrapper>
  );
}

export default Home;

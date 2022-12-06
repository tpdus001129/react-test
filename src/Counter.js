import React, { useEffect, useState } from "react";

const Counter = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log("랜더링 완료");
    console.log({
      name,
      nickname,
    });
  });
  return (
    <>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
      </div>
    </>
  );
};

export default Counter;

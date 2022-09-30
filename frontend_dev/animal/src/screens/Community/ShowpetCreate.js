import React, { useRef, useState, useEffect } from "react";
import "./ShowpetCreate.css";
import { useLocation, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { postShowpet, putShowpet } from "../../api/community";

const ShowpetCreate = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [files, setFiles] = useState([]);
  const [filenames, setFilenames] = useState([]);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setIsEdit(true);
      setting();
    }
  }, []);

  const setting = () => {
    const article = location.state;
    titleRef.current.value = article.title;
    contentRef.current.value = article.content;
    nameRef.current.value = article.name;
  };

  const submitShowpet = (e) => {
    e.preventDefault();
    sendShowpet();
    // if (titleRef.current.value.trim() === "") {
    //   alert("제목을 입력해주세요.");
    //   titleRef.current.focus();
    // } else if (nameRef.current.value.trim() === "") {
    //   alert("이름을 입력해주세요.");
    //   nameRef.current.focus();
    // } else if (contentRef.current.value.trim() === "") {
    //   alert("내용을 입력해주세요.");
    //   contentRef.current.focus();
    // } else {
    //   if (sendImage()) {
    //     sendShowpet();
    //   } else {
    //     alert("문제 발생");
    //   }
    // }
  };
  //이미지 서버에 이미지 전송 (여러장)
  const sendImage = async () => {
    let formData = new FormData();
    formData.append("uploadFile", files, filenames);
    // axios({
    //   url: "http://j7c101.p.ssafy.io:3003/upload",
    //   method: "post",
    //   headers: {
    //     processData: false,
    //     "Content-Type": "multipart/form-data",
    //   },
    //   data: formData,
    // })
    //   .then((res) => {
    //  //이미지 경로들 받아서 setState `http://j7c101.p.ssafy.io:3003/${filenames}
    //     console.log(res);
    // return true;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // return false;
    //   });
  };

  // 백엔드에 자랑하기 글 등록
  const sendShowpet = async () => {
    try {
      if (isEdit) {
        //수정인 경우
        const { data } = await putShowpet({
          content: contentRef.current.value,
          imgs: [""], //이미지 서버 주소
          name: nameRef.current.value,
          title: titleRef.current.value,
          id: location.state.id,
        });
        let id = data.data.id;
        alert("수정 되었습니다!");
        navigator(`/show-pet/detail/${id}`);
      } else {
        const { data } = await postShowpet({
          content: contentRef.current.value,
          imgs: [""], //이미지 서버 주소
          name: nameRef.current.value,
          title: titleRef.current.value,
        });
        let id = data.data.id;
        alert("등록 되었습니다!");
        navigator(`/show-pet/detail/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeFiles = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setFiles(e.target.files);
    let today = new Date();
    const fileName = `img_${today.getFullYear()}${
      today.getMonth() + 1
    }${today.getDate()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}.png`;
    console.log(fileName);
    // setImg(fileName);
  };

  return (
    <form id="showpet-create" onSubmit={(e) => submitShowpet(e)}>
      <input
        ref={titleRef}
        className="show-title"
        type="text"
        placeholder="제목을 입력하세요"
      />
      <input
        ref={nameRef}
        className="show-name"
        type="text"
        placeholder="이름을 입력하세요"
      />
      <textarea
        ref={contentRef}
        className="show-content"
        type="text"
        placeholder="내용을 입력하세요"
      />
      <input
        type="file"
        accept="image/*"
        id="upload-file"
        multiple={true}
        onChange={(e) => {
          changeFiles(e);
        }}
      ></input>
      <button>작성완료</button>
    </form>
  );
};

export default ShowpetCreate;

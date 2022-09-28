import './ProfileUpdate.css'
import styled from 'styled-components';
import { useState } from 'react'
import axios from 'axios';

const StyledBtn = styled.button`
    text-align: center;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 10px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    color: black;
    background: #F5C6AA;
    &:focus {
        box-shadow: 0px 0px 4px 3px #FFAE6D;
    }
    margin: 10px;
    `;

    const StyledInput = styled.input`
border-radius: 4px;
font-size: 22px;
margin-left: 10px;
padding-top: 0.7rem;
padding-bottom: 0.7rem;
width: 70%;
height: 40px;
border: none;
background-color: white;
display: flex;
outline: none;
`;

const Innerbox = styled.div`
    display: flex;
    font-weight: bold;
    width: 100%;
    height: 60px;
    background: #F8E2CF;
    border-radius: 5px;
    margin: 20px;
    align-items: center;
    justify-content: center;    
` ;

const ProfileUpdate = () => {
    const [profileImg, setProfileImg] = useState(null)
    const [file, setFile] = useState(null)
    return (
        <div id='update-border'>
            <Innerbox>
                변경할 닉네임:
                <StyledInput></StyledInput>
            </Innerbox>
            <Innerbox>
            <label id="picture" for="upload-file">
                        프로필 수정하기
                    </label>
                    <input type="file" accept="image/*" id="upload-file" style={{'display':'none'}}
                    onChange={(e)=>{
                        setFile(e.target.files[0])
                        const fileName = "img_" +
                        new Date().getFullYear() +
                        (new Date().getMonth() + 1) +
                        new Date().getDate() +
                        new Date().getHours() +
                        new Date().getMinutes() +
                        new Date().getSeconds() +
                        ".png"
                        setProfileImg(fileName)
                    }}>

                    </input>
            </Innerbox>
            <StyledBtn onClick={()=>{
                axios({
                    url: 'https://ssafy.io/api/profile/update',
                    method: 'post',
                    headers: {
                        Token : 'asdfasdf'
                    }
                })
                .then((res)=>{
                    
                })
                .catch((err)=>{
                    console.log(err)
                })
            }}>수정하기</StyledBtn>
        </div>
    )
}

export default ProfileUpdate;
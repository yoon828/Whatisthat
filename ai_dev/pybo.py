from flask import Flask
from flask import request
from flask import render_template
from flask_cors import CORS
from tensorflow import keras
import numpy as np
from PIL import Image, ImageOps

app = Flask(__name__)
CORS(app)

@app.route('/')
def main_page(): 
    
    return render_template('input.html')


@app.route('/test', methods=["GET","POST"])
def test():
    value = request.form.get('input')
    
    msg = "input : %s " %value
    return msg

def skin_dog_diagnosis(imgurl):
    model = keras.models.load_model("../models/Dog_Skin_Model.h5") # 강아지 피부 모델 경로

    #예측시킬 이미지 데이터를 넣을 변수
    data = np.ndarray(shape=(1, 64, 64, 3), dtype=np.float32)  #모델 변경시 사이즈 조절

    #예측시킬 이미지 로딩
    image = Image.open(imgurl)

    # 크롭 해 올 사이즈 정해서 (왼쪽,위,오른쪽,아래)
    image = image.crop((10,10,100,100)) 

    #똑같은 이미지 크기로 변경
    size = (64, 64)  #모델 변경시 사이즈 조절
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #numpy 타입으로 변경
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    # 불러운 numpy 타입의 이미지를 변수에 대입
    data[0] = normalized_image_array

    # 예측
    prediction = model.predict(data)
    return cut3(skin_dog_naming(prediction.astype(float).tolist()))

def eye_dog_diagnosis(imgurl):
    model = keras.models.load_model("##########") # 강아지 눈 모델 경로

    #예측시킬 이미지 데이터를 넣을 변수
    data = np.ndarray(shape=(1, 32, 32, 3), dtype=np.float32) 

    #예측시킬 이미지 로딩
    image = Image.open(imgurl)

    # 크롭 해 올 사이즈 정해서 (왼쪽,위,오른쪽,아래)
    image = image.crop((10,10,100,100)) 

    #똑같은 이미지 크기로 변경
    size = (32, 32)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #numpy 타입으로 변경
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    # 불러운 numpy 타입의 이미지를 변수에 대입
    data[0] = normalized_image_array

    # 예측
    prediction = model.predict(data)
    return eye_dog_naming(prediction.astype(float).tolist())


def eye_cat_diagnosis(imgurl):
    model = keras.models.load_model("#####") # 고양이 안구 모델 경로

    #예측시킬 이미지 데이터를 넣을 변수
    data = np.ndarray(shape=(1, 32, 32, 3), dtype=np.float32) 

    #예측시킬 이미지 로딩
    image = Image.open(imgurl)

    # 크롭 해 올 사이즈 정해서 (왼쪽,위,오른쪽,아래)
    image = image.crop((10,10,100,100)) 

    #똑같은 이미지 크기로 변경
    size = (32, 32)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #numpy 타입으로 변경
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    # 불러운 numpy 타입의 이미지를 변수에 대입
    data[0] = normalized_image_array

    # 예측
    prediction = model.predict(data)
    return eye_dog_naming(prediction.astype(float).tolist())


def skin_dog_naming(li):
    label = ['구진,플라크','비듬,각질,상피성잔고리','태선화,과다색소침착','농포,여드름','미란,궤양','결절,종괴']
    labeled = []
    for i in range(6):
        labeled.append([label[i],li[0][i]])
        
    return labeled
    
def eye_dog_naming(li):
    label = ['결막염','궤양성각막질환','백내장','비궤양성각막질환','색소침착성각막염','안검내반증','안검염','안검종양','유루증','핵경화']
    labeled = []
    for i in range(6):
        labeled.append([label[i],li[0][i]])
        
    return labeled

def eye_cat_naming(li):
    label = ['각막궤양','각막부골편','결막염','비궤양성각막염','안검염']
    labeled = []
    for i in range(6):
        labeled.append([label[i],li[0][i]])
        
    return labeled


@app.route('/ai/skin/dog', methods=["GET","POST"])
def ai_skin_dog():
    content = request.json
    imagepath = content['imagePath']
    return skin_dog_diagnosis(imagepath)

@app.route('/ai/eye/dog', methods=["GET","POST"])
def ai_eye_dog():
    content = request.json
    imagepath = content['imagePath']
    return eye_dog_diagnosis(imagepath)

@app.route('/ai/eye/cat', methods=["GET","POST"])
def ai_eye_cat():
    content = request.json
    imagepath = content['imagePath']
    return eye_cat_diagnosis(imagepath)

def cut3(lst):
    nlist = sorted(lst, key=lambda x:-x[1])
    print(nlist)
    return nlist[:3]


if __name__ == '__main__':
    app.run(host='70.12.130.121', port=5550)
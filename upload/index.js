// api 요청 주소 : https://{메인주소}/upload
// 이미지 접근 주소 : https://{메인주소}/{이미지 파일 이름}


const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan')
const _ = require('lodash')

const app = express();

// 파일 업로드 허용
app.use(fileUpload({
    createParentPath: true
}));

// 파일 접근
app.use(express.static('uploads'))

// 미들 웨어 추가
app.use(cors());
app.use(bodyParser.json({limit: '100mb', type: 'application/json'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

// post 요청 추가
app.post('/upload', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: '파일 업로드 실패'
            });
        } else {
            let f = req.files.uploadFile;
            f.mv('./uploads/' + f.name);
            res.send({
                status: true,
                message: '파일이 업로드 되었습니다.',
                data: {
                    name: f.name,
                    minetype: f.minetype,
                    size: f.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

// 포트 설정
const port = 3000;


app.listen(port, () => {
    console.log(`Server is on port ${port}.`);
})
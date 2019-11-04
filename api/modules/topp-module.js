const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Topping = require('../models/topping-model');
// const User = mongoose.Schema("User")
// @route POST api/users/register
// @descr dang ky
// @access public
// lấy tổng số document user
router.get("/", (req, res) => {
    Topping.find({},(err,data) => {
        if(err)
        return res.status(400).json({msg:`lỗi ${err}`});
        res.json(data);
    })
})
//get user's info
// const a= [1,2,3];
// const b= [...a,4];
// b = [...b,5];
// router.get("/:id", (req, res) => {

//     let arrOrder = [];
//     User.findById(req.params.id, (err, user) => {
//         if (err) throw err;
//         // lấy mảng orders trong user
//         const donHangs = user.get('donHangs');
//         // dùng operator map để truy cập vào từng biến của mảng
//         return donHangs.map(iddh => {
//             // tìm đơn hàng thông qua id trong mảng donhangs
//             return Order.findById(iddh, (err, donHang) => {
//                 if (err) throw err;
//                 // gán mảng được tạo ở trên
//                 arrOrder = [...arrOrder, donHang];
//             })
//             .then(() => {
//                 return res.status(200).json({ user, arrOrder });
//             })
//         })
//     });
// })



// router.post('/register', (req, res) => {
//     const _id = mongoose.Types.ObjectId();
//     const { tenNguoiDung, email, matKhauDangNhap, sdt } = req.body;
//     if (!tenNguoiDung || !email || !matKhauDangNhap || !sdt) {
//         return res.status(400).json({ msg: 'Vui lòng nhập đầy đủ field' })
//     }

//     User.findOne({ email }).then(user => {
//         if (user) return res.status(400).json({ msg: 'Người dùng đã tồn tại' })
//         const date = Date().now;
//         console.log(date);
//         const newUser = new User({
//             _id,
//             userName:tenNguoiDung,
//             userEmail:email,
//             userPhone:sdt,
//             userGender:'',
//             userAddress:'',
//             userBirthDay:date,
//             userPassword:matKhauDangNhap,
//             priority: 0
//         });
//         newUser.save().then(user => {
//             jwt.sign(
//                 { id: user.id },
//                 config.get('jwtSecret'),
//                 {expiresIn: 3600},
//                 (err, token) => {
//                     if (err) throw err;
//                     res.status(200).json({
//                         token,
//                         user: {
//                             id: user.id,
//                             tenNguoiDung: user.userName,
//                             sdt: user.userPhone,
//                             email: user.userEmail,
//                             priority: user.priority
//                         }
//                     })
//                 }
//             )
//         })
        
//     })
// })

module.exports = router;
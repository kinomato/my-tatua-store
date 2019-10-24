const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// user model
const User = require('../models/nguoiDung-model');
// const User = mongoose.Schema("User")
// @route POST api/auth/login
// @descr đăng nhập
// @access public
router.post('/login', (req, res) => {
    // Kỹ thuật Destructuring object jvscript
    // lấy email và mật khẩu thay vì sau này phải ghi req.body.email, req.body.matkhau
    const { email, matKhauDangNhap } = req.body;
    if (!email || !matKhauDangNhap) {
        return res.status(400).json({ msg: 'Vui lòng nhập đầy đủ các field' })
    }
    // tìm tài khoản bằng email
    User.findOne({ email }).then(user => {
        // không thấy đồng nghĩa với trả về user undefined => gửi status 400 
        if (!user) return res.status(400).json({ msg: 'User không tồn tại' })
        
        // Dùng hàm đặc biệt của bcrypt để so sánh mật khẩu đã nhập với mật khẩu đã được mã hóa
        bcrypt.compare(matKhauDangNhap, user.matKhauDangNhap)
            .then(isMatch => {
                // không trùng đồng nghĩa không đúng mật khẩu => gửi status 400 cùng error invalid
                // đồng thời ngừng luôn hoạt động
                if (!isMatch) return res.status(400).json({ msg: "invalid" });

                //
                jwt.sign(
                    { id: user.id },
                    config.get('jwtSecret'),
                    // { expireqIn: 3600},
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                            token,
                            user: {
                                id: user.id,
                                tenNguoiDung: user.tenNguoiDung,
                                email: user.email,
                                priority: user.priority
                            }
                        })
                    }
                )
            })
    }) 
})
// @route GET api/auth/user
// @descr lấy data user thông qua token
// @access private
router.get('/user', auth, (req, res) => {
    console.log(req.user);
    User.findById(req.user.id)
        .select('-matKhauDangNhap')
        .then(user =>{
            console.log(user);
            res.json(user)
        })
});
module.exports = router;
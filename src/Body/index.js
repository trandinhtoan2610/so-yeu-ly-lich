import './Body.css';
function Body() {
    return <div>
            <h3>I. THÔNG TIN BẢN THÂN</h3>
            <form action="/submit" method="post">
                <label for="hoTen">1. Họ và tên:</label>
                <input type="text" id="hoTen" name="hoTen" required/>
                
                <label for="gioiTinh">Giới tính:</label>
                <input type="radio" id="nam" name="gioiTinh" value="nam"/>
                <label for="nam">Nam</label>
                <input type="radio" id="nu" name="gioiTinh" value="nu"/>
                <label for="nu">Nữ</label><br/>

                <label for="ngaySinh">2. Ngày sinh:</label>
                <input type="date" id="ngaySinh" name="ngaySinh" required/>
                <label for="noiSinh">Nơi sinh:</label>
                <input type="text" id="noiSinh" name="noiSinh" required/><br/>

                <label for="nguyenQuan">3. Nguyên quán</label>
                <input type="text" id="nguyenQuan" name="nguyenQuan" required/><br/>

                <label for="thuongTru">4. Nơi đăng ký thường trú</label>
                <input type="text" id="thuongTru" name="thuongTru" required/><br/>

                <label for="thuongTru">5. Chỗ ở hiện nay</label>
                <input type="text" id="ChoO" name="thuongTru" required/><br/>

                <label for="thuongTru">6. Số diện thoại liên hệ</label>
                <input type="phone" id="sdt" name="thuongTru" required/><br/>

                <label for="thuongTru">7. Dân tộc</label>
                <input type="text" id="danToc" name="thuongTru" required/>
                <label for="thuongTru">Tôn giáo</label>
                <input type="text" id="tonGiao" name="thuongTru" required/><br/>

                <label for="thuongTru">8. Số chứng minh nhân dân</label>
                <input type="text" id="cmnd" name="thuongTru" required/>
                <label for="thuongTru">cấp ngày</label>
                <input type="date" id="ngayCap" name="thuongTru" required/>
                <label for="thuongTru">nơi cấp</label>
                <input type="text" id="noiCap" name="thuongTru" required/><br/>

                <label for="thuongTru">9. Trình độ văn hóa</label>
                <select>
                    <option>Tiểu học</option>
                    <option>Trung học cơ sở</option>
                    <option>Trung học phổ thông</option>
                    <option>Đại học</option>
                </select><br/>
                <label for="thuongTru"></label>
            </form>
            <h3>II. QUAN HỆ GIA ĐÌNH</h3>
        </div>;
}

export default Body;
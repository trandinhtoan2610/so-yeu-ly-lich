import './Header.css'
import Avatar from "../Avatar";

function Header() {
  return <div className="container">
    <Avatar/>
    <h3>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
    <h5>Độc lập - Tự do - Hạnh phúc</h5>
    <div className='line'></div>
    <h1>SƠ YẾU LÝ LỊCH VIÊN CHỨC</h1>
  </div>;
}

export default Header;

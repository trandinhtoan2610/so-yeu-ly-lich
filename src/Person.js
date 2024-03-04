import React, { useState } from 'react'
const Person = () => {
    const [fullName, setFullName] = useState('');
    const [otherNames, setOtherNames] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [hometown, setHometown] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [religion, setReligion] = useState('');
    const [registeredAddress, setRegisteredAddress] = useState('');
    const [currentResidence, setCurrentResidence] = useState('');
    const [occupation, setOccupation] = useState('');
    const [recruitmentDate, setRecruitmentDate] = useState('');
    const [recruitingAgency, setRecruitingAgency] = useState('');
    const [title, setTitle] = useState('');
    const [assignedTasks, setAssignedTasks] = useState('');
    const [professionalTitle, setProfessionalTitle] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [salaryRank, setSalaryRank] = useState('');
    const [coefficient, setCoefficient] = useState('');
    const [effectiveDate, setEffectiveDate] = useState('');
    const [titleAllowance, setTitleAllowance] = useState('');
    const [otherAllowances, setOtherAllowances] = useState('');
    const [educationalLevel, setEducationalLevel] = useState('');
    const [highestQualification, setHighestQualification] = useState('');
    const [image, setImage] = useState(null);

    // Xử lý sự kiện khi người dùng chọn tệp ảnh
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        // Đọc tệp ảnh thành URL
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // useEffect(() => {
    //     setPosition(position + 1)
    // }, [name])

    return (
        <div className='container'>
            <div className="form">
                <h2 style={{ textAlign: "center" }}>Sơ yếu lý lịch viên chức</h2>
                <div>
                    <label>
                        Ảnh:
                        <input type="file" onChange={handleImageUpload} accept="image/*" />
                    </label>
                </div>
                <div>
                    <label>
                        Họ và tên:
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </label>
                    <label>
                        Tên gọi khác:
                        <input type="text" value={otherNames} onChange={(e) => setOtherNames(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Ngày sinh:
                        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                    </label>
                
                    <label>
                        Giới tính:
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </label>
                
                    <label>
                        Nơi sinh:
                        <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Quê quán:
                        <input type="text" value={hometown} onChange={(e) => setHometown(e.target.value)} />
                    </label>
                
                    <label>
                        Dân tộc:
                        <input type="text" value={ethnicity} onChange={(e) => setEthnicity(e.target.value)} />
                    </label>
               
                    <label>
                        Tôn giáo:
                        <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Nơi đăng ký hộ khẩu thường trú:
                        <input type="text" value={registeredAddress} onChange={(e) => setRegisteredAddress(e.target.value)} />
                    </label>
                
                    <label>
                        Nơi ở hiện nay:
                        <input type="text" value={currentResidence} onChange={(e) => setCurrentResidence(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Nghề nghiệp khi được tuyển dụng:
                        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                    </label>
                
                    <label>
                        Ngày tuyển dụng:
                        <input type="date" value={recruitmentDate} onChange={(e) => setRecruitmentDate(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Cơ quan, đơn vị tuyển dụng:
                        <input type="text" value={recruitingAgency} onChange={(e) => setRecruitingAgency(e.target.value)} />
                    </label>
                
                    <label>
                        Chức danh:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Công việc được giao:
                        <input type="text" value={assignedTasks} onChange={(e) => setAssignedTasks(e.target.value)} />
                    </label>
                
                    <label>
                        Chức danh nghề nghiệp viên chức:
                        <input type="text" value={professionalTitle} onChange={(e) => setProfessionalTitle(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Mã số:
                        <input type="number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
                    </label>
                
                    <label>
                        Bậc lương:
                        <input type="number" value={salaryRank} onChange={(e) => setSalaryRank(e.target.value)} />
                    </label>
                
                    <label>
                        Hệ số:
                        <input type="number" value={coefficient} onChange={(e) => setCoefficient(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Ngày hưởng:
                        <input type="date" value={effectiveDate} onChange={(e) => setEffectiveDate(e.target.value)} />
                    </label>
                
                    <label>
                        Phụ cấp chức danh:
                        <input type="number" value={titleAllowance} onChange={(e) => setTitleAllowance(e.target.value)} />
                    </label>
                
                    <label>
                        Phụ cấp khác:
                        <input type="number" value={otherAllowances} onChange={(e) => setOtherAllowances(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Trình độ giáo dục phổ thông:
                        <input type="text" value={educationalLevel} onChange={(e) => setEducationalLevel(e.target.value)} />
                    </label>
                
                    <label>
                        Trình độ chuyên môn cao nhất:
                        <input type="text" value={highestQualification} onChange={(e) => setHighestQualification(e.target.value)} />
                    </label>
                </div>

                {/* Hiển thị thông tin lý lịch */}
            </div>
            <div className='CV'>
                <h2 style={{ textAlign: 'center' }}>Sơ yếu lý lịch viên chức</h2>
                <div style={{ display: 'flex' }}>
                    {image && (
                        <img src={image} alt='' style={{ aspectRatio: '9/16', width: "160px", height: '200px' }} />

                    )}
                    <div style={{ width: "100%", marginLeft: "20px" }}>
                        <p>Họ và tên: {fullName}</p>
                        <p>Tên gọi khác: {otherNames}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", justifyItems: 'center' }}>
                            <p style={{ margin: "0", width: '80%' }}>Ngày sinh: {dateOfBirth}</p>
                            <p style={{ margin: "0", width: '20%' }}>Giới tính: {gender}</p>
                        </div>
                        <p>Nơi sinh: {placeOfBirth}</p>
                        <p>Quê quán: {hometown}</p>
                    </div>
                </div>
                <div>Dân tộc: {ethnicity}</div>
                <p>Tôn giáo: {religion}</p>
                <p>Nơi đăng ký hộ khẩu thường trú: {registeredAddress}</p>
                <p>Nơi ở hiện nay: {currentResidence}</p>
                <p>Nghề nghiệp khi được tuyển dụng: {occupation}</p>
                <div style={{ display: "flex", justifyContent: "space-between", justifyItems: 'center' }}>
                    <p style={{ margin: "0" }}>Ngày tuyển dụng: {recruitmentDate}</p>
                    <p style={{ margin: "0", paddingRight: '280px' }}>Cơ quan, đơn vị tuyển dụng: {recruitingAgency}</p>
                </div>
                <p>Chức danh: {title}</p>
                <p>Công việc được giao: {assignedTasks}</p>
                <div style={{ display: "flex", justifyContent: "space-between", justifyItems: 'center' }}>
                    <p style={{ margin: "0", width: '80%' }}>Chức danh nghề nghiệp viên chức: {professionalTitle}</p>
                    <p style={{ margin: "0", width: '20%' }}>Mã số: {idNumber}</p>
                </div>
                <div style={{ display: "flex", justifyItems: 'center' }}>
                    <p style={{ margin: "0", width: '15%' }}>Bậc lương: {salaryRank}</p>
                    <p style={{ margin: "0", width: '10%' }}>Hệ số: {coefficient}</p>
                    <p style={{ margin: "0", width: '25%' }}>Ngày hưởng: {effectiveDate}</p>
                    <p style={{ margin: "0", width: '25%' }}>Phụ cấp chức danh: {titleAllowance}</p>
                    <p style={{ margin: "0", width: '25%' }}>Phụ cấp khác: {otherAllowances}</p>
                </div>
                <p>Trình độ giáo dục phổ thông: {educationalLevel}</p>
                <p>Trình độ chuyên môn cao nhất: {highestQualification}</p>
            </div>
        </div>
    )
}

export default Person
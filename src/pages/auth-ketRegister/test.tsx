{
  /*}
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uploadKeyImage, uploadKeyInfo } from '../../shared/apis/admin/key/keyApi';
import AdminHeader from '../../shared/components/Admin/AdminHeader';
import AdminNavigationBar from '../../shared/components/Admin/AdminNavigationBar';

const KeyRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buildingName = location.state?.buildingName || '새천년관';
  const [selected, setSelected] = useState<'space' | 'key'>('key');

  const [adminName, setAdminName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const isUploaded = file !== null;

  const handleSubmit = async () => {
    if (!file || !adminName || !description) return alert('모든 항목을 입력해주세요.');

    try {
      const imageUrl = await uploadKeyImage(file);
      await uploadKeyInfo({
        buildingName,
        adminName,
        imageUrl,
        description,
      });
      alert('등록 완료!');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        alert('등록 실패: ' + err.message);
      } else {
        alert('등록 실패: 알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <AdminHeader />
      <AdminNavigationBar selected={selected} setSelected={setSelected} />
      
      <main className="flex flex-col items-center space-y-6 px-4 py-6 text-sm">
        <div className="flex h-[36px] w-[358px] shrink-0 items-center justify-center space-x-2 rounded-[8px] bg-[#ECECEC] p-1">
          {['새천년관', '공학관', '신공학관'].map((name) => (
            <button
              key={name}
              className={`h-full w-1/3 rounded-[8px] px-4 py-[4px] text-xl font-[600] ${
                buildingName === name ? 'bg-white text-[#217446]' : 'bg-[#ECECEC] text-[#6C7072]'
              }`}
              disabled
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col space-y-[22px] p-6 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            관리자명
          </label>
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className="h-[50px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-[14px] leading-[20px] font-bold text-[#464A4D]">사진</label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setFile(f);
            }}
          />


          <label
            htmlFor="file"
            className="flex h-[50px] w-[163px] cursor-pointer items-center justify-center space-x-2 rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] pl-[3px]"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                fill="#BBC5CC"
              />
            </svg>

            <span className={`text-[14px] ${isUploaded ? 'text-[#217446]' : 'text-[#CBD2D9]'}`}>
              {isUploaded ? '업로드 완료' : '사진 업로드하기'}
            </span>
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            설명
          </label>
          <textarea
            className="h-[231px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            placeholder="내용을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mx-auto flex w-[360px] justify-between space-x-4 pt-4">
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#ECECEC] py-2 text-[16px] font-[600] text-[#929292]"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#217446] py-2 text-[16px] font-[600] text-white"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default KeyRegisterPage;
*/
}
{
  /*}
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uploadKeyImage, uploadKeyInfo } from '../../shared/apis/admin/key/keyApi';
import AdminHeader from '../../shared/components/Admin/AdminHeader';
import AdminNavigationBar from '../../shared/components/Admin/AdminNavigationBar';

const KeyRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buildingName = location.state?.buildingName || '새천년관';
  const [selected, setSelected] = useState<'space' | 'key'>('key');

  const [adminName, setAdminName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const isUploaded = file !== null;

  const handleSubmit = async () => {
    if (!file || !adminName || !description) return alert('모든 항목을 입력해주세요.');

    try {
      const imageUrl = await uploadKeyImage(file);
      await uploadKeyInfo({
        buildingName,
        adminName,
        imageUrl,
        description,
      });
      alert('등록 완료!');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        alert('등록 실패: ' + err.message);
      } else {
        alert('등록 실패: 알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <AdminHeader />
      <AdminNavigationBar selected={selected} setSelected={setSelected} />
      
      <main className="flex flex-col items-center space-y-6 px-4 py-6 text-sm">
        <div className="flex h-[36px] w-[358px] shrink-0 items-center justify-center space-x-2 rounded-[8px] bg-[#ECECEC] p-1">
          {['새천년관', '공학관', '신공학관'].map((name) => (
            <button
              key={name}
              className={`h-full w-1/3 rounded-[8px] px-4 py-[4px] text-xl font-[600] ${
                buildingName === name ? 'bg-white text-[#217446]' : 'bg-[#ECECEC] text-[#6C7072]'
              }`}
              disabled
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col space-y-[22px] p-6 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            관리자명
          </label>
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className="h-[50px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-[14px] leading-[20px] font-bold text-[#464A4D]">사진</label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setFile(f);
            }}
          />


          <label
            htmlFor="file"
            className="flex h-[50px] w-[163px] cursor-pointer items-center justify-center space-x-2 rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] pl-[3px]"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                fill="#BBC5CC"
              />
            </svg>

            <span className={`text-[14px] ${isUploaded ? 'text-[#217446]' : 'text-[#CBD2D9]'}`}>
              {isUploaded ? '업로드 완료' : '사진 업로드하기'}
            </span>
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            설명
          </label>
          <textarea
            className="h-[231px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            placeholder="내용을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mx-auto flex w-[360px] justify-between space-x-4 pt-4">
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#ECECEC] py-2 text-[16px] font-[600] text-[#929292]"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#217446] py-2 text-[16px] font-[600] text-white"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default KeyRegisterPage;
*/
}
{
  /*}
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uploadKeyImage, uploadKeyInfo } from '../../shared/apis/admin/key/keyApi';
import AdminHeader from '../../shared/components/Admin/AdminHeader';
import AdminNavigationBar from '../../shared/components/Admin/AdminNavigationBar';

const KeyRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buildingName = location.state?.buildingName || '새천년관';
  const [selected, setSelected] = useState<'space' | 'key'>('key');

  const [adminName, setAdminName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const isUploaded = file !== null;

  const handleSubmit = async () => {
    if (!file || !adminName || !description) return alert('모든 항목을 입력해주세요.');

    try {
      const imageUrl = await uploadKeyImage(file);
      await uploadKeyInfo({
        buildingName,
        adminName,
        imageUrl,
        description,
      });
      alert('등록 완료!');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        alert('등록 실패: ' + err.message);
      } else {
        alert('등록 실패: 알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <AdminHeader />
      <AdminNavigationBar selected={selected} setSelected={setSelected} />
      
      <main className="flex flex-col items-center space-y-6 px-4 py-6 text-sm">
        <div className="flex h-[36px] w-[358px] shrink-0 items-center justify-center space-x-2 rounded-[8px] bg-[#ECECEC] p-1">
          {['새천년관', '공학관', '신공학관'].map((name) => (
            <button
              key={name}
              className={`h-full w-1/3 rounded-[8px] px-4 py-[4px] text-xl font-[600] ${
                buildingName === name ? 'bg-white text-[#217446]' : 'bg-[#ECECEC] text-[#6C7072]'
              }`}
              disabled
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col space-y-[22px] p-6 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            관리자명
          </label>
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className="h-[50px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-[14px] leading-[20px] font-bold text-[#464A4D]">사진</label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setFile(f);
            }}
          />


          <label
            htmlFor="file"
            className="flex h-[50px] w-[163px] cursor-pointer items-center justify-center space-x-2 rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] pl-[3px]"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                fill="#BBC5CC"
              />
            </svg>

            <span className={`text-[14px] ${isUploaded ? 'text-[#217446]' : 'text-[#CBD2D9]'}`}>
              {isUploaded ? '업로드 완료' : '사진 업로드하기'}
            </span>
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            설명
          </label>
          <textarea
            className="h-[231px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            placeholder="내용을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mx-auto flex w-[360px] justify-between space-x-4 pt-4">
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#ECECEC] py-2 text-[16px] font-[600] text-[#929292]"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#217446] py-2 text-[16px] font-[600] text-white"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default KeyRegisterPage;
*/
}
{
  /*}
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uploadKeyImage, uploadKeyInfo } from '../../shared/apis/admin/key/keyApi';
import AdminHeader from '../../shared/components/Admin/AdminHeader';
import AdminNavigationBar from '../../shared/components/Admin/AdminNavigationBar';

const KeyRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buildingName = location.state?.buildingName || '새천년관';
  const [selected, setSelected] = useState<'space' | 'key'>('key');

  const [adminName, setAdminName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const isUploaded = file !== null;

  const handleSubmit = async () => {
    if (!file || !adminName || !description) return alert('모든 항목을 입력해주세요.');

    try {
      const imageUrl = await uploadKeyImage(file);
      await uploadKeyInfo({
        buildingName,
        adminName,
        imageUrl,
        description,
      });
      alert('등록 완료!');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        alert('등록 실패: ' + err.message);
      } else {
        alert('등록 실패: 알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <AdminHeader />
      <AdminNavigationBar selected={selected} setSelected={setSelected} />
      
      <main className="flex flex-col items-center space-y-6 px-4 py-6 text-sm">
        <div className="flex h-[36px] w-[358px] shrink-0 items-center justify-center space-x-2 rounded-[8px] bg-[#ECECEC] p-1">
          {['새천년관', '공학관', '신공학관'].map((name) => (
            <button
              key={name}
              className={`h-full w-1/3 rounded-[8px] px-4 py-[4px] text-xl font-[600] ${
                buildingName === name ? 'bg-white text-[#217446]' : 'bg-[#ECECEC] text-[#6C7072]'
              }`}
              disabled
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col space-y-[22px] p-6 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            관리자명
          </label>
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className="h-[50px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-[14px] leading-[20px] font-bold text-[#464A4D]">사진</label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setFile(f);
            }}
          />


          <label
            htmlFor="file"
            className="flex h-[50px] w-[163px] cursor-pointer items-center justify-center space-x-2 rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] pl-[3px]"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                fill="#BBC5CC"
              />
            </svg>

            <span className={`text-[14px] ${isUploaded ? 'text-[#217446]' : 'text-[#CBD2D9]'}`}>
              {isUploaded ? '업로드 완료' : '사진 업로드하기'}
            </span>
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            설명
          </label>
          <textarea
            className="h-[231px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            placeholder="내용을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mx-auto flex w-[360px] justify-between space-x-4 pt-4">
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#ECECEC] py-2 text-[16px] font-[600] text-[#929292]"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#217446] py-2 text-[16px] font-[600] text-white"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default KeyRegisterPage;
*/
}
{
  /*}
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uploadKeyImage, uploadKeyInfo } from '../../shared/apis/admin/key/keyApi';
import AdminHeader from '../../shared/components/Admin/AdminHeader';
import AdminNavigationBar from '../../shared/components/Admin/AdminNavigationBar';

const KeyRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buildingName = location.state?.buildingName || '새천년관';
  const [selected, setSelected] = useState<'space' | 'key'>('key');

  const [adminName, setAdminName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const isUploaded = file !== null;

  const handleSubmit = async () => {
    if (!file || !adminName || !description) return alert('모든 항목을 입력해주세요.');

    try {
      const imageUrl = await uploadKeyImage(file);
      await uploadKeyInfo({
        buildingName,
        adminName,
        imageUrl,
        description,
      });
      alert('등록 완료!');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        alert('등록 실패: ' + err.message);
      } else {
        alert('등록 실패: 알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <AdminHeader />
      <AdminNavigationBar selected={selected} setSelected={setSelected} />
      
      <main className="flex flex-col items-center space-y-6 px-4 py-6 text-sm">
        <div className="flex h-[36px] w-[358px] shrink-0 items-center justify-center space-x-2 rounded-[8px] bg-[#ECECEC] p-1">
          {['새천년관', '공학관', '신공학관'].map((name) => (
            <button
              key={name}
              className={`h-full w-1/3 rounded-[8px] px-4 py-[4px] text-xl font-[600] ${
                buildingName === name ? 'bg-white text-[#217446]' : 'bg-[#ECECEC] text-[#6C7072]'
              }`}
              disabled
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col space-y-[22px] p-6 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            관리자명
          </label>
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className="h-[50px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-[14px] leading-[20px] font-bold text-[#464A4D]">사진</label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setFile(f);
            }}
          />


          <label
            htmlFor="file"
            className="flex h-[50px] w-[163px] cursor-pointer items-center justify-center space-x-2 rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] pl-[3px]"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                fill="#BBC5CC"
              />
            </svg>

            <span className={`text-[14px] ${isUploaded ? 'text-[#217446]' : 'text-[#CBD2D9]'}`}>
              {isUploaded ? '업로드 완료' : '사진 업로드하기'}
            </span>
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            설명
          </label>
          <textarea
            className="h-[231px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            placeholder="내용을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mx-auto flex w-[360px] justify-between space-x-4 pt-4">
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#ECECEC] py-2 text-[16px] font-[600] text-[#929292]"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#217446] py-2 text-[16px] font-[600] text-white"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default KeyRegisterPage;
*/
}
{
  /*}
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uploadKeyImage, uploadKeyInfo } from '../../shared/apis/admin/key/keyApi';
import AdminHeader from '../../shared/components/Admin/AdminHeader';
import AdminNavigationBar from '../../shared/components/Admin/AdminNavigationBar';

const KeyRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buildingName = location.state?.buildingName || '새천년관';
  const [selected, setSelected] = useState<'space' | 'key'>('key');

  const [adminName, setAdminName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const isUploaded = file !== null;

  const handleSubmit = async () => {
    if (!file || !adminName || !description) return alert('모든 항목을 입력해주세요.');

    try {
      const imageUrl = await uploadKeyImage(file);
      await uploadKeyInfo({
        buildingName,
        adminName,
        imageUrl,
        description,
      });
      alert('등록 완료!');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        alert('등록 실패: ' + err.message);
      } else {
        alert('등록 실패: 알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <AdminHeader />
      <AdminNavigationBar selected={selected} setSelected={setSelected} />
      
      <main className="flex flex-col items-center space-y-6 px-4 py-6 text-sm">
        <div className="flex h-[36px] w-[358px] shrink-0 items-center justify-center space-x-2 rounded-[8px] bg-[#ECECEC] p-1">
          {['새천년관', '공학관', '신공학관'].map((name) => (
            <button
              key={name}
              className={`h-full w-1/3 rounded-[8px] px-4 py-[4px] text-xl font-[600] ${
                buildingName === name ? 'bg-white text-[#217446]' : 'bg-[#ECECEC] text-[#6C7072]'
              }`}
              disabled
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col space-y-[22px] p-6 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            관리자명
          </label>
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className="h-[50px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-[14px] leading-[20px] font-bold text-[#464A4D]">사진</label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setFile(f);
            }}
          />


          <label
            htmlFor="file"
            className="flex h-[50px] w-[163px] cursor-pointer items-center justify-center space-x-2 rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] pl-[3px]"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                fill="#BBC5CC"
              />
            </svg>

            <span className={`text-[14px] ${isUploaded ? 'text-[#217446]' : 'text-[#CBD2D9]'}`}>
              {isUploaded ? '업로드 완료' : '사진 업로드하기'}
            </span>
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            설명
          </label>
          <textarea
            className="h-[231px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            placeholder="내용을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mx-auto flex w-[360px] justify-between space-x-4 pt-4">
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#ECECEC] py-2 text-[16px] font-[600] text-[#929292]"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#217446] py-2 text-[16px] font-[600] text-white"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default KeyRegisterPage;
*/
}
{
  /*}
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { uploadKeyImage, uploadKeyInfo } from '../../shared/apis/admin/key/keyApi';
import AdminHeader from '../../shared/components/Admin/AdminHeader';
import AdminNavigationBar from '../../shared/components/Admin/AdminNavigationBar';

const KeyRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buildingName = location.state?.buildingName || '새천년관';
  const [selected, setSelected] = useState<'space' | 'key'>('key');

  const [adminName, setAdminName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const isUploaded = file !== null;

  const handleSubmit = async () => {
    if (!file || !adminName || !description) return alert('모든 항목을 입력해주세요.');

    try {
      const imageUrl = await uploadKeyImage(file);
      await uploadKeyInfo({
        buildingName,
        adminName,
        imageUrl,
        description,
      });
      alert('등록 완료!');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) {
        alert('등록 실패: ' + err.message);
      } else {
        alert('등록 실패: 알 수 없는 오류');
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <AdminHeader />
      <AdminNavigationBar selected={selected} setSelected={setSelected} />
      
      <main className="flex flex-col items-center space-y-6 px-4 py-6 text-sm">
        <div className="flex h-[36px] w-[358px] shrink-0 items-center justify-center space-x-2 rounded-[8px] bg-[#ECECEC] p-1">
          {['새천년관', '공학관', '신공학관'].map((name) => (
            <button
              key={name}
              className={`h-full w-1/3 rounded-[8px] px-4 py-[4px] text-xl font-[600] ${
                buildingName === name ? 'bg-white text-[#217446]' : 'bg-[#ECECEC] text-[#6C7072]'
              }`}
              disabled
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col space-y-[22px] p-6 text-sm">
        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            관리자명
          </label>
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className="h-[50px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-[14px] leading-[20px] font-bold text-[#464A4D]">사진</label>

          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setFile(f);
            }}
          />


          <label
            htmlFor="file"
            className="flex h-[50px] w-[163px] cursor-pointer items-center justify-center space-x-2 rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] pl-[3px]"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
                fill="#BBC5CC"
              />
            </svg>

            <span className={`text-[14px] ${isUploaded ? 'text-[#217446]' : 'text-[#CBD2D9]'}`}>
              {isUploaded ? '업로드 완료' : '사진 업로드하기'}
            </span>
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="w-[80px] pl-[3px] text-[14px] leading-[20px] font-bold text-[#464A4D]">
            설명
          </label>
          <textarea
            className="h-[231px] w-[358px] rounded-[8px] border border-[#E8EEF2] bg-white px-[14px] py-[13px] text-sm text-[14px] placeholder:text-[#CBD2D9]"
            placeholder="내용을 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="mx-auto flex w-[360px] justify-between space-x-4 pt-4">
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#ECECEC] py-2 text-[16px] font-[600] text-[#929292]"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="h-[48px] w-[171px] rounded-[10px] bg-[#217446] py-2 text-[16px] font-[600] text-white"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default KeyRegisterPage;
*/
}

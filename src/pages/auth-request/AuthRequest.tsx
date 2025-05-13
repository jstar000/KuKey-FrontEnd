// 건국대학교 학생 인증
import { useForm, type SubmitHandler } from 'react-hook-form';
import UserInput from '../../shared/components/UserInput';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

type AuthRequestProps = {
  userId: string;
  authNumber: string;
};

const AuthRequest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<AuthRequestProps>({
    mode: 'onChange',
  });

  const [isRequestAuthBtnClicked, setIsRequestAuthBtnClicked] = useState(false);

  const onSubmit: SubmitHandler<AuthRequestProps> = async (data) => {
    console.log('폼 제출 성공!', data);
  };

  const authNumber = watch('authNumber');
  //   const navigate = useNavigate();

  const handleRequestAuthNum = () => {
    setIsRequestAuthBtnClicked(true);
  };

  const handleBack = () => {
    // 뒤로가기
  };

  return (
    <div className="w-full">
      <div className="form-wrapper">
        <h1 className="form-title">건국대학교 학생 인증</h1>

        <main className="mt-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-2"
          >
            <div className="flex gap-2">
              <UserInput
                registerName="userId"
                placeholder="건국대학교 이메일을 입력해주세요"
                register={register}
                error={errors.userId}
                rules={{
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                }}
                width="24rem"
              />

              <button
                type="button"
                className="form-button"
                disabled={!isValid}
                onClick={handleRequestAuthNum}
              >
                인증번호 요청
              </button>
            </div>

            <div className="flex gap-2">
              <UserInput
                registerName="authNumber"
                type="number"
                placeholder="인증번호를 입력해주세요"
                register={register}
                error={errors.authNumber}
                rules={{
                    required: '인증번호를 입력해주세요.'
                }}
                width="24rem"
              />
              <button type="submit" className="form-button" disabled={!isRequestAuthBtnClicked || !authNumber}>
                인증번호 입력
              </button>
            </div>
          </form>
        </main>

        <div className="mt-4 flex text-[1.2rem]">
          <button type="button" className="text-green-500 underline" onClick={handleBack}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthRequest;

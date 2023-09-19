import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import * as yup from 'yup';
import '../styles/JoinPage.css';



// Yup 스키마 정의
const schema = yup.object().shape({
  username: yup.string().required('아이디를 입력하세요'),
  password: yup
    .string()
    .required('비밀번호를 입력하세요')
    .matches(
      /^(?=.*[A-Za-z])(?=.*[@#$%^&+=!])(?=.*\d)/,
      '영어, 특수문자, 숫자를 모두 포함해야 합니다'
    ),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], '비밀번호가 일치하지 않습니다'),
  nickname: yup.string().required('닉네임을 입력하세요'),
  address: yup.string().required('주소를 입력하세요'),
  zipcode: yup.string().required('우편번호를 입력하세요'),
});

// 폼 데이터의 타입 정의
interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  address: string;
  zipcode: string;
}

function JoinPage() {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: async (values) => {
      try {
        await schema.validate(values, { abortEarly: false });
        return {
          values,
          errors: {} as Record<string, { type: string; message: string }>, // 타입을 명시합니다
        };
      } catch (errors) {
        return {
          values: {},
          errors: (errors as any).inner.reduce((allErrors: any, currentError: { path: any; type: any; message: any; }) => {
            return {
              ...allErrors,
              [currentError.path]: {
                type: currentError.type || 'validation',
                message: currentError.message || 'Validation error',
              },
            };
          }, {}),
        };
      }
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="join-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="아이디"
                variant="outlined"
                error={!!errors.username}
                helperText={errors?.username?.message}
              />
            )}
          />
          {/* 중복 확인 탭 */}
          {/* 중복 확인 로직을 추가하세요 */}
        </div>

        <div className="form-group">
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="비밀번호"
                type="password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
            )}
          />
          <div className="password-requirements">
            * 영어와 특수문자(@#$%^&+=!) 한 개를 포함해야 합니다.
          </div>
        </div>

        <div className="form-group">
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="비밀번호 확인"
                type="password"
                variant="outlined"
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
              />
            )}
          />
        </div>

        <div className="form-group">
          <Controller
            name="nickname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="닉네임"
                variant="outlined"
                error={!!errors.nickname}
                helperText={errors?.nickname?.message}
              />
            )}
          />
          {/* 중복 확인 탭 */}
          {/* 중복 확인 로직을 추가하세요 */}
        </div>

        <div className="form-group">
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="주소"
                variant="outlined"
                error={!!errors.address}
                helperText={errors?.address?.message}
              />
            )}
          />
        </div>

        <div className="form-group">
          <Controller
            name="zipcode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="우편번호"
                variant="outlined"
                error={!!errors.zipcode}
                helperText={errors?.zipcode?.message}
              />
            )}
          />
        </div>

        <Button variant="contained" color="primary" type="submit">
          저장
        </Button>
      </form>
    </div>
  );
}

export default JoinPage;

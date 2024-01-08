import React from "react";
import * as yup from "yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "../styles/MyInfo.css";

interface FormValues {
  username: string;
  confirmPassword: string;
  nickname: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
}

const MyInfo: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: "",
      confirmPassword: "",
      nickname: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // yup 스키마를 사용하여 양식을 유효성 검사
      await schema.validate(data);

      // 유효성 검사가 통과되면 양식 제출 처리
    } catch (error) {
      console.error(error); // 유효성 검사 오류 기록
    }
  };

  const schema = yup.object().shape({
    username: yup.string().required("아이디를 입력하세요."),
    confirmPassword: yup.string().required("비밀번호를 확인하세요."),
    nickname: yup.string().required("닉네임을 입력하세요."),
    phoneNumber: yup.string().required("휴대폰 번호를 입력하세요."),
    address: yup.string().required("주소를 입력하세요."),
    postalCode: yup.string().required("우편번호를 입력하세요."),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>정보확인</label>

        <Controller
          name="nickname"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="닉네임"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>

      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="아이디"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="비밀번호"
            type="password"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <div>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <div>
              <TextField
                {...field}
                label="휴대폰 번호"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                style={{ width: "80px", marginRight: "8px" }}
              />
              <span>-</span>
              <TextField
                {...field}
                label=""
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                style={{ width: "80px", margin: "0 8px" }}
              />
              <span>-</span>
              <TextField
                {...field}
                label=""
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                style={{ width: "80px" }}
              />
            </div>
          )}
        />
      </div>

      <Controller
        name="address"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="주소"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="postalCode"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="우편번호"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <button type="submit">제출</button>
    </form>
  );
};

export default MyInfo;

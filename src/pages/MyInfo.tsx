import React from "react";
import * as yup from "yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface FormValues {
  username: string;
  confirmPassword: string;
  nickname: string;
}

const MyInfo: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Validate the form using the yup schema
      await schema.validate(data);

      // Handle form submission if validation passes
    } catch (error) {
      console.error(error); // Log the validation errors
    }
  };

  const schema = yup.object().shape({
    username: yup.string().required("아이디를 입력하세요."),
    confirmPassword: yup.string().required("비밀번호를 확인하세요."),
    nickname: yup.string().required("닉네임을 입력하세요."),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            label="비밀번호 확인"
            type="password"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

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

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyInfo;

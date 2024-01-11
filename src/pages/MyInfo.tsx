import React, { useState } from "react";
import * as yup from "yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
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
  const { control, handleSubmit, setValue } = useForm<FormValues>({
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
      await schema.validate(data);
      setValue("nickname", data.nickname);
      setValue("phoneNumber", data.phoneNumber);
      setValue("address", data.address);
      setValue("postalCode", data.postalCode);
      console.log(data);
    } catch (error) {
      console.error(error);
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAddressSearchModal = () => {
    setIsModalOpen(true);
  };

  const closeAddressSearchModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressSelect = (address: string, zipcode: string) => {
    setValue("address", address);
    setValue("postalCode", zipcode);
    closeAddressSearchModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>정보 확인</label>

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
          <div>
            <TextField
              {...field}
              label="주소"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
            <Button onClick={openAddressSearchModal}>주소 검색</Button>
          </div>
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

      <button type="submit">수정</button>

      <Modal open={isModalOpen} onClose={closeAddressSearchModal}>
        <div className="modal-content">
          <DaumPostcode
            onComplete={(data) => {
              handleAddressSelect(data.address, data.zonecode);
            }}
          />
          <Button onClick={() => handleAddressSelect("", "")}>선택</Button>
        </div>
      </Modal>
    </form>
  );
};

export default MyInfo;

import React, { useState, useRef } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button, Grid } from "@material-ui/core";
import * as yup from "yup";
import "../styles/JoinPage.css";
import Footer from "../components/Footer";
import AddressSearch from "../components/AddressSearch";
import AddressSearchModal from "../components/AddressSearchModal";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "@mui/material";
import DaumPostcode from "react-daum-postcode";

const schema = yup.object().shape({
  username: yup.string().required("아이디를 입력하세요"),
  password: yup
    .string()
    .required("비밀번호를 입력하세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[@#$%^&+=!])(?=.*\d)/,
      "영어, 특수문자, 숫자를 모두 포함해야 합니다"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "비밀번호가 일치하지 않습니다"),
  nickname: yup.string().required("닉네임을 입력하세요"),
  address: yup.string().required("주소를 입력하세요"),
  zipcode: yup.string().required("우편번호를 입력하세요"),
  phoneNumber1: yup.string().required("전화번호를 입력하세요"),
  phoneNumber2: yup.string().required("전화번호를 입력하세요"),
  phoneNumber3: yup.string().required("전화번호를 입력하세요"),
});

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  address: string;
  zipcode: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
}

function JoinPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: async (values) => {
      try {
        await schema.validate(values, { abortEarly: false });
        return {
          values,
          errors: {} as Record<string, { type: string; message: string }>,
        };
      } catch (errors) {
        return {
          values: {},
          errors: (errors as any).inner.reduce(
            (
              allErrors: any,
              currentError: { path: any; type: any; message: any }
            ) => {
              return {
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type || "validation",
                  message: currentError.message || "Validation error",
                },
              };
            },
            {}
          ),
        };
      }
    },
  });

  const phoneNumber1Ref = useRef<HTMLInputElement | null>(null);
  const phoneNumber2Ref = useRef<HTMLInputElement | null>(null);

  const [isAddressSearchModalOpen, setAddressSearchModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedZipcode, setSelectedZipcode] = useState("");

  const openAddressSearchModal = () => {
    setAddressSearchModalOpen(true);
  };

  const closeAddressSearchModal = () => {
    setAddressSearchModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneNumber1Input = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3 && phoneNumber1Ref.current) {
      phoneNumber1Ref.current.blur();
      phoneNumber2Ref.current?.focus();
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleAddressSelect = (address: string, zipcode: string) => {
    setSelectedAddress(address);
    setSelectedZipcode(zipcode);
  };

  return (
    <div className="login-container">
      <div className="joinout">
        <div className="join-page">
          <div className="join-header">
            <h2>회원가입</h2>
          </div>
          <div className="loin">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login-list">
                <div className="list">이메일</div>
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
                </div>
                <div className="list-button" style={{ marginLeft: "10px" }}>
                  <button className="Double-check">중복 확인</button>
                </div>
              </div>
              <div className="login-list">
                <div className="list">비밀번호</div>
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
                </div>
              </div>
              <div className="password-requirements">
                * 영어와 특수문자(@#$%^&+=!) 한 개를 포함해야 합니다.
              </div>

              <div className="login-list">
                <div className="list">비밀번호 확인</div>
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
              </div>

              <div className="login-list">
                <div className="list">닉네임</div>
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
              </div>

              <div className="login-list">
                <div className="list">주소</div>
                <div className="form-group">
                  <TextField
                    label="주소"
                    variant="outlined"
                    value={selectedAddress}
                  />
                  <Button onClick={openAddressSearchModal}>주소 검색</Button>
                  <TextField
                    label="우편번호"
                    variant="outlined"
                    value={selectedZipcode}
                  />
                </div>
                <Modal open={isModalOpen} onClose={closeAddressSearchModal}>
                  <div className="modal-content">
                    <DaumPostcode
                      onComplete={(data) => {
                        handleAddressSelect(data.address, data.zonecode);
                      }}
                    />
                    <Button
                      onClick={() =>
                        handleAddressSelect(selectedAddress, selectedZipcode)
                      }
                    >
                      선택
                    </Button>
                  </div>
                </Modal>
              </div>

              <div className="login-list">
                <div className="list">전화번호</div>
                <div className="form-group">
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={3}>
                      <Controller
                        name="phoneNumber1"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            variant="outlined"
                            error={!!errors.phoneNumber1}
                            helperText={errors?.phoneNumber1?.message}
                            inputRef={phoneNumber1Ref}
                            onInput={handlePhoneNumber1Input}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <span style={{ lineHeight: "55px" }}>-</span>
                    </Grid>
                    <Grid item xs={3}>
                      <Controller
                        name="phoneNumber2"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            variant="outlined"
                            error={!!errors.phoneNumber2}
                            helperText={errors?.phoneNumber2?.message}
                            inputRef={phoneNumber2Ref}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <span style={{ lineHeight: "55px" }}>-</span>
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="phoneNumber3"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            variant="outlined"
                            error={!!errors.phoneNumber3}
                            helperText={errors?.phoneNumber3?.message}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </div>
              </div>

              <Button
                className="save"
                variant="contained"
                color="primary"
                type="submit"
              >
                저장
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <AddressSearchModal
        open={isAddressSearchModalOpen}
        onClose={closeAddressSearchModal}
        onAddressSelect={handleAddressSelect}
      />
    </div>
  );
}

export default JoinPage;

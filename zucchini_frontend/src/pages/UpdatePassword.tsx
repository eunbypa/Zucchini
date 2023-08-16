import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UpdatePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password"); // "password" 필드의 값을 감시

  /*
   * 이메일 인증 다시?
   * 비번 빼고 기존 정보 채워주는 통신 필요
   * 닉네임 중복확인 통신, 로직필요
   * 비번 전과 동일한 형식인지 통신, 로직필요
   */

  const onSubmit = (data: any) => {
    // 제출 통신 필요

    alert(JSON.stringify(data));
  };

  return (
    <StyledAll
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledDiv>
        <StyledTitle>비밀번호 변경</StyledTitle>
        <StyledSpanDiv>
          <StyledSpan>현재와 다른 비밀번호를 입력해주세요.</StyledSpan>
        </StyledSpanDiv>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "비밀번호는 8자 이상이어야 합니다.",
              },
              maxLength: {
                value: 16,
                message: "비밀번호는 16자 이하여야 합니다.",
              },
            })}
          />
          <StyledMessage>
            <ErrorMessage errors={errors} name="password" />
          </StyledMessage>
          <Input
            type="password"
            placeholder="비밀번호 재확인"
            {...register("passwordConfirmation", {
              required: true,
              validate: (value) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            })}
          />
          <StyledMessage>
            <ErrorMessage errors={errors} name="passwordConfirmation" />
          </StyledMessage>
          <StyledButtonDiv>
            <StyledButton>수정</StyledButton>
            <StyledButton>
              <Link to={"/mypage"}>취소</Link>
            </StyledButton>
          </StyledButtonDiv>
        </StyledForm>
      </StyledDiv>
    </StyledAll>
  );
}
const StyledAll = styled(motion.div)`
  display: flex;
  justify-content: center;
  height: auto;
  padding-top: 2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 20rem;
  margin: 4rem;
  text-align: center;
`;

const StyledTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1rem;
`;

const StyledSpanDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  margin: 0.2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Input = styled.input`
  height: 3rem;
  border: none;
  background-color: #f8f8f8;
  border-radius: 0.4rem;
  padding-left: 1rem;
  margin: 0.3rem;
  font-size: 1rem;
`;

const StyledMessage = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 1rem;
  color: tomato;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  height: 2.9rem;
  border: 2px solid #cde990;
  border-radius: 0.4rem;
  background-color: white;
  margin: 0.3rem;
  font-size: 1rem;

  &:hover {
    background-color: #cde990;
    cursor: pointer;
  }
`;
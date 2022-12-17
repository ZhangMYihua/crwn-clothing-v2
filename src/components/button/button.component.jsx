

import { BaseButton, GoogleSigninButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};


//버튼스트링을 받고 임포트한 버튼의 종류를 골라서 디스플레이해주는 함수 , 안에 파라미터로 기본 버튼인 베이스 버튼을 할당해준다
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google] : GoogleSigninButton,
    [BUTTON_TYPE_CLASSES.inverted] : InvertedButton,

  }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {

  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;

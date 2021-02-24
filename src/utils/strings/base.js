// ES6 module syntax
import LocalizedStrings from "react-localization";

export const strAuth = new LocalizedStrings({
  en: {
    sigIn: "sign in",
    signUp: "sign up",
    email: "email address",
    password: "password",
    autoLogin: "Remember me",
    forgotPassword: "FORGOT YOUR PASSWORD?",
    snsLogin: "or sign in with",
    snsSignUp: "or sign up with",
    changeToSignUp: "CREATE A NEW ACCOUNT",
    changeToSignIn: "I ALREADY HAVE AN ACCOUNT!",
    agreeFirst: "I have read and agree to the ",
    agreeSecond: "Terms of Use",
    agreeThird: "and",
    agreeForth: "Customer Privacy Policy.",
    // : "",
  },
  ko: {
    sigIn: "로그인",
    signUp: "회원가입",
    email: "이메일",
    password: "비밀번호",
    autoLogin: "자동로그인",
    forgotPassword: "비밀번호 재발급",
    snsLogin: "또는 SNS 로그인",
    snsSignUp: "또는 SNS 회원가입",
    changeToSignUp: "계정이 아직 없으신가요?",
    changeToSignIn: "이미 계정이 있으신가요?",
    agreeFirst: "'가입하기' 버튼을 누르시면",
    agreeSecond: "서비스 이용약관",
    agreeThird: "및",
    agreeForth: "개인정보 수집 및 이용 동의 약관",
    agreeFifth: "에 동의한 것으로 간주합니다.",
  },
});

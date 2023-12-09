import { i18n } from "next-i18next";
import React, { useEffect, useState, useContext } from "react";

type PropsInputTimerCode = {
  setDisabledinput: any;
};

function TimerCode(props: any) {
  const { setDisabledinput, ReSendCode } = props;

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setDisabledinput(false);
      } else if (seconds < 1) {
        clearInterval(myInterval);
        setDisabledinput(true);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const ReSendCodeOtp = () => {
    setDisabledinput(false);
    setSeconds(60);
    ReSendCode();
  };

  return (
    <div className="auth__code__timer">
      {seconds === 0 ? (
        <>
          <span className="textdata">
            {i18n?.t("auth:timerCodeTextNotSend")}
          </span>{" "}
          <button
            type="button"
            onClick={ReSendCodeOtp}
            className="btn btn-resendcode"
          >
            {i18n?.t("auth:timerCodeButtonNotSend")}
          </button>
        </>
      ) : (
        <>
          <span className="textdata">{i18n?.t("auth:timerCodeText")}</span>{" "}
          <span className="time">
            {seconds < 10 ? `0${seconds}` : seconds}{" "}
            <span className="text">{i18n?.t("auth:second")}</span>
          </span>
        </>
      )}
    </div>
  );
}

export default TimerCode;

/*
ReactDOM.render(
  <Timer
        initMinute={00}
        initSeconds={30}
    />,
  document.getElementById('root')
)
*/

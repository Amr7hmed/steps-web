import { useEffect, useState } from "react";
import DropdownLoginUser from "./dropdown-login-user";
import DropdownLoginConsultant from "./dropdown-login-consultant";
import { StepsUserTypeId } from "@/api/variables";

type Props = {};

const DropdownLogin = (props: Props) => {
  const [usertypeid, setUserTypeId] = useState(0);
  useEffect(() => {
    if (StepsUserTypeId === "2") {
      setUserTypeId(2);
    } else if (StepsUserTypeId === "3") {
      setUserTypeId(3);
    } else {
      setUserTypeId(0);
    }
  }, []);
  return (
    <>
      {usertypeid === 2 ? (
        <DropdownLoginUser Image={"/assets/images/profile-one.png"} />
      ) : usertypeid === 3 ? (
        <DropdownLoginConsultant Image={"/assets/images/profile-two.jpg"} />
      ) : (
        ""
      )}
    </>
  );
};

export default DropdownLogin;

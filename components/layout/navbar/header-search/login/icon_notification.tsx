import { StepsToken } from "@/api/variables";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const IconNotification = (props: Props) => {
  const router = useRouter();

  const [count, setCount] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const GetData = async () => {
    const options = {
      method: "get",
      url: `${process.env.BACKEND_URL}count-notifications`,
      headers: {
        Accept: "application/json",
        "Accept-Language": JSON.parse(JSON.stringify(router.locale)),
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${JSON.parse(JSON.stringify(StepsToken))}`,
      },
    };
    await axios(options)
      .then(function (response) {
        setLoading(false);
        setCount(response.data.data.count);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(true);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  if (isLoading)
    return (
      <Link href="/legal/notifications" className="icon_notification">
        <img src="/assets/icons/icon-notification.svg" alt="" />
        <span className="number">0</span>
      </Link>
    );
  return (
    <Link href="/legal/notifications" className="icon_notification">
      <img src="/assets/icons/icon-notification.svg" alt="" />
      <span className="number">{count}</span>
    </Link>
  );
};

export default IconNotification;

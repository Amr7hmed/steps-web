import { i18n } from "next-i18next";
import React from "react";

type Props = {};

const NotificationsEmpty = (props: Props) => {
  return (
    <section className="notifications__empty">
      <div className="content">
        <div className="image">
          <img src="/assets/icons/icon-notification-empty.svg" alt="" />
        </div>
        <p>{i18n?.t("common:notifications-empty")}</p>
      </div>
    </section>
  );
};

export default NotificationsEmpty;

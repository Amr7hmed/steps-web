import React from "react";
import NotificationsEmpty from "./notifications-empty";

type TypeProps = {
  DataList: {
    List: {
      Text: string | undefined;
      Image: string;
    }[];
  };
  Data: any;
};

const NotificationsList = (props: TypeProps) => {
  const { DataList, Data } = props;
  console.log("Data", Data.length);

  return (
    <>
      {Data.length === 0 ? (
        <NotificationsEmpty />
      ) : (
        <section className="notifications__list">
          <div className="container">
            <ul>
              {DataList.List.map((item, index) => (
                <li key={index} className="notifications__list__card">
                  <span className="content">
                    <img src={item.Image} alt="" className="imgicon" />
                    <span className="text">{item.Text}</span>
                  </span>
                  <button type="button" className="btn">
                    <img
                      src="/assets/icons/icon-close-notifications.png"
                      alt=""
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default NotificationsList;

import React from "react";

type TypeProps = {
  DataList: {
    id: number;
    text: string | undefined;
    active: boolean;
  }[];
};

const GlobalsBoulettesList = (props: TypeProps) => {
  const { DataList } = props;
  return (
    <div className="globals__boulettes-list">
      {DataList.map((item, index) => (
        <div
          className={`globals__boulettes-list__item ${
            item.active ? "active" : ""
          }
          ${DataList.length === 5 ? "row-five" : "row-four"}`}
          key={item.id}
        >
          <div className="data">
            <div className={`globals__boulettes-list__item__circle `}>
              <span className="globals__boulettes-list__item__circle__text">
                <span>{item.id}</span>
              </span>
            </div>
            <span className={`globals__boulettes-list__item__text `}>
              {item.text}
            </span>
          </div>

          <div className="line">
            <span className="line-data__line"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalsBoulettesList;

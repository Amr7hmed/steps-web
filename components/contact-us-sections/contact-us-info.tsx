type TypeProps = {
  DataDescriptionInfo: {
    Title: string | undefined;
    Description: string | undefined;
    List: {
      Title: string | undefined;
      Description: string;
      Image: string;
      Id: string;
    }[];
  };
};

const ContactUsInfo = (props: TypeProps) => {
  const { DataDescriptionInfo } = props;
  return (
    <div className="contact-us__info">
      <div className="line">
        <span className="first"></span>
        <span className="secend"></span>
      </div>
      <h2 className="contact-us__info__title">{DataDescriptionInfo.Title}</h2>
      <p className="contact-us__info__description">
        {DataDescriptionInfo.Description}
      </p>
      <ul className="contact-us__info__list">
        {DataDescriptionInfo.List.map((item, index) => (
          <li key={index} className="contact-us__info__list__item">
            <div className="contact-us__info__list__item__image">
              <img src={item.Image} alt={item.Title} />
            </div>

            <div className="contact-us__info__list__item__description">
              <h3>{item.Title}</h3>
              <p id={item.Id}>{item.Description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUsInfo;

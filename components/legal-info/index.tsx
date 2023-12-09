type TypeProps = { Title: string | undefined; Decription: string | undefined };

const LegalInfo = (props: TypeProps) => {
  const { Title, Decription } = props;

  return (
    <section className="legal">
      <div className="container">
        <div className="legal__info">
          <h3>{Title}</h3>
          <div className="line"></div>
          <p>{Decription}</p>
        </div>
      </div>
    </section>
  );
};

export default LegalInfo;

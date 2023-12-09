import ListItem from "./list-item";

type TypeProps = {
  List: {
    id: number;
    title: string | undefined;
    data: string;
    line: boolean;
    totle: boolean;
  }[];
};

const PaymentList = (props: TypeProps) => {
  const { List } = props;
  return (
    <div className="study__payment__list">
      {List.map((item) => (
        <div key={item.id}>
          <ListItem
            Title={item.title}
            Data={item.data}
            Line={item.line}
            Totle={item.totle}
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentList;

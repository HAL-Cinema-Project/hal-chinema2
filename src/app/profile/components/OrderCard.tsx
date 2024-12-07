import { OrdersMock, OrdersDetail } from "../../../../mock/types/orders";

type OrderCardProps = {
  orders: OrdersMock[];
};

export const OrderCard = (props: OrderCardProps) => {
  const { orders } = props;
  console.log("orders", orders);
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <h2>予約確認</h2>

        {orders &&
          orders.map((data: OrdersMock, index: number) => (
            <div
              key={index}
              style={{ padding: "10px", border: "1px solid #ccc" }}
            >
              <div style={{ padding: "10px", border: "1px solid #ccc" }}>
                <div>
                  <div style={{ marginBottom: "10px" }}>
                    映画
                    <span>{data.movieName}</span>
                    <br />
                    <span>
                      スクリーン
                      {data.screen}
                    </span>
                    <br />
                    {data.orderDetail &&
                      data.orderDetail.map(
                        (data: OrdersDetail, index: number) => (
                          <div key={index}>
                            <span>
                              {data.seatName} {data.priceType}
                            </span>
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

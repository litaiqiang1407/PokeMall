function Order() {
  return (
    <Container className={cx("order-content")}>
      <table className={cx("table")}>
        {/* Products Table Header Row*/}
        <thead>
          <tr className={cx("header-row")}>
            <th className={cx("header-col")} scope="col">
              Product
            </th>
            <th className={cx("header-col")} scope="col">
              Size
            </th>
            <th className={cx("header-col")} scope="col">
              Unit Price
            </th>
            <th className={cx("header-col")} scope="col">
              Quantity
            </th>
            <th className={cx("header-col")} scope="col">
              Total Amount
            </th>
          </tr>
        </thead>

        {/* Products Table Body */}
        <tbody>
          {orderItems.map((item) => (
            <tr className={cx("product-row")} key={item.ID}>
              <td className={cx("product-col")}>
                <div className={cx("product")}>
                  <Link to={`/product-detail/${item.FigureID}`}>
                    <img
                      src={item.ImageURL}
                      alt={item.FigureName}
                      className={cx("product-img")}
                    />
                    <span className={cx("product-name")}>
                      {item.FigureName}
                    </span>
                  </Link>
                </div>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("size")}>{item.Size}</span>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("price")}>${item.Price}</span>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("quantity")}>{item.Quantity}</span>
              </td>
              <td className={cx("product-col")}>
                <span className={cx("total-amount")}> ${item.TotalAmount}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Order;

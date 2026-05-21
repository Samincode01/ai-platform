export default function Payments() {
  const payments = [
    {
      id: 1021,
      participant: "John Doe",
      amount: 500,
      method: "Bkash",
      status: "Completed",
    },
    {
      id: 1022,
      participant: "Alice Smith",
      amount: 500,
      method: "Nagad",
      status: "Pending",
    },
    {
      id: 1023,
      participant: "Rahul Khan",
      amount: 500,
      method: "Rocket",
      status: "Failed",
    },
  ];

  const revenue = 1000;
  const pending = 1;
  const failed = 1;

  return (
    <div className="dash-content">
      <div className="dash-header">
        <div>
          <div className="dash-title">
            Payment Monitoring
          </div>

          <div className="dash-sub">
            Track transactions and
            payment status
          </div>
        </div>

        <button className="btn btn-outline">
          ↓ Export
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">
            Total Revenue
          </div>

          <div className="stat-value">
            ৳
            {revenue.toLocaleString()}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Pending
          </div>

          <div className="stat-value">
            {pending}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Failed
          </div>

          <div className="stat-value">
            {failed}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            Transactions
          </div>

          <div className="stat-value">
            {payments.length}
          </div>
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>
              Transaction ID
            </th>

            <th>Participant</th>

            <th>Amount</th>

            <th>Method</th>

            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="mono">
                #{payment.id}
              </td>

              <td>
                {
                  payment.participant
                }
              </td>

              <td className="mono">
                ৳{payment.amount}
              </td>

              <td>
                {payment.method}
              </td>

              <td>
                <span
                  className={`badge ${
                    payment.status ===
                    "Completed"
                      ? "badge-green"
                      : payment.status ===
                        "Pending"
                      ? "badge-yellow"
                      : "badge-red"
                  }`}
                >
                  {payment.status}
                </span>
              </td>

              <td>
                {payment.status ===
                  "Pending" && (
                  <button className="btn btn-success btn-sm">
                    Verify
                  </button>
                )}

                {payment.status ===
                  "Failed" && (
                  <button className="btn btn-outline btn-sm">
                    Refund
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default function Signals({ signals }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Signal</th>
          <th>Price</th>
          <th>Target</th>
          <th>SL</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {signals.map((s, i) => (
          <tr key={i}>
            <td>{s.symbol}</td>
            <td>{s.signal}</td>
            <td>{s.price}</td>
            <td>{s.target}</td>
            <td>{s.stoploss}</td>
            <td>{new Date(s.time).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

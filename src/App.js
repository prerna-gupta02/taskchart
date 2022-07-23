import './App.css';
import { AgChartsReact } from "ag-charts-react";

const options = {
  data: [
    { label: 'Other', share: 5 },
    { label: 'USA', share: 25 },
    { label: 'UK', share: 20 },
    { label: 'India', share: 50 },
  ],
  series: [
    {
      type: 'pie',
      labelKey: 'label',
      angleKey: 'share',
      innerRadiusOffset: -30,
    },
  ],
}

function App() {
  return (
    <div className="App">
      <AgChartsReact options={options} />
    </div>
  );
}

export default App;

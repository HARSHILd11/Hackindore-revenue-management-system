import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';

const data = [
  {
    name: '0',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2021',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2022',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2023',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2024',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2025',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  // Toast notification functions
  notifyA = (msg) => toast.success(msg);
  notifyB = (msg) => toast.error(msg);

  postData = () => {
    fetch("http://localhost:8080/userDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: "66a56fb6562d712da124627e"
      })
    })
    .then(res => res.json())
    .then(data => {
      // Check if there is an error in the response
      if (data.error) {
        // Notify user of the error
        this.notifyB(data.error);
      } else {
        // Log the data if successful
        console.log(data);
      }
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error("Error:", error);
      this.notifyB("An error occurred while fetching user details.");
    });
  };

  handleChange = (event) => {
    // Handle the change event for the input field
    console.log("Input value changed to:", event.target.value);
  };

  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <input
          type="text"
          defaultValue={"test"}
          onClick={this.postData}
          onChange={this.handleChange}
        />
      </ResponsiveContainer>
    );
  }
}

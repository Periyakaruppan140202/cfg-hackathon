import React, { useEffect, useState } from "react";
import "./styles.css";
const Blockchain = () => {
  const [data, setData] = useState(false);
  const names = ["Ajay", "Suresh", "MAhesh", "Kavin"];
  const value = [50, 60, 70, 80];
  useEffect(() => {
    getRequest();
  }, []);
  const getRequest = async () => {
    try {
      const response = await fetch(
        "https://52d1-43-250-159-199.ngrok.io/viewchain"
      );
      const datas = await response.json();
      setData(datas);
      console.log(datas);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <>
              <div className="card">
                <div className="info">
                  <h1 className="title">Block {item.Height}</h1>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ width: "100%" }}>
                          <h3>Timestamp</h3>
                        </td>
                        <td>
                          <h4>{item.TimeStamp}</h4>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "100%" }}>
                          <h3>Prev Hash</h3>
                        </td>
                        <td>
                          <h4>{item.PrevHash}</h4>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "100%" }}>
                          <h3>Current Hash</h3>
                        </td>
                        <td>
                          <h4>{item.Hash}</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h2 style={{ textAlign: "center" }}>Data</h2>
                  <table
                    style={{ width: "55%", position: "relative", left: "5%" }}
                  >
                    <tbody>
                      <tr>
                        <td>
                          <h3>Student NAme</h3>
                        </td>
                        <td>
                          <h4>{names[item.Height]}</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>UID</h3>
                        </td>
                        <td>
                          <h4>{value[item.Height]}</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Blockchain;

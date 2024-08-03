import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import PaiChart from "../components/chart/PaiChart";
export default function Dashboard() {
  return (
    <div className="main-light-dashboard">
      <h2 className="fs-28-18 fw-bold white">Dashboard</h2>
      <div className="dash-first-pi-head">
        <div className="count-show-frame">
          {[1, 2, 3, 4].map((ele, i) => {
            return (
              <div key={i} className="count-card">
                <div className="item-image-icon">
                  <FaShoppingBasket className="icon" />
                </div>
                <p className="fs-14-12 white mb-0">Total Orders</p>
                <div className="show-count-box">
                  <h3 className="fs-34-28 fw-semibold white mb-0">70</h3>
                  <p className="fs-14-12 fw-bold mb-1">3%</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pie-chart-frame">
          <div className="content-frame">
            <p className="fs-14-12 white mb-0">Net Profit</p>
            <h3 className="fs-34-28 fw-semibold white mb-0">$ 7678645.09</h3>
            <p className="fs-14-12 fw-bold mb-1 text-start green-active">3%</p>
          </div>
          <div className="pie-chart-box">
            <PaiChart/>
          </div>
        </div>
      </div>
    </div>
  );
}

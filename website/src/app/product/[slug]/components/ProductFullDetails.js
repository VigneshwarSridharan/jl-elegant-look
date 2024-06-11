"use client";
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const ProductFullDetails = ({ summary = "" }) => {
  const [activeTab, setActiveTab] = useState(1);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div class="holder mt-3 mt-md-5">
      <div class="container">
        <Nav tabs className="product-tab">
          <NavItem>
            <NavLink
              href="#"
              className={`${activeTab == 1 ? "active" : ""}`}
              onClick={() => toggle(1)}
            >
              Description
              <span class="toggle-arrow">
                <span></span>
                <span></span>
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={`${activeTab == 2 ? "active" : ""}`}
              onClick={() => toggle(2)}
            >
              Size Guide
              <span class="toggle-arrow">
                <span></span>
                <span></span>
              </span>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId={1}>{summary}</TabPane>

          <TabPane tabId={2}>
            <table class="table table-striped table-borderless text-center">
              <thead>
                <tr>
                  <th>USA</th>
                  <th>UK</th>
                  <th>France</th>
                  <th>Japanese</th>
                  <th>Bust</th>
                  <th>Waist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>8</td>
                  <td>36</td>
                  <td>7</td>
                  <td>32"</td>
                  <td>61 cm</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>10</td>
                  <td>38</td>
                  <td>11</td>
                  <td>34"</td>
                  <td>67 cm</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>12</td>
                  <td>40</td>
                  <td>15</td>
                  <td>36"</td>
                  <td>74 cm</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>14</td>
                  <td>42</td>
                  <td>17</td>
                  <td>38"</td>
                  <td>79 cm</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>16</td>
                  <td>44</td>
                  <td>21</td>
                  <td>40"</td>
                  <td>84 cm</td>
                </tr>
              </tbody>
            </table>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default ProductFullDetails;

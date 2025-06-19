"use strict";
import "./styles.css";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
Chart.defaults.color = "#fff";
const form = document.querySelector("form");
const calculateBtn = document.getElementById("calculate");
const monthlyIncome = document.getElementById("income");
const housing = document.getElementById("housing");
const utilities = document.getElementById("utilities");
const transportation = document.getElementById("transportation");
const subscriptions = document.getElementById("subscriptions");
const entertainment = document.getElementById("entertainment");
const savings = document.getElementById("savings");
const other = document.getElementById("other");

calculateBtn.addEventListener("click", () => {
  form.style.display = "none";
  const monthly = Number(monthlyIncome.value);
  const {
    housingPercent,
    utilPercent,
    transportPercent,
    subsPercent,
    entertainPercent,
    savingsPercent,
    otherPercent,
  } = {
    housingPercent: Math.round((Number(housing.value) / monthly) * 100),
    utilPercent: Math.round((Number(utilities.value) / monthly) * 100),
    transportPercent: Math.round(
      (Number(transportation.value) / monthly) * 100
    ),
    subsPercent: Math.round((Number(subscriptions.value) / monthly) * 100),
    entertainPercent: Math.round((Number(entertainment.value) / monthly) * 100),
    savingsPercent: Math.round((Number(savings.value) / monthly) * 100),
    otherPercent: Math.round((Number(other.value) / monthly) * 100),
  };

  new Chart(document.getElementById("user-chart"), {
    type: "pie",
    data: {
      datasets: [
        {
          data: [
            housingPercent,
            utilPercent,
            transportPercent,
            subsPercent,
            entertainPercent,
            savingsPercent,
            otherPercent,
          ],
        },
      ],
      labels: [
        "Housing",
        "Utilities",
        "Transportation",
        "Subscriptions",
        "Entertainment",
        "Savings",
        "Other",
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Your Spending",
        },
        datalabels: {
          formatter: (value) => value + "%",
          font: {
            weight: "bold",
          },
        },
      },
    },
  });
  new Chart(document.getElementById("recommended-chart"), {
    type: "pie",
    data: {
      datasets: [
        {
          data: [50, 30, 20],
        },
      ],
      labels: ["Needs", "Wants", "Savings"],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Recommended Spending",
        },
        datalabels: {
          formatter: (value) => value + "%",
          font: {
            weight: "bold",
          },
        },
      },
    },
  });
});

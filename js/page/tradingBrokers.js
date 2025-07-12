import brokersData from "../data/broker/brokerData.js";
let brokerOptions = document.querySelectorAll(
  ".brokers_container_category_option h3"
);
let searchBtn = document.querySelector(
  ".brokers_container_category_searchForm i"
);
let searchInput = document.querySelector(
  ".brokers_container_category_searchForm input"
);
window.addEventListener("load", () => {
  loadBrokersData(brokersData);
  addBtnColor();
});

let brokersBtn = document.querySelectorAll(".brokers_menu h1")[0];
let bonusBtn = document.querySelectorAll(".brokers_menu h1")[1];
let bonusContainer = document.querySelector(".bonus_container");
let brokerContainer = document.querySelector(".brokers_container");

bonusBtn.addEventListener("click", () => {
  brokerContainer.style.display = "none";
  brokersBtn.classList.remove("menuBtn_active");
  bonusBtn.classList.add("menuBtn_active");
  bonusContainer.style.display = "block";
});

brokersBtn.addEventListener("click", () => {
  brokerContainer.style.display = "block";
  brokersBtn.classList.add("menuBtn_active");
  bonusBtn.classList.remove("menuBtn_active");
  bonusContainer.style.display = "none";
});

searchBtn.addEventListener("click", () => {
  brokerOptions = document.querySelectorAll(
    ".brokers_container_category_option h3"
  );
  let option = "";
  for (let i = 0; i < brokerOptions.length; i++) {
    if (brokerOptions[i].classList.contains("option_active")) {
      option = brokerOptions[i].textContent;
      break;
    }
  }
  let searchValue = searchInput.value;
  let searchDate = brokersData.filter((broke) => {
    if (option == "All") {
      if (broke.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return broke;
      }
    } else {
      if (broke.brokerType === option) {
        if (broke.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return broke;
        }
      }
    }
  });
  let brokerContainer = document.querySelector(".brokers_container_list");
  if (searchDate.length < 1) {
    brokerContainer.innerHTML = `<h1 style="text-align: center;margin-top: 30px;color: #338066;font-size: 64px;">Can't find brokers with borker name : ${searchValue}  </h1>`;
  } else {
    console.log(1);
    brokerContainer.innerHTML = "";
    loadBrokersData(searchDate);
    addBtnColor();
  }
});

let allOption = function () {
  removeBrokerOptionActive();
  loadBrokersData(brokersData);
  addBtnColor();
  brokerOptions[0].classList.add("option_active");
};
brokerOptions[0].addEventListener("click", allOption);

let forexOption = function () {
  let dataFilter = brokersData.filter((data) => {
    return data.brokerType === "Forex";
  });
  let brokerContainer = document.querySelector(".brokers_container_list");
  brokerContainer.innerHTML = "";
  removeBrokerOptionActive();
  loadBrokersData(dataFilter);
  addBtnColor();
  brokerOptions[1].classList.add("option_active");
};
brokerOptions[1].addEventListener("click", forexOption);

let iQ = function () {
  let dataFilter = brokersData.filter((data) => {
    return data.brokerType === "IQ option";
  });
  let brokerContainer = document.querySelector(".brokers_container_list");
  brokerContainer.innerHTML = "";
  removeBrokerOptionActive();
  loadBrokersData(dataFilter);
  addBtnColor();
  brokerOptions[2].classList.add("option_active");
};
brokerOptions[2].addEventListener("click", iQ);

let crypto = function () {
  let dataFilter = brokersData.filter((data) => {
    return data.brokerType === "Crypto";
  });
  let brokerContainer = document.querySelector(".brokers_container_list");
  if (dataFilter.length < 1) {
    brokerContainer.innerHTML =
      '<h1 style="text-align: center;margin-top: 30px;color: #338066;font-size: 64px;">TP Trading have not cooperated with these brokers yet</h1>';
  } else {
    brokerContainer.innerHTML = "";
    removeBrokerOptionActive();
    loadBrokersData(dataFilter);
    addBtnColor();
  }
  brokerOptions[3].classList.add("option_active");
};
brokerOptions[3].addEventListener("click", crypto);

function removeBrokerOptionActive() {
  brokerOptions = document.querySelectorAll(
    ".brokers_container_category_option h3"
  );
  for (let i = 0; i < brokerOptions.length; i++) {
    if (brokerOptions[i].classList.contains("option_active")) {
      brokerOptions[i].classList.remove("option_active");
      return;
    }
  }
}

function addBtnColor() {
  let registerBtns = document.querySelectorAll(
    ".brokers_container_list_broker_register "
  );
  registerBtns.forEach((btn) => {
    setInterval(() => {
      btn.querySelector("a").classList.toggle("btn_color");
    }, 1.5 * 1000);
  });
}

function loadBrokersData(brokersData) {
  let brokerContainer = document.querySelector(".brokers_container_list");
  brokersData.forEach((brokerData) => {
    // let first = brokersData[0];

    let broker = document.createElement("div");
    broker.classList.add("brokers_container_list_broker");

    let brokerInformation = document.createElement("div");
    brokerInformation.classList.add(
      "brokers_container_list_broker_information"
    );

    if (brokerData.name === "ETOMARKET" || brokerData.name === "XM") {
      brokerInformation.innerHTML = `
    <div class="brokers_container_list_broker_information_image" style="background-color: black;">
      <img src="${brokerData.logo}" alt="broker_logo"/>
    </div>
    <p>
      ${brokerData.description}
    </p>
    `;
    } else {
      brokerInformation.innerHTML = `
    <div class="brokers_container_list_broker_information_image">
      <img src="${brokerData.logo}" alt="broker_logo" />
    </div>
    <p>
      ${brokerData.description}
    </p>
    `;
    }

    let liscenses = ``;
    brokerData.licenses.forEach((license) => {
      liscenses += `
    <div class="brokers_container_list_broker_reputation_licenseList_license">
      <img src="${license.flag}" alt="country_liscense_image" />
        <div class="brokers_container_list_broker_reputation_licenseList_license_information">
          <span>${license.authority}</span>
          <span>${license.status}</span>
          <p>${license.detail}</p>
        </div>
    </div>
  `;
    });

    let advantages = ``;
    brokerData.advantages.forEach((advantage) => {
      advantages += `<li>${advantage}</li>`;
    });
    let brokerReputation = document.createElement("div");
    brokerReputation.classList.add("brokers_container_list_broker_reputation");
    brokerReputation.innerHTML = `
<div class="scroll-bar">
      <div class="brokers_container_list_broker_reputation_licenseList">
        <h1 class="brokers_container_list_broker_reputation_licenseList_title">
          Liscenses:
        </h1>
        ${liscenses}
      </div>
    </div>
    <div class="brokers_container_list_broker_reputation_information">
      <div class="brokers_container_list_broker_reputation_information_score">
        <h1>Score : ${brokerData.score.value} / ${brokerData.score.max}</h1>
        <a href="${brokerData.score.source}">
          Information source (wikiFX)
        </a>
      </div>
      <h2>Advantages of ${brokerData.name}:</h2>
      <ul>
        ${advantages}
      </ul>
    </div>
`;
    let registerBtn = document.createElement("button");
    registerBtn.classList.add("brokers_container_list_broker_register");
    registerBtn.innerHTML = `<a href="${brokerData.signupLink}">Sign Up</a>`;
    broker.appendChild(brokerInformation);
    broker.appendChild(brokerReputation);
    broker.appendChild(registerBtn);
    brokerContainer.appendChild(broker);
  });
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  toString().padStart(2, "0");
  let ap = hours >= 12 ? "am" : "pm";
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}${ap} :  ${minutes} : ${seconds}`;
  console.log(time);
  document.querySelector(".time").textContent = time;
}

setInterval(updateClock, 1000);
const goodMorning = () => {
  document
    .getElementById("surprise-btn")
    .addEventListener("click", function () {
      const container = document.getElementById("surprise-container");
      const containerMorning = document.getElementById("mornign");
      containerMorning.innerText = `Good Morning My Dear Wife
        Ummmah`;
    });
};
goodMorning();

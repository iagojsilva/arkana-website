"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const now = new Date();
    const dayElement = document.querySelector("." + days[now.getDay()]);
    dayElement === null || dayElement === void 0 ? void 0 : dayElement.classList.add("active");
});

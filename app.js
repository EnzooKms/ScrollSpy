/**
 * @param {NodeListOf.<HTMLElement>} elems
 */
const spies = (elems) => {
  const heights = [];

  for (let i = 0; i < elems.length; i++) {
    const node = elems[i];
    const y = window.scrollY;
    heights.push(node.offsetHeight);
    const some = heights.reduce((cum, current) => cum + current);

    if (some * 0.8 > y) {
      console.clear();
      console.log(some * 0.8, y);

      const select = document.querySelector(`a[href="#section${i + 1}"]`);
      select.parentElement.parentElement
        .querySelectorAll(".active")
        .forEach((node) => node.classList.remove("active"));
      select.classList.add("active");

      break;
    }
  }
};

const selectors = document.querySelectorAll("section");
window.addEventListener("scroll", (e) => {
  spies(selectors);
});

spies(selectors);

/**
 * @param {IntersectionObserverEntry[]} entries
 * @param {IntersectionObserver} observer
 */

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     const target = entry.target;
//     if (entry.intersectionRatio > 0) {
//       const id = target.getAttribute("id");
//       const select = document.querySelector(`a[href="#${id}"]`);
//       select.parentElement.parentElement
//         .querySelectorAll(".active")
//         .forEach((node) => node.classList.remove("active"));
//       select.classList.add("active");
//     }
//   });
// };

// const ratio = 0.7;

// const spies = document.querySelectorAll("[data-spy]");

// if (spies.length > 0) {
//   const y = Math.floor(window.innerHeight * ratio);
//   const observer = new IntersectionObserver(callback, {
//     rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`,
//   });

//   spies.forEach((node) => {
//     observer.observe(node);
//   });
// }

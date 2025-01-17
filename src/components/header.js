const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const parentElement = document.createElement("div");
  const h1 = document.createElement("h1");
  const spanDate = document.createElement("span");
  const spanTemp = document.createElement("span");
  h1.textContent = title;
  parentElement.classList.add("header");
  spanDate.classList.add("date");
  spanDate.textContent = date;
  spanTemp.classList.add("temp");
  spanTemp.textContent = `${temp} F`;
  h1.textContent = title;
  parentElement.appendChild(spanDate);
  parentElement.appendChild(h1);
  parentElement.appendChild(spanTemp);

  return parentElement;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const date = new Date();
  const header = document.querySelector(selector);
  const context = Header("Lambda Times", date.toDateString(), (Math.floor(Math.random() * 100)));
  header.appendChild(context);
  return header;
};

export { Header, headerAppender };

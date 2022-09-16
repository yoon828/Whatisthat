const testAPI = async () => {
  console.log("click");
  let text = document.getElementById("input").value;
  console.log(text);
  await fetch("/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: text,
    }),
  })
    .then((res) => {
      alert(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

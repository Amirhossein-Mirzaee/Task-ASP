const datas = {
  name: "amir",
  age: 24,
  role: "USER",
  country: "",
  city: "",
  state: "",
  isActive: false,
  postalCode: "1234567891011",
  accessLevel: "developer",
};

const notFalse = (data, rejectKeys, acceptKeys, condition) => {
  let object = {};
  for (const key in data) {
    if (
      !rejectKeys.includes(key) &&
      (acceptKeys.includes(key) || data[key] || condition.includes(key))
    ) {
      object = { ...object, [key]: data[key] };
    }
  }
  return object;
};
function App() {
  console.log(notFalse(datas, ["role", "age"], ["isActive"], ["city"]));
}

export default App;

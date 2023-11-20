const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export { incNumber, decNumber };
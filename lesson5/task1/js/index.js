const result = () => {
  let res = 0;
  return function (num) {
    res += num;
    console.log(res);
  };
};

const sum = result();
sum(3);
sum(5);
sum(228);

var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Meni",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Escolher Designer",
    obj: require("./stages/2"),
  },
};

exports.step = stages;

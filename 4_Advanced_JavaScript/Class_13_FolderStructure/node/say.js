function hello(name) {
  return `Hey there ${name}`;
}

function bye(name) {
  return `Bye ${name}`;
}

module.exports = {
  sayHello: hello,
  sayBye: bye,
};

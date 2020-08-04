createElement = function (tag) {
  return function (elClass) {
    const el = document.createElement(tag);
    el.className = elClass;
    return el;
  };
};

const createDiv = createElement('div');

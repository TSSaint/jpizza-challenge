// pizza-challenge solution

// stores the values in (x, y) where
// x values are > and <
// y values are ^ and v
const visitedHomes = {};

function Movement(x, y, dir) {
  // location is visited
  // sets the next home
  var xPlane = x;
  var yPlane = y;
  // checks input
  switch (dir) {
    case(">"):
      xPlane = x + 1;
      break;
    case("^"):
      xPlane = x - 1;
      break;
    case("^"):
      yPlane = y + 1;
      break;
    case("v"):
      yPlane = y - 1;
      break;
  }

  const key = `(${x}, ${y})`;
  if (visitedHomes[key]) {
    visitedHomes[key] += 1;
    // statement checks whether or not a home has been visited
  } else {
    visitedHomes[key] = 1;
  } return [x, y];
}

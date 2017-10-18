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
}

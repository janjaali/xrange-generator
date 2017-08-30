function* xrange(from, to, by) {
  let start = from || 0;
  const end = to;
  const step = by || 1;

  if (end && end < start) {
    while (start !== end - 1) {
      yield start;
      start -= step;
    }
  } else {
    while (start !== end + 1) {
      yield start;
      start += step;
    }
  }
}

export default xrange;

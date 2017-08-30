function* xrange(from, to, by) {
  let start = from || 0;
  const end = to;
  const step = by || 1;

  if (end && end < start) {
    while (end && start >= end) {
      yield start;
      start -= step;
    }
  } else {
    while (!end || start <= end) {
      yield start;
      start += step;
    }
  }
}

export default xrange;

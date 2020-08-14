export default function (parameters) {
  const r = {}
  if (parameters && parameters.length > 0) {
    parameters.forEach((item) => {
      r[item.key] = item.value
    })
  }
  return r
}

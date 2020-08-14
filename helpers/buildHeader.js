export default function (headers) {
  const r = {}
  if (headers && headers.length > 0) {
    headers.forEach((item) => {
      r[item.key] = item.value
    })
  }
  return r
}

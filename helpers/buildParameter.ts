export default function (parameters: Array<any>): any {
  const r: Record<string, any> = {}
  const paths: Array<any> = []
  if (parameters && parameters.length > 0) {
    parameters.forEach(item => {
      if (item.type === 'path') {
        r[item.key] = item.value
      }
      if (item.type === 'query') {
        paths.push(`${item.key}=${item.value}`)
      }
    })
  }
  return {
    path: paths.length > 0 ? '?' + paths.join('&') : '',
    param: r,
  }
}

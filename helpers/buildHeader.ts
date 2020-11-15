export default function (headers: Array<any>): any {
  const r: Record<string, any> = {}
  if (headers && headers.length > 0) {
    headers.forEach((item: any) => {
      r[item.key] = item.value
    })
  }
  return r
}

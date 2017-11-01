/**
 * Created by ldm on 2017/11/1.
 */
// 将地址栏location.search转换为对象
export default () => {
  let query = location.search.substring(1)
  let reg = /([^=&\s]+)[=\s]*([^=&\s]*)/g
  let obj = {}
  while (reg.exec(query)) {
    obj[RegExp.$1] = RegExp.$2
  }
  return obj
}

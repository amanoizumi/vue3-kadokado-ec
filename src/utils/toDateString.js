export default function(timeStamp) {
  const createDate = new Date(timeStamp * 1000);
  const str = `${createDate.getFullYear()} 年 ${createDate.getMonth() + 1} 月 ${createDate.getDate()} 日 - ${createDate.getHours()} : ${createDate.getMinutes()} : ${createDate.getSeconds()}`
  return str;
}


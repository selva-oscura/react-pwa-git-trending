const localDateTime = (time) => {
  const pad = num => num < 10 ? `0${num}` : num;
  return `${time.getFullYear()}-${pad(time.getMonth() + 1)}-${pad(time.getDate())}, ${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;
}

export default {
	localDateTime,
}

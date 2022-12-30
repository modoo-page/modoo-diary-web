import axios, { Axios } from "axios";

let axiosInstance: Axios;

export function GetAxios() {
  if (axiosInstance == null) {
    axiosInstance = axios.create({
      baseURL: "http://mingky.me:5252/api/",
    });
  }
  return axiosInstance;
}

export function ZeroFilledNumber(target: number | string): string {
  let targetNumber = "0";
  if (typeof target === "number") {
    targetNumber += target + "";
  } else {
    targetNumber += target;
  }

  return targetNumber.substr(-2, targetNumber.length);
}

export function FormattedDate(date: string | Date): string {
  const createdTime = new Date(date);

  const month = ZeroFilledNumber(createdTime.getMonth() - 1);
  const day = ZeroFilledNumber(createdTime.getDay());
  const hours = ZeroFilledNumber(createdTime.getHours());
  const minutes = ZeroFilledNumber(createdTime.getMinutes());

  return `${createdTime.getFullYear()}-${month}-${day} ${hours}:${minutes}`;
}

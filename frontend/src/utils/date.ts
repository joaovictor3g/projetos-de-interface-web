import dayjs from "dayjs";

function mountPhrase(time: number, flag: "minutes" | "hours" | "days") {
  const flagMinutesParsed = time > 1 ? "minutos" : "minuto";
  const flagDaysParsed = time > 1 ? "dias" : "dia";
  const flagHoursParsed = time > 1 ? "horas" : "hora";

  const timeMap = new Map<typeof flag, string>([
    ["days", `Há ${time} ${flagDaysParsed}`],
    ["hours", `Há ${time} ${flagHoursParsed}`],
    ["minutes", `Há ${time} ${flagMinutesParsed}`],
  ]);

  return timeMap.get(flag);
}

export function difference(date: Date) {
  const resultDays = dayjs().subtract(date.getDay(), "days").get("days");

  console.log(resultDays);

  if (resultDays === 0) {
    const resultHours = dayjs().subtract(date.getHours(), "hours").get("hours");

    if (resultHours === 0) {
      const resultMinutes = dayjs()
        .subtract(date.getMinutes(), "minutes")
        .get("minutes");
      return mountPhrase(resultMinutes, "minutes");
    }

    return mountPhrase(resultHours, "hours");
  }

  return mountPhrase(resultDays, "days");
}

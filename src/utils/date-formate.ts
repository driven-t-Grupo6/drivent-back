import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export async function dateFormat(day: any) {
  dayjs.extend(updateLocale);
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const formatedDates = [];
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const timeZone = 'America/Sao_Paulo';

  for (let i = 0; i < day.length; i++) {
    const id = i + 1;

    const diaDaSemana = weekdays[dayjs(day[i].day).utc().day()];
    const diaMes = dayjs(day[i].day).utc().format('DD/MM');

    formatedDates.push({ day: `${diaDaSemana}, ${diaMes}`, id, originalDate: day[i].day });
  }

  return formatedDates;
}

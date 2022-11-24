export namespace ClockNamespace {
  export const realMsecsPerInGameHours = 15 * 1000; // 15 seconds
  export const dayStartInMinutes = 9.5 * 60;

  export const realMsecsPerInGameMinute = realMsecsPerInGameHours / 60;
  export const inGameMinutePerRealMsecs = 1 / realMsecsPerInGameMinute;

  export const lunchStartInMinutes = dayStartInMinutes + 3.5 * 60;
  export const lunchDurationInMinutes = 60;
  export const lunchEndInMinutes = lunchStartInMinutes + lunchDurationInMinutes;

  export const dayEndInMinutes = dayStartInMinutes + 7.5 * 60;
  export const dayDurationInMinutes = dayEndInMinutes - dayStartInMinutes;
  export const wholeDayInRealMsecs = dayDurationInMinutes * realMsecsPerInGameMinute;

  console.log(`realMsecsPerInGameHours=${realMsecsPerInGameHours}`);
  console.log(`realMsecsPerInGameMinute=${realMsecsPerInGameMinute}`);
  console.log(`inGameMinutePerRealMsecs=${inGameMinutePerRealMsecs}`);
  console.log(`dayStartInMinutes=${dayStartInMinutes}`);
  console.log(`lunchStartInMinutes=${lunchStartInMinutes}`);
  console.log(`dayEndInMinutes=${dayEndInMinutes}`);
  console.log(`dayDurationInMinutes=${dayDurationInMinutes}`);
  console.log(`wholeDayInRealMsecs=${wholeDayInRealMsecs}`);

  export type Clock = {
    realMsecsPassed: number;
    currentInGameMinutes: number;
  };
}

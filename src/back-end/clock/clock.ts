export namespace ClockNamespace {
  export const realMsecsPerInGameHours = 15 * 1000; // 15 seconds
  export const inGameDayStartInMinutes = 9 * 60 + 30;

  export const realMsecsPerInGameMinute = realMsecsPerInGameHours / 60;
  export const inGameMinutePerRealMsecs = 1 / realMsecsPerInGameMinute;

  export const inGameLunchStartInMinutes = inGameDayStartInMinutes + 3 * 60 + 30;
  export const inGameLunchDurationInMinutes = 60;
  export const inGameLunchEndInMinutes = inGameLunchStartInMinutes + inGameLunchDurationInMinutes;

  export const inGameDayEndInMinutes = inGameDayStartInMinutes + 7 * 60 + 30;
  export const inGameDayDurationInMinutes = inGameDayEndInMinutes - inGameDayStartInMinutes;
  export const wholeDayInRealMsecs = inGameDayDurationInMinutes * realMsecsPerInGameMinute;

  console.log(`realMsecsPerInGameHours=${realMsecsPerInGameHours}`);
  console.log(`realMsecsPerInGameMinute=${realMsecsPerInGameMinute}`);
  console.log(`inGameMinutePerRealMsecs=${inGameMinutePerRealMsecs}`);
  console.log(`inGameDayStartInMinutes=${inGameDayStartInMinutes}`);
  console.log(`inGameLunchStartInMinutes=${inGameLunchStartInMinutes}`);
  console.log(`inGameDayEndInMinutes=${inGameDayEndInMinutes}`);
  console.log(`inGameDayDurationInMinutes=${inGameDayDurationInMinutes}`);
  console.log(`wholeDayInRealMsecs=${wholeDayInRealMsecs}`);

  export type Clock = {
    realMsecsPassed: number;
    currentInGameMinutes: number;
  };
}

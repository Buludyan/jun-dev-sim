export namespace ConstantsNamespace {
  export const realMsecsPerInGameHours = 15 * 1000; // 15 seconds
  export const dayStartInMinutes = 9.5 * 60;

  export const realMsecsPerInGameMinute = realMsecsPerInGameHours / 60;
  export const inGameMinutesPerRealMsecs = 1 / realMsecsPerInGameMinute;

  export const lunchStartInMinutes = dayStartInMinutes + 3.5 * 60;
  export const lunchDurationInMinutes = 60;
  export const lunchEndInMinutes = lunchStartInMinutes + lunchDurationInMinutes;

  export const dayEndInMinutes = dayStartInMinutes + 7.5 * 60;
  export const dayDurationInMinutes = dayEndInMinutes - dayStartInMinutes;
  export const dayDurationInHours = dayDurationInMinutes / 60;
  export const wholeDayInRealMsecs = dayDurationInMinutes * realMsecsPerInGameMinute;

  export const energyConsumptionPerHour = 10;
  export const energyConsumptionPerMinute = energyConsumptionPerHour / 60;
  export const energyConsumptionPerDay = energyConsumptionPerHour * dayDurationInHours;
}

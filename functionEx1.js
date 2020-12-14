function lifeInWeeks(age) {
  const MAX = 90;
  const MONTHS = 12;
  const WEEKS = 52;
  const DAYS = 365;
  let leftYears = MAX - age;
  let leftMonths = leftYears * MONTHS;
  let leftWeeks = leftYears * WEEKS;
  let leftDays = leftYears * DAYS;
  console.log(
    `You have ${leftDays} days, ${leftWeeks} weeks, and ${leftMonths} months left.`
  );
}

lifeInWeeks(33);

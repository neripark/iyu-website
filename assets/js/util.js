export function isSp() {
  return window.innerWidth < 840; // scssの値と合わせる
}

// YYYY-MM-DD => YYYY/MM/DD (date)
export const dateExchangeForDisplay = date => {
  const dateAsDate = new Date(date);
  const y = dateAsDate.getFullYear();
  const m = dateAsDate.getMonth() + 1;
  const d = dateAsDate.getDate();
  const ymdFormatted = `${y}/${m}/${d}`;
  const youbiIndex = dateAsDate.getDay();

  return `${ymdFormatted} (${weekday[youbiIndex].en})`;
};

const weekday = [
  { jp: '日', en: 'Sun' },
  { jp: '月', en: 'Mon' },
  { jp: '火', en: 'Tue' },
  { jp: '水', en: 'Wed' },
  { jp: '木', en: 'Thu' },
  { jp: '金', en: 'Fri' },
  { jp: '土', en: 'Sat' }
];

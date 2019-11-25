export function isSp() {
  return window.innerWidth < 840 // scssの値と合わせる
}

// YYYY-MM-DD => YYYY/MM/DD (date)
export const dateExchange = date => {
  const ymdDate = date.replace(/-/g, '/')
  const youbiIndex = new Date(ymdDate).getDay()

  return `${ymdDate} (${dayOfWeek[youbiIndex].en})`
}

const dayOfWeek = [
  { jp: '日', en: 'Sun' },
  { jp: '月', en: 'Mon' },
  { jp: '火', en: 'Tue' },
  { jp: '水', en: 'Wed' },
  { jp: '木', en: 'Thu' },
  { jp: '金', en: 'Fri' },
  { jp: '土', en: 'Sat' }
]

/* ===================================================
   SAFI Money Transfer — ملف الإعدادات (عدّل هنا فقط)
   =================================================== */
window.SAFI_CONFIG = {
  shopName:   'SAFI Money Transfer',
  shopNameAr: 'صافي للصرافة والحوالات',
  whatsapp:   '963900000000',          // رقم واتساب المحل بدون + أو أصفار بادئة
  phone:      '+963 900 000 000',
  address:    'دمشق — العنوان هنا',
  mapUrl:     'https://maps.google.com',
  hours:      'يومياً 9 ص – 9 م',
  baseName:   'ل.س',                    // اسم العملة المحلية المختصر

  // رابط خادم Google Apps Script بعد النشر (اتركه فارغاً لوضع العرض)
  API_URL: '',
  ADMIN_PIN: '1234',                    // رمز لوحة صاحب المحل في وضع العرض فقط

  // نظام النقاط والسحب
  pointsPerReferral: 10,
  entryCost: 50,                        // نقاط لكل فرصة دخول
  prize: '$200',
  drawDate: '2026-12-31T20:00:00',
  refreshSeconds: 30,

  // العملات وأسعارها الافتتاحية (تجريبية — يغيّرها صاحب المحل من اللوحة)
  currencies: [
    {code:'USD', name:'دولار أمريكي',   sym:'$',   col:'#1f9d74', buy:11850, sell:11950},
    {code:'EUR', name:'يورو',           sym:'€',   col:'#3c6fd8', buy:13650, sell:13850},
    {code:'TRY', name:'ليرة تركية',     sym:'₺',   col:'#d8414f', buy:281,   sell:289},
    {code:'SAR', name:'ريال سعودي',     sym:'ر.س', col:'#16804f', buy:3150,  sell:3190},
    {code:'AED', name:'درهم إماراتي',   sym:'د.إ', col:'#a6801f', buy:3220,  sell:3260},
    {code:'GBP', name:'جنيه إسترليني',  sym:'£',   col:'#7b4fd0', buy:15800, sell:16050}
  ]
};

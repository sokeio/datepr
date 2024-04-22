/* Turkish locals for datepr */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.datepr !== undefined
    ? window.datepr
    : ({
        l10ns: {},
      } as FlatpickrFn);

export const Turkish: CustomLocale = {
  weekdays: {
    shorthand: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
    longhand: [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ],
  },

  months: {
    shorthand: [
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ],
    longhand: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
  },
  firstDayOfWeek: 1,
  ordinal: () => {
    return ".";
  },
  rangeSeparator: " - ",
  weekAbbreviation: "Hf",
  scrollTitle: "Artırmak için kaydırın",
  toggleTitle: "Aç/Kapa",
  amPM: ["ÖÖ", "ÖS"],
  time_24hr: true,
};

fp.l10ns.tr = Turkish;

export default fp.l10ns;

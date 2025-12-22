// Convert number to French words
export function numberToWordsFr(num: number): string {
  const units = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
  const teens = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
  const tens = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

  if (num === 0) return 'zéro';

  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num % 1000) / 100);
  const remainder = num % 100;
  const dinars = Math.floor(num);
  const centimes = Math.round((num - dinars) * 100);

  let result = '';

  // Thousands
  if (thousands > 0) {
    if (thousands === 1) {
      result += 'mille ';
    } else {
      result += convertHundreds(thousands) + ' mille ';
    }
  }

  // Hundreds
  if (hundreds > 0) {
    if (hundreds === 1) {
      result += 'cent ';
    } else {
      result += units[hundreds] + ' cent ';
    }
  }

  // Tens and units
  if (remainder > 0) {
    result += convertTensAndUnits(remainder);
  }

  result = result.trim() + ' dinars';

  if (centimes > 0) {
    result += ' et ' + convertTensAndUnits(centimes) + ' centime';
    if (centimes > 1) result += 's';
  } else {
    result += ' et zéro centime';
  }

  return result;

  function convertHundreds(n: number): string {
    if (n === 0) return '';
    const h = Math.floor(n / 100);
    const r = n % 100;
    let s = '';
    if (h > 0) {
      s += units[h] + ' cent ';
    }
    if (r > 0) {
      s += convertTensAndUnits(r);
    }
    return s.trim();
  }

  function convertTensAndUnits(n: number): string {
    if (n === 0) return '';
    if (n < 10) return units[n];
    if (n < 20) return teens[n - 10];

    const t = Math.floor(n / 10);
    const u = n % 10;

    if (t === 7 || t === 9) {
      // 70-79, 90-99
      if (n < 80) {
        return tens[6] + '-' + teens[u];
      } else {
        return tens[8] + '-' + teens[u];
      }
    }

    if (t === 8) {
      // 80-89
      if (u === 0) {
        return 'quatre-vingts';
      } else {
        return 'quatre-vingt-' + units[u];
      }
    }

    if (u === 0) {
      return tens[t];
    }

    if (u === 1 && t !== 8 && t !== 9) {
      return tens[t] + ' et un';
    }

    return tens[t] + '-' + units[u];
  }
}

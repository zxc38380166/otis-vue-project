//引用千分號及時間的方法


//正則表達式版本千分號
export function currency(num) {
    const n = parseInt(num, 10);
    return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

export function date(time) {
    const localDate = new Date(time * 1000);
    return localDate.toLocaleDateString();
}
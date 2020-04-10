export function convertToHours(n){
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rminutes > 3 ? `${rhours} hour(s) and ${rminutes} minute(s).`:`${rhours} hour(s)`;
}
export function convert(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');

    const [month, day, year] = datePart.split('/').map(Number);

    const [hours, minutes] = timePart.split(':').map(Number);

    return new Date(year, month - 1, day, hours, minutes);
}


export function formatDateToCustomString(date: Date): string {
    // Pad single digit numbers with a leading zero
    const pad = (num: number): string => (num < 10 ? '0' : '') + num;

    const month = pad(date.getMonth() + 1); // Months are zero-indexed
    const day = pad(date.getDate());
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${month}/${day}/${year} ${hours}:${minutes}`;
}
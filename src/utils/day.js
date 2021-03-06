export const days = [
    'MONDAY',
    'TURDDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
];

export const short_days = [
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
];

export const bounds = [
    { s : '09:00', f : '10:30' },
    { s : '10:40', f : '12:10' },
    { s : '12:20', f : '13:50' },
    { s : '14:30', f : '16:00' },
    { s : '16:10', f : '16:20' },
    { s : '17:50', f : '19:20' },
    { s : '19:30', f : '21:00' },
    { s : '21:00', f : '23:00' },
];

export function getBoundsForField()
{
    let result = [];
    for(let d of days)
    {
        let line = bounds.slice();
        result.push({ name : d,  time : line })
    }

    return result;
}

export function getBoundsForCells(group)
{
    let result = [];
    let j = 0;
    for(let d of short_days)
    {
        let i = 0;
        for(let t of bounds)
        {
            result.push({
                idx : j * bounds.length + i,
                d_num : j,
                size : bounds.length,
                t_num : i, 
                day : d,  
                time : t, 
                group : group, 
                ctx : [
                    { n : '', t : '', r : '' },
                    { n : '', t : '', r : '' },
                    { n : '', t : '', r : '' },
                    { n : '', t : '', r : '' }
                ]
            });
            ++i;
        }
        ++j;
    }

    return result;
}
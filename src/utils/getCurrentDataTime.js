export function getCurrentDataTime() {
    const now = new Date();
    let response = now.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true});
    
    return response; 

    /* const hours = now.getHours();
    const minutes = now.getMinutes(); 

    const formatAmPm = hours >= 12 ? " pm": " am";
    const newHours = hours > 12 ? hours + 12: hours;
    const formatTime = `${newHours}:${minutes}${formatAmPm} `
    
    return formatTime; */
    


}


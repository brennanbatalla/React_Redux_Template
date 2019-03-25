const months = [
    {name: "January", shortName: "Jan"},
    {name: "February", shortName: "Feb"},
    {name: "March", shortName: "March"},
    {name: "April", shortName: "Apr"},
    {name: "May", shortName: "May"},
    {name: "June", shortName: "Jun"},
    {name: "July", shortName: "Jul"},
    {name: "August", shortName: "Aug"},
    {name: "September", shortName: "Sep"},
    {name: "October", shortName: "Oct"},
    {name: "November", shortName: "Nov"},
    {name: "December", shortName: "Dec"},
];

export const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const expandScientificNotation = (num) => {
    let str = String(num);
    if (str.includes("e")) {
        let parsed = parseInt(str.substring(str.indexOf("e") + 1));
        if (parsed < 0) {
            return parseFloat(num).toFixed(Math.abs(parsed));
        }
    } else {
        return num
    }
};
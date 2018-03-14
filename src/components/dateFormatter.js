export const dateFormatter = (meme) => {
    const months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    }

    let date_time = meme.created_at
    let formatted = date_time.split('-')
    let year = formatted[0]
    let month = formatted[1]
    let day = formatted[2].substr(0, 2)
    let str_month = months[month]
    let new_date = str_month + " " + day + ", " + year

    return new_date
}

export default dateFormatter;

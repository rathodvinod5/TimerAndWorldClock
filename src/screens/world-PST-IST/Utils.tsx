import notifyMessage from "../../component/toast/Toast";
const moment = require('moment-timezone');

export const fetchData = async (searchValue = "") => {
  const url = `https://rough-night-99a5.alkmt.workers.dev/cities?fields%5B%5D=geonameid&fields%5B%5D=asciiname&fields%5B%5D=timezone&filterByFormula=SEARCH(%22${searchValue.toLowerCase()}%22%2C+LOWER(asciiname))&maxRecords=3&sort%5B0%5D%5Bfield%5D=population&sort%5B0%5D%5Bdirection%5D=desc`;

  return fetch(url)
    .then(res => {
      if (res.status === 200) return res.json()
      else throw new Error('Error while fetching data');
    }).then(data => {
      return data = data;
    }).catch(error => {
      notifyMessage('Something went wrong');
      return null;
    });
}


export const getCurrentTimeInIST = (timezone: string) => {
  try {
    // Get the current UTC time
    const currentTimeUTC = new Date();

    // Adjust for Indian Standard Time (IST) which is UTC +5:30
    const ISTOffset = 5.5 * 60 * 60 * 1000; // Convert hours to milliseconds
    const currentTimeIST = new Date(currentTimeUTC.getTime() + ISTOffset); // +ISTOffset

    // Format the time to display
    const formattedTime = currentTimeIST.toLocaleTimeString("en-US", { timeZone: timezone, timeZoneName: "short" });
    return formattedTime;
  } catch (error) {
    return "Error fetching time";
  }
};

// export const getCurrentTimeInIST = (timezone: string) => {
//   try {
//     const currentTimeIST = moment().tz(timezone).format('LTS z Z');
//     return currentTimeIST;
//   } catch (error) {
//     return "Error fetching time";
//   }
// };

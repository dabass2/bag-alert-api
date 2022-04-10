import mapper from "../helpers.js"
import confirmed_bag_alerts from "../constants/bag_alerts.js"

function check_alert() {
  return new Promise((resolve, reject) => {
    try {
      const current_time = new Date()
      const current_hour = current_time.getHours()
      const current_minute = current_time.getMinutes()
      const current_second = current_time.getSeconds()
      
      const alert_duing_current_hour = confirmed_bag_alerts.includes(mapper(current_hour, 24))
      const alert_during_current_minute = confirmed_bag_alerts.includes(mapper(current_minute, 60))
      const alert_during_current_second = confirmed_bag_alerts.includes(mapper(current_second, 60))
      
      const is_bag_alert = alert_duing_current_hour || alert_during_current_minute || alert_during_current_second
      
      resolve(is_bag_alert)
    } catch(error) {
      console.error("Error when trying to check bag alert", error)
      reject(null)
    }
  })
}

export default {
  check_alert
}
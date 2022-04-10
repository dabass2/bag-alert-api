function convert_to_alerts(a, b) {
  return new Promise((resolve, reject) => {
    try {
      resolve(Math.floor((a / b) * 430))
    } catch(error) {
      console.error("Error when converting input to bag alert range:", error)
      reject(error)
    }
  })
}

export default convert_to_alerts
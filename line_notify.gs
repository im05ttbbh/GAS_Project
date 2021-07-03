function morningNotification() {
  const messageText = `\nまだ起きないんですか？\n『あと15分だけ寝る』であなたは何時間人生を無駄にしているか考えたことはありますか？\n現状に満足してないんですよね？\nなら今起きて作業なり勉強なりしないとあきまへんで。`

  const token = "TOKEN"
  const options = {
    "method" : "post",
    "headers" : {
      "Authorization" : "Bearer "+ token
    },
    "payload" : {
      "message" : messageText
    }
  }


  const url  = "https://notify-api.line.me/api/notify"
  UrlFetchApp.fetch(url, options)
}

// api url
const api_url = "https://api.thingspeak.com/channels/2055437/feeds.json?api_key=VPGIFUH7EQJISSMP&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1;
    });
}, 1000);

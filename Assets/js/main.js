var app = new Vue (
  {
    el: "#root",
    data: {
      img: [
				"./Assets/img/HarryPotter.jpg",
				"./Assets/img/RonWeasley.jpg",
				"./Assets/img/RubeusHagrid.jpg",
				"./Assets/img/HermioneGranger.jpg",
        "./Assets/img/Dobby.jpg",
			],
      inputTxt: "",
      index: 0,
      searchTxt: "",
      contacts: contacts,
    },
    methods: {
      time: function (date) {
        let schedule = date.split(" ");
        let newSchedule = schedule[1].split(":")
        return `${newSchedule[0]}:${newSchedule[1]}`;
      },
      getHours: function (index) {
        let messages = this.contacts[index].messages;
        let lastIndex = messages.length - 1;
        let date = messages[lastIndex].date
        // let newDate = date.split(" ");
        // let hourDate = newDate[1].split(":");
        return this.time(date);
      },
      getLastAccess: function (index) {
        let messages = this.contacts[index].messages;
        let lastIndex = messages.length - 1;
        return messages[lastIndex].date
      },
      getLastMessage: function (index) {
        let messages = this.contacts[index].messages;
        let lastIndex = messages.length - 1;
        return messages[lastIndex].text;
      },
      insertTxt: function () {
        if (this.inputTxt != '') {
          let indexProfile = this.index;
          let today = dayjs().format('DD/MM/YY HH:mm:ss');
          let sentMessage = {
            date: today,
            text: this.inputTxt,
            status: 'sent'
          }
          this.contacts[indexProfile].messages.push(sentMessage)
          this.inputTxt = "";
          setTimeout(() => {
            let today = dayjs().format('DD/MM/YY HH:mm:ss');
            let indexRand = this.createNumber(1,5);
            let randomText = ["Non saprei","Tendenzialmente","Sicuro","Papaya","Ma sei fuori!?",]
            let receivedMessage = {
              date: today,
              text: randomText[indexRand],
              status: 'received'
            }
            this.contacts[indexProfile].messages.push(receivedMessage)
          }, 1000)
        }
      },
      createNumber: function (min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      },
    }
  }
);

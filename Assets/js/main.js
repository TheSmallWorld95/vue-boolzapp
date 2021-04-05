var app = new Vue (
  {
    el: "#root",
    data: {
      img: [
				"./Assets/img/HarryPotter.jpg",
				"./Assets/img/RonWeasley.jpg",
				"./Assets/img/RubeusHagrid.jpg",
				"./Assets/img/HermioneGranger.jpg",
			],
      inputTxt: "",
      index: 0,
      contacts: contacts
    },
    methods: {
      time: function (date) {
        let schedule = date.split(" ");
        let newSchedule = schedule[1].split(":")
        return `${newSchedule[0]}:${newSchedule[1]}`;
      },
      getLastAccess: function (index) {
        let messages = this.contacts[index].messages;
        let lastIndex = messages.length - 1;
        return messages[lastIndex].date.split(" ")[1]
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
            let receivedMessage = {
              date: today,
              text: 'ok',
              status: 'received'
            }
            this.contacts[indexProfile].messages.push(receivedMessage)
          }, 1000)
        }

      }
    }
  }
);

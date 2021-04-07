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
        if (messages.length) {
          let lastIndex = messages.length - 1;
          let date = messages[lastIndex].date
          // let newDate = date.split(" ");
          // let hourDate = newDate[1].split(":");
          return this.time(date);
        } else {
          return " ";
        }
      },
      getLastAccess: function (index) {
        let messages = this.contacts[index].messages;
        if (messages.length) {
          let lastIndex = messages.length - 1;
          return messages[lastIndex].date
        } else {
          return " ";
        }
      },
      getLastMessage: function (index) {
        let messages = this.contacts[index].messages;
        if (messages.length) {
          let lastIndex = messages.length - 1;
          return messages[lastIndex].text;
        } else {
          return " ";
        }
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
            let indexRand = this.createNumber(1,4);
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
      showPanel: function (indexMess) {
        this.contacts[this.index].messages =
        this.contacts[this.index].messages.map((message, i) => {
          if (indexMess == i) {
            return {
              ...message,
              showPanel: true,
            }
          } else {
            return {
              ...message,
              showPanel: false,
            }
          }
        });
      },
      hide: function (indexMess) {
        let newMessage = this.contacts[this.index].messages[indexMess]
        if (this.contacts[this.index].messages[indexMess].showPanel == true) {
          this.contacts[this.index].messages[indexMess].showPanel = false
        }
      },
      removeMess: function (indexMess) {
        this.contacts[this.index].messages.splice(indexMess, 1)
      }
    }
  }
);

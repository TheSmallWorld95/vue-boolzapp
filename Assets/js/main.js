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
      index: 0,
      contacts: contacts
    },
    methods: {
      time: function (date) {
        let schedule = date.split(" ");
        let newSchedule = schedule[1].split(":")
        return `${newSchedule[0]}:${newSchedule[1]}`;
      },
    }
  }
);

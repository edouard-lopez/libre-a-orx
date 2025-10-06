const app = Vue.createApp({
  components: { VueCal: vuecal },
  data: () => ({
    selectedEvent: {},
    showDialog: false,
    stickySplitLabels: false,
    minCellWidth: 400,
    minSplitWidth: 100,
    timeCellHeight: 60,
    splitDays: [
      {
        class: "track-fete1",
        label: "Salle des Fêtes 1",
        id: "fete1",
      },
      {
        class: "track-fete2",
        label: "Salle des Fêtes 2 📽",
        id: "fete2",
      },
      { class: "track-presby", label: "Presbytère 📽", id: "presby" },
      { class: "track-outdoor", label: "Extérieur", id: "outdoor" },
    ],
    events: events,
  }),
  methods: {
    onEventClick(event, e) {
      console.log("Event clicked:", event);
      this.selectedEvent = event;
      this.showDialog = true;
      console.log("selectedEvent", this.selectedEvent);

      console.log("showDialog", this.showDialog);

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation();
    },
  },
});
app.use(WaveUI, {});
app.mount("#app");

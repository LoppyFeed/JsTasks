let app = Vue.createApp({
    data() {
        return {
            kmh: 0,
            ms: 0
        };
    },
    methods: {
        changeKmh() {
            this.ms = this.kmh / 3.6;
        },
        changeMs() {
            this.kmh = this.ms * 3.6;
        }
    }
});

app.mount("#app");

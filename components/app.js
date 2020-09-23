const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    id: 'pepe',
                    name: 'Pepe Boludo',
                    phone: '11 1234 5678',
                    email: 'mail@boludo.com',
                },
                {
                    id: 'critina',
                    name: 'Critina Boludo',
                    phone: '11 1234 5679',
                    email: 'mail2@boludo.com',
                },
            ],
        };
    },
});

app.component('user-data', {
    template: `
      <li>
          <h2>{{ contact.name }}</h2>
          <button @click="toggleDetails()">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ contact.phone }}</li>
            <li><strong>Email:</strong> {{ contact.email }}</li>
          </ul>
      </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            contact:                 {
                id: 'pepe',
                name: 'Pepe Boludo',
                phone: '11 1234 5678',
                email: 'mail@boludo.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app')
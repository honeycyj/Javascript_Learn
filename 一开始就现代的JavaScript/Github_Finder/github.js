class GitHub {
    constructor() {
        this.client_id = '893f8a96588347629191';
        this.client_secret = '9d9283d4d7bd91d946cc102b99b83e2f54842b9f';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&?client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();


        return {
            name: profile
        }
    }


}






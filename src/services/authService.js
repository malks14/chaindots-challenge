const fakeAuthService = {
    users: [],
    loadUsers(callback) {
        fetch('/users.json')
            .then(response => response.json())
            .then(data => {
                this.users = data;
                callback();
            })
            .catch(error => console.error('Error loading users:', error));
    },
    login(username, password) {
        const user = this.users.find(user => user.username === username && user.password === password);
        if (user) {
            return Promise.resolve("fake-jwt-token"); 
        } else {
            return Promise.reject("Invalid username or password");
        }
    }
};

export default fakeAuthService;

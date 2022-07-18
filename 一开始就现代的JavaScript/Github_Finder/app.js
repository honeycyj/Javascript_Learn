// Init Github
const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.querySelector("#searchUser");

// Search input event Listener
searchUser.addEventListener("keyup", (e) => {
    // 获取输入值
    const userText = e.target.value;

    if (userText !== "") {
        // Make http call
        github.getUser(userText).then((data) => {
            if (data.name.message === "Not Found") {
                // Show alert
                ui.showAlert("User not found", "alert alert-danger");
            } else {
                // Show profile
                ui.showProfile(data.name);
            }
        });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});

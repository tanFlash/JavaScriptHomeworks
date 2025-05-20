//Task2
function greetUser(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting;
 
    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour> 12 && currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
 
    return `${greeting}, ${username}`;
}
 
module.exports = {
    greetUser: greetUser
};
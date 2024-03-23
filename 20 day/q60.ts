// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.

let profile = (function(){
    let name = "ahmed";
    let age = 20;
    return{
        showinfo:function() {
            console.log(`name: ${name} age: ${age}`);
            
        }
    }
})()

profile.showinfo()

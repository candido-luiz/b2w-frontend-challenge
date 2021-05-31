const url = 'https://randomuser.me/api/';

export const myData = {
    name: {first:'Cândido', last:'Luiz'},
    location: {city:'Canindé', country:'Brazil'},
    nat: 'BR',
    dob: {age: 23},
    email: 'candidoluiz2009@hotmail.com',
    phone:'(79) 99987-2108',
    picture:{large:'https://randomuser.me/api/portraits/women/8.jpg'},
    following: JSON.parse(localStorage.getItem("followeds")) || [],
    emailFollowing: [],
    
    follow: function(user, email){
        this.following.push(user);
        this.emailFollowing.push(email);
        localStorage.setItem("followeds", JSON.stringify(this.following));
    }
}

let data = {
    randomUser: async () =>{
        let res = await fetch(url);
        let json = await res.json();
        return json;
    }
}

export default data;
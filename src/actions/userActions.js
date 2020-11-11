const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

// Methods

export const fetchUser = (userInfo) => dispatch => {
    fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}

export const autoLogin = () => dispatch => {
    fetch(`http://localhost:3000/auto_login`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}
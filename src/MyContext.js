import React from "react";

export const MyContext = React.createContext();

export const AboutContext = React.createContext();

export default class StateContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "Muthukrishnan Perumal",
            email : "muthukrishnanpr@gmail.com",
            dob : "21-01-1998",
            education : "BE - Mechanical Engineering",
            comment : "Hello World"
        }
    }
    render(){
        const {userName, email, dob, education, comment} = this.state
        return(
            <>
            <MyContext.Provider value={{userName : userName, email : email, dob : dob, education : education, comment : comment}}>
                {this.props.children}

            <AboutContext.Provider value={{test : "Please choose your platform"}} />

            </MyContext.Provider>

            </>
        )
    }
}
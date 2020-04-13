import React, { Component } from 'react';

const initialState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    gender: '',
    country: '',
    skills: []
}

class FormApp extends Component {
    constructor() {
        super()
        this.myForm = React.createRef()
    }
    state = { ...initialState }

    changeHandler = (event) => {
        if (event.target.type === "checkbox") {
            if (event.target.checked) {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            } else {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== (event.target.value))
                })
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.myForm.current.reset()
        this.setState({ ...initialState })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} ref={this.myForm}>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={this.state.name}
                        placeholder="Enter your Name"
                        onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Your Valid Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={this.state.email}
                        placeholder="Enter your Email"
                        onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={this.state.password}
                        placeholder="Enter your Password"
                        onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Enter Your Short Bio</label>
                    <textarea
                        type="text"
                        className="form-control"
                        name="bio"
                        id="bio"
                        value={this.state.bio}
                        placeholder="Enter your Bio"
                        onChange={this.changeHandler} />
                </div>
                <div className="form-group">Select Your Gender
                        <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            id="gender1"
                            value="Male"
                            onChange={this.changeHandler} />
                        <label htmlFor="gender1"> Male</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            id="gender2"
                            value="Female"
                            onChange={this.changeHandler} />
                        <label htmlFor="gender2"> Female</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            id="gender3"
                            value="Other"
                            onChange={this.changeHandler} />
                        <label htmlFor="gender3"> Other </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Choose Your Country</label>
                    <select className="form-control" name="country" id="country" onChange={this.changeHandler}>
                        <option>Select Your Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <div className="form-group">Skills
                        <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="skills"
                            id="react"
                            value="ReactJS"
                            onChange={this.changeHandler} />
                        <label className="form-check-label" htmlFor="react">ReactJS</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="skills"
                            id="js"
                            value="Javascript"
                            onChange={this.changeHandler} />
                        <label className="form-check-label" htmlFor="js">Javascript</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="skills"
                            id="angular"
                            value="AngularJS"
                            onChange={this.changeHandler} />
                        <label className="form-check-label" htmlFor="angular">AngularJS</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="skills"
                            id="node"
                            value="NodeJs"
                            onChange={this.changeHandler} />
                        <label className="form-check-label" htmlFor="node">NodeJs</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default FormApp;


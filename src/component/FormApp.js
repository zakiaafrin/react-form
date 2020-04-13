import React, { Component } from 'react';

let initialState = {
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
        this.state = {
            ...initialState
        }
        this.myRef = React.createRef();
    }

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
        console.log(this.state)
        event.preventDefault()
        this.myRef.current.reset()
        this.setState({ ...initialState })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <form onSubmit={this.submitHandler} ref={this.myRef}>
                        <div className="form-group">
                            <label htmlFor="name">Enter your Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                value={this.state.name}
                                placeholder="Enter your Name"
                                onChange={this.changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
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
                            <label htmlFor="name">Password</label>
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
                            <label htmlFor="name">Bio</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="bio"
                                id="bio"
                                value={this.state.bio}
                                placeholder="Enter your Short Bio"
                                onChange={this.changeHandler} />
                        </div>
                        <div className="form-group">Gender
                        <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    id="male"
                                    value="Male"
                                    onChange={this.changeHandler} />
                                <label htmlFor="gender"> Male</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    id="female"
                                    value="Female"
                                    onChange={this.changeHandler} />
                                <label htmlFor="gender"> Female</label>
                            </div>
                        </div>
                        <div className="form-group">Country
                        <select className="custom-select mr-sm-2" name="country" id="country" onChange={this.changeHandler}>
                                <option>Choose Your Country</option>
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
                                    value="React"
                                    onChange={this.changeHandler} />
                                <label className="form-check-label" htmlFor="react">React</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="skills"
                                    id="javascript"
                                    value="Javascript"
                                    onChange={this.changeHandler} />
                                <label className="form-check-label" htmlFor="javascript">Javascript</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="skills"
                                    id="angular"
                                    value="Angular"
                                    onChange={this.changeHandler} />
                                <label className="form-check-label" htmlFor="angular">Angular</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="skills"
                                    id="react"
                                    value="NodeJs"
                                    onChange={this.changeHandler} />
                                <label className="form-check-label" htmlFor="react">NodeJs</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div >
        );
    }
}

export default FormApp;


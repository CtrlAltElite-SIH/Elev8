//to post blogs
//jshint esversion:6
//the ablove line is to remove some warnings related to jshint
import React, {Component} from 'react';
import axios from "axios";
export default class Post extends Component{

    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title : "",
            body : "",
            completed : false
        };
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Blog Title: ${this.state.title}`);
        console.log(`Blog Content: ${this.state.content}`);

        const newBlog = {
            title : this.state.title,
            content : this.state.content
        };
        
        axios.post("http://localhost:4000/elev8/5e18b71f26dbef24e48b937e/post" , newBlog)
        .then(res => console.log(res.data));

        this.setState({
            title: '',
            content: '',
            author: ''
        });
    }

    render() {
        /* jshint ignore:start */
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New BLog</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Content: </label>
                        <textarea name="content" id="post" className="form-control" placeholder="Compose your article" rows="5" value={this.state.content}
                                onChange={this.onChangeContent}></textarea>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create BLog" className="btn btn-primary btn-dark" />
                    </div>
                </form>
            </div>
        );
        /* jshint ignore:end */
    }

}
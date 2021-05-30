import React, { Component } from 'react'

class GifSearch extends Component {
    
    state = {
        gifsearch: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    render()
    {
        return(
            <div>
                    <form onSubmit={(event) => {
                            event.preventDefault();
                            this.props.handleSubmit(this.state.gifsearch)
                        }}>
                    <input type='text' 
                        placeholder='gif keyword' 
                        name='gifsearch' 
                        onChange={this.handleChange}
                        value={this.state.gifsearch}
                    />
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default GifSearch;
import React from "react";
import './search-panel.css';

export default class SearchPanel extends React.Component {

        state = {
                term: ''
        };

        onSearchChange = (e) => {
                const term = e.target.value;
                this.setState({term});
                this.props.onSearchChange(term);
        };
        render() {
                return (
                        <input  className='search-input' 
                        className = 'form-control search-input'     
                        placeholder = 'type for search'
                        value = {this.state.term}
                        onChange = {this.onSearchChange}
                        />
                )
        }
        
        
        
};



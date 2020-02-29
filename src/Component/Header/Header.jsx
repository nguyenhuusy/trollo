import React, { Component } from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import Calendar from '../Calendar/Calendar';
import {save_description,save_name} from '../../redux/actions/tableAction';
import Todolist from '../TodoList/index';
class Header extends Component {
    constructor() {
        super();

        this.state = {
            display: false,
            nameinput:'',
            descriptioninput:'',
            display2:false
        }
    }
    savethistable=()=> {
        const {nameinput,descriptioninput} =this.state;
        const {save_description,save_name,nametable,descriptiontable}=this.props;
        nametable.push(nameinput);
        descriptiontable.push(descriptioninput);
        save_description(descriptiontable);
        save_name(nametable);
        this.setState({display:false});
        this.setState({display2:true});
    }    
    
    render() {
        const { display,display2 } = this.state;
        const {save_description,save_name,nametable,descriptiontable}=this.props;
        return (
            <div className="header">
                <button onClick={() => this.setState({ display: true })} className="insert-table"><i className="fas fa-plus"></i></button>
                {!!display && <div className="inputname">
                    <label style={{ marginBottom: "5px" }}> Nhập tên bảng </label>
                    <input className="form-input form-input-table-name" type="text" name="table-name" onChange={e => this.setState({ nameinput: e.target.value })}/>
                    <label style={{ marginBottom: "5px" }}> Nhập mô tả </label>
                    <input className="form-input form-input-table-description" type="text" name="table-description" onChange={e => this.setState({ descriptioninput: e.target.value })}/>
                    
                    <button className="button" onClick={this.savethistable}> Tạo bảng </button>
                    <button className="button" onClick={()=>this.setState({display:false})}> Huỷ </button>

                </div>}
                {!!display2 && <div className="table-flex">
                    {nametable.map((item,idx)=>
                    <Todolist
                    key={idx}
                    index={idx}
                    name={item}
                    description={descriptiontable[idx]}
                        
                    />
                    )}
                    </div>}
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    nametable: state.table.name,
    descriptiontable: state.table.description
    
})
export default connect(mapStateToProps, { save_description,save_name })(Header);
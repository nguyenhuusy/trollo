import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Todolist.scss';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';
import { save_description_item, save_name_item, save_location, save_deadline, save_deadline_total } from '../../redux/actions/tableitemAction';
import $ from "jquery";
class Todolist extends Component {
    constructor() {
        super();

        this.state = {
            display1: false,
            display2: false,
            display3: false,
            d: '',
            nameiteminput: '',
            descriptioninput: '',
            deadlineinput: ''


        }
    }
    // componentDidMount() {
    //     // Direct reference to autocomplete DOM node
    //     // (e.g. <input ref="autocomplete" ... />
    //     const node = ReactDOM.findDOMNode(this.refs.autocomplete);
    //     // Evergreen event listener || IE8 event listener
    //     const addEvent = this.node.addEventListener || this.node.attachEvent;
    //     addEvent("keypress", this.handleKeyPress, false);
    //   }
    //   componentWillUnmount() {
    //     const removeEvent = this.node.removeEventListener || this.node.detachEvent;
    //     // Reduce any memory leaks
    //     removeEvent("keypress", this.handleKeyPress);
    //   }
    savethistable = () => {
        const { nameItem, descriptionItem, save_deadline, deadline_total, save_deadline_total, deadline, save_description_item, save_name_item, index, location, save_location } = this.props;
        const { display1, display3, display2, nameiteminput, descriptioninput } = this.state;

        location.push(index);
        this.setState({ deadlinestate: deadline })
        deadline_total.push(deadline);
        save_deadline_total(deadline_total);
        save_location(location);
        nameItem.push(nameiteminput);
        descriptionItem.push(descriptioninput);
        save_name_item(nameItem);
        save_description_item(descriptionItem);
        save_deadline('');
        this.setState({ display1: false });
        this.setState({ display2: false });

    }
    allowDrop = (ev) => {
        ev.preventDefault();
        console.log('allowDrop');

    }
    drag = (ev) => {
        ev.dataTransfer.setData("id", ev.target.id);
        //console.log('allowDrop',ev.target.id)
    }
    drop = (ev) => {
        console.log('drop');
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        ev.target.appendChild(document.getElementById(data));
        console.log('drop');
    }
    edit_task = () => {
        const { nameItem, descriptionItem, deadline, save_description_item, save_name_item, save_location, location } = this.props;
        const { display1, display2, display3, nameiteminput, descriptioninput } = this.state;
        if (display3 === false) {
            this.setState({ display3: true })
        } else {
            this.setState({ display3: false })
        }
    }
    delete_task = () => {
        const { nameItem, descriptionItem, deadline, save_description_item, save_name_item, save_location, location } = this.props;
        const { display1, display2, display3, nameiteminput, descriptioninput } = this.state;

    }
    render() {
        const { name, description, index } = this.props;
        const { nameItem, descriptionItem, deadline, deadline_total, save_deadline_total, save_deadline, save_description_item, save_name_item, save_location, location } = this.props;
        const { display1, display2, display3, d, nameiteminput, descriptioninput, deadlinestate } = this.state;
        console.log('d', d)
        var tasks = []
        this.props.location.forEach((t, idx) => {
            if (t === index) {
                tasks.push(
                    <div key={idx}
                        draggable="true" onDragStart={(event) => this.drag(event)}
                        //draggable="true" onClick={(event)=>this.drag(event)} 
                        className="draggable"
                        id={`drag${idx}`}
                    >

                        <div>{nameItem[idx]}</div>
                        <div>
                            {descriptionItem[idx]}</div>
                        <div>
                            {deadline_total[idx]}
                        </div>
                        <button onClick={() => {
                            this.setState({ nameiteminput: nameItem[idx] })
                            this.setState({ descriptioninput: descriptionItem[idx] })
                            
                            this.setState({ d: idx })
                        }}>Sửa task</button>
                        
                        {!!(idx === d) &&
                            <div className="table-item-input">
                                <label style={{ marginBottom: "5px" }} > Tên công việc </label>
                                <input className="form-input form-input-table-name" type="text" name="table-name" value={nameiteminput} onChange={e => this.setState({ nameiteminput: e.target.value })} />
                                <label style={{ marginBottom: "5px" }}> Mô tả nội dung công việc </label>
                                <input className="form-input form-input-table-description" type="text" name="table-description" value={descriptioninput} onChange={e => this.setState({ descriptioninput: e.target.value })} />
                                <button className="deadline" onClick={() => this.setState({ display2: true })}>Deadline</button>
                                {!!display2 &&
                                    <div>
                                        <label style={{ marginBottom: "5px" }}> Deadline </label>
                                        <input className="form-input" type="text" name="deadline" value={deadline} readOnly />
                                        <Calendar />
                                    </div>
                                }
                                <button className="button" onClick={() => {
                                    nameItem.splice(idx, 1, nameiteminput);
                                    descriptionItem.splice(idx, 1, descriptioninput);
                                    if (deadline!==''){deadline_total.splice(idx, 1, deadline)};
                                    this.setState({ d:'' })
                                }}> Lưu thay đổi </button>
                                <button className="button" onClick={() => this.setState({ d:'' })}> Huỷ </button>
                            </div>
                        }
                        <button onClick={() => {
                            nameItem.splice(idx, 1);
                            descriptionItem.splice(idx, 1);
                            deadline_total.splice(idx, 1);
                            location.splice(idx, 1);
                            save_name_item(nameItem);
                            save_description_item(descriptionItem);
                            save_location(location);
                            save_deadline_total(deadline_total);
                            this.setState({ display1: false })
                            return;
                        }
                        }>Xoá task</button>
                    </div>
                );
            }
        });
        return (


            <div className="table" key={index}>

                <div className="table-header">
                    <span className="table-name">{name}</span>
                    <span className="table-description">{description}</span>
                    <button className="button" onClick={() => this.setState({ display1: true })}>Tạo công việc</button>
                    {!!display1 &&
                        <div className="table-item-input">
                            <label style={{ marginBottom: "5px" }}> Tên công việc </label>
                            <input className="form-input form-input-table-name" type="text" name="table-name" onChange={e => this.setState({ nameiteminput: e.target.value })} />
                            <label style={{ marginBottom: "5px" }}> Mô tả nội dung công việc </label>
                            <input className="form-input form-input-table-description" type="text" name="table-description" onChange={e => this.setState({ descriptioninput: e.target.value })} />
                            <button className="deadline" onClick={() => this.setState({ display2: true })}>Deadline</button>
                            {!!display2 &&
                                <div>
                                    <label style={{ marginBottom: "5px" }}> Deadline </label>
                                    <input className="form-input" type="text" name="deadline" value={deadline} readOnly />
                                    <Calendar />
                                </div>
                            }
                            <button className="button" onClick={this.savethistable}> Tạo công việc </button>
                            <button className="button" onClick={() => this.setState({ display1: false })}> Huỷ </button>
                        </div>
                    }


                </div>

                <div className="table-content" id={`div${index}`}
                    onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}
                //onClick={(event)=>this.drop({event})} onClick={(event)=>this.allowDrop(event)}
                >
                    {/* {!!display3 &&  {tasks}} */}
                    {tasks}

                </div>



            </div>

        )
    }
}


const mapStateToProps = state => ({
    nameItem: state.tableitem.name,
    descriptionItem: state.tableitem.description,
    deadline: state.tableitem.deadline,
    deadline_total: state.tableitem.deadline_total,
    location: state.tableitem.location
    // name:state.table.name,
    // description:state.table.description

})
export default connect(mapStateToProps, { save_description_item, save_deadline_total, save_deadline, save_name_item, save_location })(Todolist);
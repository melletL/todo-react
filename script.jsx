class App extends React.Component {
    constructor(){
        super();
        this.changeHandler = this.changeHandler.bind( this );
        this.clickHandler = this.clickHandler.bind( this );
    }

    state = {
        list : [],
        word : ""
    }

    changeHandler (value) {
        // console.log("in change handler")
        this.setState({word: event.target.value});
    }

    clickHandler() {
        // console.log("in click handler")
        // console.log(...this.state.list);
        this.state.list.push(this.state.word);
        this.setState(this.state);
        // const newList = (...this.state.list, this.state.word);
        // figure out why doesn't work
        // this.setState(newList);
    }

    render () {
        return(
            <div>
                <Form changeHandler={this.changeHandler} clickHandler={this.clickHandler} />
                <ItemList list={this.state.list} />
            </div>
        )
    }
}

class Form extends React.Component {

    render () {
        console.log(this.props)

        return (
            <div>
                    <input type="text" onChange={(e) => {this.props.changeHandler(e.target.value);}} />
                    <button onClick= {(e)=> {this.props.clickHandler()}}> Add Item</button>
            </div>
        )
    }


}

class ItemList extends React.Component {
    render () {
        console.log("props",this.props.list);
        <div>
            let itemList = this.props.list.map( (item, index) => {
                <p> {index+1}) {item} </p>
            });
        </div>
        return (
            <div>
                <br/>
                <h1>To do list</h1>
                {itemList}
            </div>
        )
    }
}

class DeletedItemList extends React.Component {
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


//

//     changeHandler(event){
//         if(event.target.value.length >= 5 && event.target.value.length <= 100) {
//             this.setState({word: event.target.value});
//             console.log("change", event.target.value);
//         } else {
//             this.setState({word: event.target.value});
//             console.log("change", event.target.value);
//             document.getElementsByTagName("input")[0].classList.add("warning");
//             document.getElementById("info").innerHTML("add an item between 5 and 100 characters")
//         }
//     }

//     clickHandler(event){
//         console.log("list",this.state.list);
//         console.log("word",this.state.word);
//         this.state.list.push(this.state.word);
//         this.setState(this.state);
//     }

//     render() {
//     // render the list with a map() here
//         console.log("rendering");
//         let itemList = this.state.list.map( (item, index) => {
//             return <p> {index+1}) {item} </p>
//             })

//         return (
//             <div className="list">
//                 <input onChange={this.changeHandler} value={this.state.word} />
//                 <button onClick={this.clickHandler} >add item</button>
//                 <span id="info"></span>
//                 <br/>
//                 <h1>To do list</h1>
//                 {itemList}
//             </div>
//         );
//     }
// }
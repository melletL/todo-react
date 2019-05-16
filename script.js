class List extends React.Component {
    constructor(){
        super()
        this.changeHandler = this.changeHandler.bind( this );
        this.clickHandler = this.clickHandler.bind( this );
    }

    state = {
        list : [],
        word : ""
    }

    changeHandler(event){
        if(event.target.value.length >= 5 && event.target.value.length <= 100) {
            this.setState({word: event.target.value});
            console.log("change", event.target.value);
        } else {
            this.setState({word: event.target.value});
            console.log("change", event.target.value);
            document.getElementsByTagName("input")[0].classList.add("warning");
            document.getElementById("info").innerHTML("add an item between 5 and 100 characters")
        }
    }

    clickHandler(event){
        console.log("list",this.state.list);
        console.log("word",this.state.word);
        this.state.list.push(this.state.word);
        this.setState(this.state);
    }

    render() {
    // render the list with a map() here
        console.log("rendering");
        let itemList = this.state.list.map( (item, index) => {
            return <p> {index+1}) {item} </p>
            })

        return (
            <div className="list">
                <input onChange={this.changeHandler} value={this.state.word} />
                <button onClick={this.clickHandler} >add item</button>
                <span id="info"></span>
                <br/>
                <h1>To do list</h1>
                {itemList}
            </div>
        );
    }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);
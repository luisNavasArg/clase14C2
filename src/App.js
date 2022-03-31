import axios from 'axios';
import './App.css';
import React, { Component } from 'react'
import Spinner from './components/Spinner'
import Header from './components/Header'
import Footer from './components/Footer'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      loading: true,
      error: null
    };

  }
  async misDatos() {
    await axios('https://pruebagcd.herokuapp.com/hoteles')
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }))
  }
  componentDidMount() {
    //https://pruebagcd.herokuapp.com/hoteles
    // fetch('https://randomuser.me/api/')
    // .then((res)=>res.json())
    // .then(data=>console.log("datos ",data))
    // .catch((error)=>{
    //   this.setState({error:error})
    // })
    // .finally(()=>this.setState({loading:false}))

    axios('https://pruebagcd.herokuapp.com/hoteles')
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }))
  }
  render() {
    console.log(this.state.loading)
    if (this.state.error) return "Ocurrió un Error";
    return this.state.loading ? <Spinner /> :

      <div className='container-fluid'>
        <Header/>
        <div className='row'>
          {this.state.data.map((h, i) => { 
            return <div key={i.toString()} className="col-6">
              <h2 className='text-center text-danger'>{h.nombre}</h2>
              <div className='d-flex justify-content-center'>
              <img style={{ width: "250px" }} 
              src={"https://pruebagcd.herokuapp.com/" + h.ruta} />
              <p className='mx-4 p-3 '>{h.info}</p>
              </div>
              
              <p>{h.direccion}</p>
              <div className='d-flex justify-content-center'>
              <ul className=''>{h.servicio.map((s,i)=><li key={i.toString()}>{s}</li>)}</ul>
              </div>
              
              
              </div> })}
        </div>
        <Footer />
        </div>
  }
}

export default App;

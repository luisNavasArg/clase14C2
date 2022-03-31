import axios from 'axios';
import './App.css';
import React, { Component } from 'react'
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
    this.misDatos()
    // https:source.unsplash.com/collection/3678981/800*600
    //https://pruebagcd.herokuapp.com/hoteles
    // fetch('https://randomuser.me/api/')
    // .then((res)=>res.json())
    // .then(data=>console.log("datos ",data))
    // .catch((error)=>{this.setState({error:error})})
    // .finally(()=>this.setState({loading:false}))

    // axios('https://pruebagcd.herokuapp.com/hoteles')
    //   .then(response => this.setState({data:response.data}))
    //   .catch(error => this.setState({ error: error }))
    //   .finally(() => {
    //     setTimeout(()=>{this.setState({ loading: false })},2000)
    //   })

  }
  render() {
    console.log(this.state.loading)
    if (this.state.error) return "Ocurrió un Error";
    return this.state.loading ? <p>Cargando los datos</p>:
    <div className='bg-dark text-white container'>
      <div className='row'>
      {this.state.data.map((h,i)=>{
        return(<div key={i.toString()} className='col-12'>
          <h1>{h.nombre}</h1>
          <div className='d-flex justify-content-center'>
          <img alt={h.nombre} className='w-50' src={"https://pruebagcd.herokuapp.com/"+h.ruta} />
          <p className='mx-5 my-5 '>{h.info}</p>
          </div>
          
          <h3>Servicios:</h3>
          <ul>
            {h.servicio.map((s,i)=>{
              return <li style={{listStyle:"none"}} key={i.toString()}>{s}</li>
            })}
          </ul>
          <p>{h.ubicacion}</p>
        </div>)
        
        })}
      </div>
    </div>
  }
}

export default App;

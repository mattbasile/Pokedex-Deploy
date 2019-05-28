import React, { Component } from 'react'
import PikaGif from '../pika.gif';
import PokeBall from '../pokeball.png';

export default class Pokedex extends Component {

 
  render() {
    console.log(this.props.pokemonTypes)
    return (
      <div>
        {/* { this.props.error ? (<h1>That Pokemon is {this.props.error.response.data}</h1>) :
            this.props.isFetchingPokemon ? (<h1>Gotta Catch Em All </h1>): (<h1>{this.props.selectedPokemon.name}</h1>) } */}
        

        <div className="pokedex-container">
          <div className="left-pokedex-container bg-red-500">
            <div className="poke-light-container">
              <div className="box-1">
                <div className="blue-light bg-blue-400 ">
                </div>
                <div className="three-lights w-1/2">
                  <div className="light red-light bg-red-500 w-1/3"></div>
                  <div className="light yellow-light bg-yellow-500 w-1/3"></div>
                  <div className="light green-light bg-green-500 w-1/3"></div>
                </div>
              </div>
              <div className="box-2"></div>
              <div className="box-3"></div>
            </div>
            <div className="poke-screen">
              <div className={this.props.isFetchingPokemon ? 'trans-screen' : 'screen'} >
              {this.props.error ? (<img src={PikaGif}/>) : this.props.isFetchingPokemon ? (<img className="rotate-center poke-ball-img" src={PokeBall}/>) : (<img src={this.props.pokemonImg}/>)}
              </div>
            <div className="corner-style">
            </div>
            </div>
            <div className="bottom-btns">
            <i onClick={e => this.props.getPokemonById(e, this.props.selectedPokemon)}className="fas fa-caret-left back-btn text-orange-300 hover:text-orange-400"/>
              <div className="name-bar shadow-md">
                <p>{ this.props.error ? "???" : this.props.isFetchingPokemon ? "Gotta Catch Em All" :this.props.selectedPokemon.name}</p>
              </div>
              <i onClick={e => this.props.getPokemonById(e, this.props.selectedPokemon)} className="fas fa-caret-right fwd-btn text-orange-300 hover:text-orange-400"/>
            </div>
            <div className="search-bar bg-red-light block sm:hidden">
              <form onSubmit={this.props.getPokemon}>
                  <input className="mt-6 bg-gray-300 appearance-none border-2 border-gray-300 rounded w-3/5 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"onChange={this.props.handleChanges} name="searchPoke" type="text" placeholder="Search..."/>
              </form>
            </div>
        </div>
          <div className="divider hidden sm:block">
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
            <div className="divider-box"></div>
          </div>


          <div className="right-pokedex-container hidden sm:block">
            <div className="right-light-cutout ">
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </div>
            <div className="stat-screen-container bg-red-500">
              <div className="stat-screen text-green-500 align-left ">
                {this.props.isFetchingPokemon ? (<h2 className="mt-16">Searching...</h2> )
                : this.props.error ? (<h2>This Pokemon does not exist, try searching again!</h2>)
                :(<div>
                    <div className="stat-name">
                      <h4>Name:</h4>
                      <h2>{this.props.selectedPokemon.name}</h2>    
                    </div>
                    <div className="stat-type">
                    <h4>Type:</h4>
                    <div className="flex">{this.props.pokemonTypes.map(type => <h2>{type.type.name},</h2>)}</div>
                    </div>
                    <div className="stat-moves">
                    <h4>Moves:</h4>
                    <div className="moves flex flex-wrap w-4/5 mx-auto">{this.props.pokemonMoves.map(move => <h2 className="">{move.move.name}, </h2>)}</div>
                    </div>
                  </div>)
                
              }
              </div>
            </div>
            <div className="search-bar bg-red-500">
              <form onSubmit={this.props.getPokemon}>
                  <input className="mt-6 bg-gray-300 appearance-none border-2 border-gray-300 rounded w-3/5 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"onChange={this.props.handleChanges} name="searchPoke" type="text" placeholder="Search..."/>
              </form>
            </div>
            <div className="random-btns-container bg-red-500">
            <div className="random-btns">
              <div className="blue-box"></div>
              <div className="blue-box"></div>
              <div className="blue-box"></div>
              <div className="blue-box"></div>
              <div className="blue-box"></div>
            </div>
            <div className="random-btns">
              <div className="blue-box"></div>
              <div className="blue-box"></div>
              <div className="blue-box"></div>
              <div className="blue-box"></div>
              <div className="blue-box"></div>
              </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

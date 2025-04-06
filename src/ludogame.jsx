import { useState } from "react";

export default function ludoGame(){
    let [moves,setMoves]= useState({blue:0,red:0,yellow:0,green:0});

    let moveBlue = ()=>{
        setMoves(()=>{
            return ({...moves,blue:moves.blue+1});
        });
    };

    let moveYellow = ()=>{
        setMoves(()=>{
            return ({...moves,yellow:moves.yellow+1});
        });
    };

    let moveRed = ()=>{
        setMoves(()=>{
            return ({...moves,red:moves.red+1});
        });
    };

    let moveGreen = ()=>{
        setMoves(()=>{
            return ({...moves,green:moves.green+1});
        });
    };

    return(
        <div className="board">
            <h2>blue moves: {moves.blue} </h2>
            <button style={{backgroundColor:"blue"}} onClick={moveBlue}>+1</button>
            <h2>red moves: {moves.red} </h2>
            <button style={{backgroundColor:"red"}} onClick={moveRed}>+1</button>
            <h2>yellow moves: {moves.yellow} </h2>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={moveYellow}>+1</button>
            <h2>green moves: {moves.green} </h2>
            <button style={{backgroundColor:"green"}} onClick={moveGreen}>+1</button>
        </div>
    )
}
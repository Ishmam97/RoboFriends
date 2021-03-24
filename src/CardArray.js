import React,{useState} from 'react';
import ReactModal from 'react-modal'
import Card from './Card';


const CardArray = ({robots})=>{
    const [modalInfo , setModalInfo] = useState(0);    
    const [show , setShow] = useState(false);
    
    const closeModal = ()=>setShow(false);
    
    const clickHandle = async (idx)=>{
        setModalInfo(idx-1)        
        
        setShow(true)

    }

    return(
        <div className="flex flex-wrap justify-center">
        <ReactModal
            isOpen={show}
            contentLabel="Robo Modal"
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            style={{
                overlay:{
                    backgroundColor: '#8a9bbede',                    
                },
                content:{
                    margin:'auto',                                  
                    textAlign:'center',
                    boxSizing:'content-box',
                    width:'30rem',
                    height:'35rem',
                    padding:'3rem'
                }
            }}
            
            >
            <img src={`https://robohash.org/${robots[modalInfo].id}`} alt={`${robots[modalInfo].id}`}/>
            <h3>Name: {robots[modalInfo].name }</h3>
            <h4>Username: @{robots[modalInfo].username }</h4>
            <h4>Email: {robots[modalInfo].email }</h4>
            <h4>Address: {robots[modalInfo].address.suite } , {robots[modalInfo].address.street} , {robots[modalInfo].address.city } , {robots[modalInfo].address.zipcode }</h4>
            <h4>phone: {robots[modalInfo].phone }</h4>
            <button onClick={closeModal}
            style={{
                position:'absolute',
                top:'0',
                right:'0'
                }}>Close Modal</button>
        
        </ReactModal>
        
            {robots.map((user , index)=>{
        return <Card key={index} user={user} clickHandle={clickHandle}/>
    })
    }
        </div>
    )
}

export default CardArray;
import React, {useState, useEffect} from 'react';
import{ Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from "../../assets/logo.svg";
import{FiPower, FiTrash2} from 'react-icons/fi';


import api from "../../services/api";


export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    
    useEffect(() => {
        api.get('/profile', {
            headers:{Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data)
            
        })
    },[ongId]);
    
    async function handleDeleteIncident(id){
        try{
           await api.delete(`incidents/${id}`,{
               header: {
                   Authorization: ongId,
               }
        } );
        
        setIncidents(incidents.filter(incident => incident.id !== id))
        }catch (err){
            alert('Erro ao deletar caso, tente novamente');
        }
    }
    
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    
    return(
       <div className="profile-container">
           <header>
                 <img src={logoImg} alt="Be The Hero"/>   
                 <spam>Bem vinda, {ongName}</spam>
                <Link className= "button" to="/incidents/new"> Cadastrar novo caso </Link>
                <button onClick ={handleLogout} className="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
           </header>
           <h1>Casos Cadastrados</h1>
           <ul>
               {incidents.map(incident =>(
                   <li key = {incident.id}>
                   <strong>CASO:</strong>
                   <p>{incident.title}</p>
                    <strong>DESCRIÇÂO:</strong>
                    <p>{incident.description}</p>
                    <strong>Valor:</strong>
                   <p>{incident.value}</p>
                   <button onClick ={() => handleDeleteIncident(incident.id)} type= "button">
                    <FiTrash2 size={20} color ="#a8a8b3"/>
                   </button>
               </li>
               ))}               
           </ul>
       </div>
    )
    ;
}
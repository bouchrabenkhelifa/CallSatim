import React, { useState } from 'react';
import image from "../Images/image.svg"
import axios from 'axios'

function Ajouter() {
    const [agentFirstName, setAgentFirstName] = useState('');
    const [agentLastName, setAgentLastName] = useState('');
    const [agentEmail, setAgentEmail] = useState('');
    const [agentPhoneNum, setAgentPhoneNum] = useState('');
    const changeHandler = (e,setter)=>{
        console.log(e.target.value)
        setter(e.target.value)
    }
    const handleSubmit = (e)=>{
        // e.preventDefault();
        const agent = {
             first_name : agentFirstName,
             last_name : agentLastName,
             email : agentEmail,
             phone_number : agentPhoneNum,
             active_calls: 0
        };
        axios.post(
            'https://3361-129-45-21-18.ngrok-free.app/agents',
            { agent }
        ).then((res) => {
            console.log(res);
            console.log(res.data);
        })
    }
  return (
    <div className='mx-[14%] my-14  '>
        <div>
        <h2 className="text-2xl pb-5 font-bold">Ajouter un nouveau agent</h2>
     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="space-y-5">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium mb-2 text-gray-700">Nom de l'agent :</label>
            <input onChange={(e) => changeHandler(e,setAgentFirstName)} type="text" id="nom" placeholder="Nom" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
       
          <div>
            <label htmlFor="etat" className="block text-sm font-medium mb-2 text-gray-700">Prénom de l'agent :</label>
            <input onChange={(e) => changeHandler(e,setAgentLastName)} type="text" id="etat" placeholder="Prenom" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="modele" className="block text-sm font-medium mb-2 text-gray-700">Email :</label>
              <input onChange={(e) => changeHandler(e,setAgentEmail)} type="email" id="modele" placeholder="Email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
           
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="prix" className="block text-sm font-medium mb-2 text-gray-700">Numéro de téléphone :</label>
              <input onChange={(e) => changeHandler(e,setAgentPhoneNum)} type="text" id="prix" placeholder="Numéro de téléphone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
        </form>

        <div className="flex mx-auto flex-col  justify-center  p-6">
          <h3 className="text-lg font-semibold  mb-3">Photos</h3>
          <div className=" border border-black border-dashed  w-80 px-16 py-8 rounded-lg">
            <img src={image} alt="Importer" className="w-8 h-8 mx-auto" />
            <span className="text-lg ">Importer des images</span>
          </div>
          <div className='flex mt-10 space-x-4'>
      <button onClick={(e) => {handleSubmit(e)}} className='bg-[#FF0000] text-white font-semobold px-4 py-1 rounded'>Enregistrer</button>
      <button className='bg-[#334C79] text-white font-semibold px-4 py-1 rounded'>Modifier</button>
      <button className='border border-[#243645] text-[#243645] font-semibold px-4 py-1 rounded'>Annuler</button></div>

        </div>
      </div>




    </div>
  )
}

export default Ajouter
import React from 'react';
import image from "../Images/image.svg"

function Ajouter() {
  return (
    <div className='mx-[14%] my-14  '>
        <div>
        <h2 className="text-2xl pb-5 font-bold">Ajouter un nouveau agent</h2>
     
      </div>

      {/* Formulaire en deux colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Première colonne : champs du formulaire */}
        <form className="space-y-5">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium mb-2 text-gray-700">Nom de l'agent :</label>
            <input type="text" id="nom" placeholder="Nom" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
       
          <div>
            <label htmlFor="etat" className="block text-sm font-medium mb-2 text-gray-700">État de l'agent :</label>
            <input type="text" id="etat" placeholder="État" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="modele" className="block text-sm font-medium mb-2 text-gray-700">Date de naissance de l'agent :</label>
              <input type="text" id="modele" placeholder="Modèle" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
           
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="prix" className="block text-sm font-medium mb-2 text-gray-700">Numéro de téléphone :</label>
              <input type="text" id="prix" placeholder="Prix" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="flex-1">
              <label htmlFor="adresse" className="block text-sm font-medium mb-2 text-gray-700">Langue :</label>
              <input type="text" id="adresse" placeholder="Adresse" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
        </form>

        {/* Deuxième colonne : rectangle d'importation d'images */}
        <div className="flex mx-auto flex-col  justify-center  p-6">
          <h3 className="text-lg font-semibold  mb-3">Photos</h3>
          <div className=" border border-black border-dashed  w-80 px-16 py-8 rounded-lg">
            <img src={image} alt="Importer" className="w-8 h-8 mx-auto" />
            <span className="text-lg ">Importer des images</span>
          </div>
          <div className='flex mt-10 space-x-4'>
      <button className='bg-[#FF0000] text-white font-semobold px-4 py-1 rounded'>Enregistrer</button>
      <button className='bg-[#334C79] text-white font-semibold px-4 py-1 rounded'>Modifier</button>
      <button className='border border-[#243645] text-[#243645] font-semibold px-4 py-1 rounded'>Annuler</button></div>

        </div>
      </div>




    </div>
  )
}

export default Ajouter
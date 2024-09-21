import React, { useState } from 'react';
import { FaPhoneAlt, FaClock, FaMicrophone, FaChartBar, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import axios from 'axios';

const Appel = () => {
    const [audioFile, setAudioFile] = useState(null);

    const commandes = [
        { Numero: '001', Nom: 'Benkhelifa', date: '2024-08-15', Prénom: 'Bouchra', etat: 'En cours', Type: 'Entrante' },
        { Numero: '002', Nom: 'Laissaoui', date: '2024-08-14', Prénom: 'Hadjer', etat: 'En attente', Type: 'Sortante' },
        { Numero: '003', Nom: 'Hadjam', date: '2024-08-15', Prénom: 'Hadjam', etat: 'En cours', Type: 'Entrante' },
        { Numero: '004', Nom: 'Haissem', date: '2024-08-14', Prénom: 'Imene', etat: 'En attente', Type: 'Sortante' },
        { Numero: '005', Nom: 'Benboudaa', date: '2024-08-15', Prénom: 'Ameena', etat: 'En cours', Type: 'Entrante' },
        { Numero: '006', Nom: 'Haissem', date: '2024-08-14', Prénom: 'Imene', etat: 'En attente', Type: 'Sortante' },
        { Numero: '007', Nom: 'Benboudaa', date: '2024-08-15', Prénom: 'Ameena', etat: 'En cours', Type: 'Entrante' },
        { Numero: '008', Nom: 'Haissem', date: '2024-08-14', Prénom: 'Imene', etat: 'En attente', Type: 'Sortante' },
      
        // Other data...
    ];

    // Function to handle drag and drop
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('audio/')) {
            setAudioFile(file);
            uploadAudio(file);
        } else {
            alert("Please upload an audio file.");
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Function to upload the audio file to backend using Axios
    const uploadAudio = (file) => {
        const formData = new FormData();
        formData.append('audio', file);

        axios.post('https://3361-129-45-21-18.ngrok-free.app/test_audio', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log('File uploaded successfully', response.data);
        })
        .catch(error => {
            console.error('Error uploading file', error);
        });
    };

    return (
        <div className="bg-gray-200 p-6 flex flex-col space-y-6">
         
            <div className="bg-white p-4 rounded shadow-md w-[95%] mx-auto">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold">Les appels</h2>
                </div>
                <hr className="mb-4" />
                <div className="flex items-center mb-2 pb-3 border-b">
                    <span className="pl-7 flex-1">Nom</span>
                    <span className="flex-1">Prénom</span>
                    <span className="flex-1">Date</span>
                    <span className="flex-1">Numéro de tél</span>
                    <span className="flex-1">Etat</span>
                    <span className="flex-1">Type</span>
                </div>

                {/* Dynamic list */}
                <div>
                    {commandes.map((commande, index) => (
                        <div key={index} className="flex pb-3 items-center mb-2 border-b last:border-none py-2">
                            <input type="checkbox" className="mr-2" />
                            <span className="pl-4 flex-1">{commande.Nom}</span>
                            <span className="flex-1">{commande.Prénom}</span>
                            <span className="flex-1">{commande.date}</span>
                            <span className="flex-1">{commande.Numero}</span>
                            <span className="flex-1">{commande.etat}</span>
                            <span className="flex-1 flex items-center">
                                {commande.Type === 'Entrante' ? (
                                    <FaArrowDown className="mr-2 text-[#00FF00]" />
                                ) : (
                                    <FaArrowUp className="mr-2 text-[#FF0000]" />
                                )}
                                {commande.Type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appel;

import React from 'react';
import { FaPhoneAlt, FaClock, FaMicrophone, FaChartBar, FaArrowDown, FaArrowUp } from 'react-icons/fa';


const Appel = () => {
    const commandes = [
        { Numero: '001', Nom: 'Nom A', date: '2024-08-15', Prénom: 'Prénom 1', etat: 'En cours', Type: 'Entrante' },
        { Numero: '002', Nom: 'Nom B', date: '2024-08-14', Prénom: 'Prénom 2', etat: 'En attente', Type: 'Sortante' },
        { Numero: '004', Nom: 'Nom D', date: '2024-08-14', Prénom: 'Prénom 4', etat: 'En attente', Type: 'Sortante' },
        { Numero: '005', Nom: 'Nom E', date: '2024-08-15', Prénom: 'Prénom 5', etat: 'En cours', Type: 'Entrante' },
        { Numero: '006', Nom: 'Nom F', date: '2024-08-16', Prénom: 'Prénom 6', etat: 'En attente', Type: 'Entrante' },
        { Numero: '007', Nom: 'Nom G', date: '2024-08-17', Prénom: 'Prénom 7', etat: 'Terminée', Type: 'Sortante' },
    ];

    return (
        <div className="bg-gray-200  p-6 flex flex-col space-y-6">
            {/* Container for the rectangles */}
            <div className="flex justify-around space-x-4">
                {/* Rectangle 1 */}
                <div className="bg-white p-4 w-1/5 h-1/4 flex flex-col items-center shadow-md rounded-lg">
                    <div className="flex items-center">
                        <FaPhoneAlt className="w-5 h-5 mr-2 text-[#FF0000]" />
                        <span className="text-lg font-semibold">Total des appels</span>
                    </div>
                    <div className="mt-2 text-3xl font-bold">12</div>
                </div>

                {/* Rectangle 2 */}
                <div className="bg-white p-4  w-1/5 h-1/4 flex flex-col items-center shadow-md rounded-lg">
                    <div className="flex items-center">
                        <FaClock className="w-5 h-5 mr-1 text-[#FF0000]" />
                        <span className="text-lg font-semibold">Appels en attente</span>
                    </div>
                    <div className="mt-2 text-2xl font-bold">15</div>
                </div>

                {/* Rectangle 3 */}
                <div className="bg-white p-4 w-1/5 h-1/4 flex flex-col items-center shadow-md rounded-lg">
                    <div className="flex items-center">
                        <FaMicrophone className="w-5 h-5 mr-2 text-[#FF0000]" />
                        <span className="text-lg font-semibold">Appel en cours</span>
                    </div>
                    <div className="mt-2 text-2xl font-bold">15</div>
                </div>

                {/* Rectangle 4 */}
                <div className="bg-white p-4 w-1/5 h-1/4 flex flex-col items-center shadow-md rounded-lg">
                    <div className="flex items-center">
                        <FaChartBar className="w-6 h-6 mr-2 text-[#FF0000]" />
                        <span className="text-lg font-semibold">Durée moyenne</span>
                    </div>
                    <div className="mt-2 text-2xl font-bold">20 min</div>
                </div>
            </div>

            {/* Rectangle avec les appels */}
            <div className="bg-white p-4 rounded shadow-md w-[95%] mx-auto">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold">Les appels</h2>
                    <span>
                       
                    </span>
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

                {/* Liste dynamique */}
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


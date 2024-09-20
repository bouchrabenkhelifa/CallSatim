import React, { useState } from 'react';
import Trash from '../Images/Trash.svg';
import Pen from "../Images/Pen.svg";

const initialUsers = [
    { id: 1, nom: 'Benkhelifa', prenom: 'Bouchra', Date: '05/05/1990', location: 'Mila', telephone: '0123456789' },
    { id: 2, nom: 'Karim', prenom: 'Yassine', Date: '01/01/1985', location: 'Algiers', telephone: '0987654321' },
    { id: 3, nom: 'Doe', prenom: 'John', Date: '15/08/1980', location: 'Oran', telephone: '0555555555' },
    { id: 4, nom: 'Smith', prenom: 'Jane', Date: '22/11/1992', location: 'Constantine', telephone: '0771234567' },
    { id: 5, nom: 'Mokhtar', prenom: 'Fatima', Date: '30/07/1983', location: 'Tlemcen', telephone: '0654321987' },
    { id: 6, nom: 'El Amrani', prenom: 'Mohamed', Date: '12/06/1979', location: 'Annaba', telephone: '0612345678' },
    { id: 7, nom: 'Haddad', prenom: 'Karima', Date: '17/03/1995', location: 'Tizi Ouzou', telephone: '0798765432' },
];

function Clients() {
    const [users, setUsers] = useState(initialUsers);

    // Fonction pour supprimer un utilisateur
    const handleDelete = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    };

    return (
        <div className=' bg-[#E7E7E3] py-5 '>
            <div className='p-4 my-5 mx-auto flex w-[90%] bg-white rounded shadow-md flex-col gap-4 overflow-y-auto'>
                <div className=" p-4 w-[95%] mx-auto">
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className="text-lg font-bold">Liste des clients</h2>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex px-5 text-gray-600 pb-3 items-center mb-2 border-b">
                        <span className="pl-7 flex-1">Nom</span>
                        <span className="flex-1">Prénom</span>
                        <span className="flex-1">Date</span>
                        <span className="flex-1 mr-7">Numéro de tél</span>
                    </div>

                    {/* Liste dynamique */}
                    <div>
                        {users.map((user, index) => (
                            <div key={index} className="flex px-4 items-center mb-2 border-b last:border-none py-3">
                                <input type="checkbox" className="mr-2" />
                                <span className="pl-5 flex-1">{user.nom}</span>
                                <span className="pl-6 flex-1">{user.prenom}</span>
                                <span className="pl-6 flex-1">{user.Date}</span>
                                <span className="pl-6 flex-1">{user.telephone}</span>
                                <div className='flex gap-5'>
                                    <a href={`/edit/${user.id}`}><img src={Pen} alt="Edit" className='w-4 mr-3 ' /></a>
                                    <button onClick={() => handleDelete(user.id)}>
                                        <img src={Trash} alt="Delete" className='w-4' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;

'use client';
import React, { useState } from 'react';
import RoomModal from './RoomModal';

interface Room {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  price: string;
  size: string;
  capacity: string;
  images: string[];
  amenities: string[];
}

const rooms: Room[] = [
    {
      id: 1,
      name: 'Szoba kétszemélyes ággyal',
      shortDesc: 'Elegáns kényelem két főre',
      description: 'Tágas, luxus felszereltségű szobáink tökéletes választás pároknak. Modern fürdőszoba, king size ágy, és panorámás kilátás teszi különlegessé.',
      price: '45.000 Ft / éj',
      size: '32m²',
      capacity: '2 fő',
      images: [
        '/rablaki7813740.jpg',
        '/rablaki7813755.jpg',
        '/rablaki7813759.jpg',
      ],
      amenities: ['King size ágy', 'Légkondicionáló', 'Mini bár', 'Wifi', 'Smart TV', 'Széf']
    },
    {
      id: 2,
      name: 'Szoba teszt',
      shortDesc: 'Tágas tér az egész családnak',
      description: 'Kényelmes, két hálószobás apartmanunk tökéletes választás családok számára. Teljesen felszerelt konyha, tágas nappali és modern fürdőszoba várja vendégeinket.',
      price: '65.000 Ft / éj',
      size: '55m²',
      capacity: '4-5 fő',
      images: [
        '/595182562.jpg',
        '/595182578.jpg',
        '/rablaki7813737.jpg'
      ],
      amenities: ['2 hálószoba', 'Felszerelt konyha', 'Légkondicionáló', 'Wifi', 'Smart TV', 'Mosógép', 'Erkély']
    },
    {
      id: 3,
      name: 'Szoba teszt 2',
      shortDesc: 'Luxus és elegancia',
      description: 'Exkluzív suite szobánk a luxus és kényelem találkozása. Különleges panoráma, privát terasz és prémium szolgáltatások várják vendégeinket.',
      price: '75.000 Ft / éj',
      size: '45m²',
      capacity: '2 fő',
      images: [
        '/rablaki7813740.jpg',
        '/rablaki7813725.jpg',
      ],
      amenities: ['King size ágy', 'Pezsgőfürdő', 'Privát terasz', 'Mini bár', 'Nespresso gép', 'Prémium fürdőszoba']
    },
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Szobáink</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fedezze fel szálláshelyünk egyedi kialakítású szobáit, melyek mindegyike 
            a kényelem és stílus tökéletes harmóniáját nyújtja
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              
              <div className="aspect-[4/3] overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${room.images[0]})` }}
                />
              </div>

              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.shortDesc}</p>
                
                
                <div className="flex items-center gap-4 mb-6 text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                      />
                    </svg>
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                      />
                    </svg>
                    <span>{room.capacity}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{room.price}</span>
                  <span className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                    Részletek →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  );
}
"use client";
// pages/page.js
import React from 'react';
import TestPage from './pages/test';

export default function Home() {
  console.log('Inicio Consumo API: https://api-picking.promart.ec/api/picking');

  return (
    <main>
      {/* Resto de tu código */}
      <TestPage />
    </main>
  );
}

// pages/test.js
import React, { useEffect } from 'react';
import axios from 'axios';

const TestPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(
          'https://api-picking.promart.ec/api/picking',
          {
            eanNumber: '2200000085948',
            orderNumber: '8594',
            idEcommerce: '1441040507897-01',
            origin: 'HESA-101',
            details: [
              {
                skuCode: '14947',
                eanCode: '2000001296127',
                requiredQuantity: '1',
                pickedQuantity: '1',
                missingPicking: '0',
                userId: 'EMAP',
                reasonId: '1',
                reason: 'Por consolidar',
                unitMeasurement: 'UN',
              },
            ],
          }
        );

        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Contenido de tu página test */}
    </div>
  );
};

export default TestPage;

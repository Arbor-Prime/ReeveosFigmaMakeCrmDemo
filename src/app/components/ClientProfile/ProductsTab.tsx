import React from 'react';

interface Product {
  id: string;
  name: string;
  purchaseDate: string;
  price: number;
  usage: number;
}

export const ProductsTab: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Vitamin C Serum',
      purchaseDate: '12 Jan 2026',
      price: 45,
      usage: 85
    },
    {
      id: '2',
      name: 'SPF 50+ Moisturiser',
      purchaseDate: '28 Feb 2026',
      price: 38,
      usage: 25
    },
    {
      id: '3',
      name: 'Retinol Night Cream',
      purchaseDate: '05 Feb 2026',
      price: 52,
      usage: 60
    },
    {
      id: '4',
      name: 'Hyaluronic Acid Serum',
      purchaseDate: '22 Jan 2026',
      price: 42,
      usage: 70
    },
    {
      id: '5',
      name: 'Gentle Cleanser',
      purchaseDate: '15 Jan 2026',
      price: 28,
      usage: 80
    }
  ];

  return (
    <div
      className="bg-white p-6"
      style={{
        borderRadius: '16px',
        border: '1px solid #EBEBEB',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      }}
    >
      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
        Purchased Products
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => {
          const needsRestock = product.usage >= 75;
          
          return (
            <div
              key={product.id}
              className="p-5 border border-[#EBEBEB]"
              style={{ borderRadius: '16px' }}
            >
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>
                {product.name}
              </div>
              <div style={{ fontSize: '14px', color: '#888888', marginBottom: '16px' }}>
                {product.purchaseDate} • £{product.price}
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div
                  className="w-full h-3"
                  style={{
                    backgroundColor: '#EBEBEB',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${product.usage}%`,
                      height: '100%',
                      backgroundColor: needsRestock ? '#F59E0B' : '#059669',
                      borderRadius: '6px',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  {needsRestock && (
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#F59E0B' }}>
                      Likely needs restocking
                    </div>
                  )}
                  {!needsRestock && (
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#059669' }}>
                      Plenty remaining ({100 - product.usage}% left)
                    </div>
                  )}
                </div>
                
                {needsRestock && (
                  <button
                    className="px-4 py-2 text-white"
                    style={{
                      backgroundColor: '#111111',
                      borderRadius: '10px',
                      fontSize: '13px',
                      fontWeight: 600,
                      minHeight: '36px'
                    }}
                  >
                    Send Reminder
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

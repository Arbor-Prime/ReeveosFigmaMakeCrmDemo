import React from 'react';
import { Calendar, User, MapPin } from 'lucide-react';

export const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Next Appointment Card */}
      <div
        className="p-6"
        style={{
          background: 'linear-gradient(135deg, #FFF9E6 0%, #FFF5D6 100%)',
          borderRadius: '16px',
          border: '1px solid #C9A84C20',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <div className="mb-4">
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '12px' }}>
            Next Appointment
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} style={{ color: '#888888' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#111111' }}>
                  Advanced Microneedling
                </div>
                <div style={{ fontSize: '13px', color: '#888888' }}>
                  Thursday, 20 March 2026
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} style={{ color: '#888888' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                  Grace Thompson
                </div>
                <div style={{ fontSize: '13px', color: '#888888' }}>
                  Senior Therapist
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} style={{ color: '#888888' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                  Treatment Room 2
                </div>
                <div style={{ fontSize: '13px', color: '#888888' }}>
                  2:30 PM - 3:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personalisation Notes - The Hero */}
        <div
          className="p-4"
          style={{
            backgroundColor: '#FFF3CD',
            borderRadius: '12px',
            border: '1px solid #F59E0B20'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#F59E0B', marginBottom: '6px' }}>
            PERSONALISATION NOTES
          </div>
          <p style={{ fontSize: '15px', fontWeight: 500, color: '#111111', lineHeight: '1.6' }}>
            Likes Sauvignon Blanc for evening appointments. Holiday to Marbella end of March — avoid peels 2 weeks before. Prefers Grace as therapist. Sensitive to strong fragrances — use unscented products only.
          </p>
        </div>
      </div>

      {/* Consultation Status */}
      <div
        className="p-6 bg-white"
        style={{
          borderRadius: '16px',
          border: '1px solid #EBEBEB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
          Consultation Status
        </h3>
        <div className="flex items-start gap-4">
          <div
            className="px-4 py-2 bg-[#059669]/10 border border-[#059669]/20"
            style={{ borderRadius: '20px' }}
          >
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#059669' }}>
              Clear
            </span>
          </div>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#111111', marginBottom: '4px' }}>
              No contraindications
            </p>
            <p style={{ fontSize: '14px', color: '#888888' }}>
              Last updated 28 February 2026
            </p>
          </div>
        </div>
      </div>

      {/* Product Restock */}
      <div
        className="p-6 bg-white"
        style={{
          borderRadius: '16px',
          border: '1px solid #EBEBEB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
          Product Restock Indicators
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <ProductRestockCard
            name="Vitamin C Serum"
            purchaseDate="12 Jan 2026"
            price={45}
            usage={85}
            needsRestock={true}
          />
          <ProductRestockCard
            name="SPF 50+ Moisturiser"
            purchaseDate="28 Feb 2026"
            price={38}
            usage={25}
            needsRestock={false}
          />
          <ProductRestockCard
            name="Retinol Night Cream"
            purchaseDate="05 Feb 2026"
            price={52}
            usage={60}
            needsRestock={false}
          />
        </div>
      </div>
    </div>
  );
};

const ProductRestockCard: React.FC<{
  name: string;
  purchaseDate: string;
  price: number;
  usage: number;
  needsRestock: boolean;
}> = ({ name, purchaseDate, price, usage, needsRestock }) => {
  return (
    <div className="p-4 border border-[#EBEBEB]" style={{ borderRadius: '12px' }}>
      <div style={{ fontSize: '15px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>
        {name}
      </div>
      <div style={{ fontSize: '13px', color: '#888888', marginBottom: '12px' }}>
        {purchaseDate} • £{price}
      </div>
      
      {/* Progress bar */}
      <div className="mb-2">
        <div
          className="w-full h-2"
          style={{
            backgroundColor: '#EBEBEB',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: `${usage}%`,
              height: '100%',
              backgroundColor: needsRestock ? '#F59E0B' : '#059669',
              borderRadius: '4px',
              transition: 'width 0.3s ease'
            }}
          />
        </div>
      </div>
      
      {needsRestock && (
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#F59E0B' }}>
          Likely needs restocking
        </div>
      )}
      {!needsRestock && (
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#059669' }}>
          Plenty remaining
        </div>
      )}
    </div>
  );
};

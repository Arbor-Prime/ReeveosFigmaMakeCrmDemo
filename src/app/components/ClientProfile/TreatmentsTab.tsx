import React from 'react';

interface Treatment {
  id: string;
  date: string;
  day: string;
  month: string;
  service: string;
  therapist: string;
  room: string;
  reaction: number;
  comfort: number;
}

export const TreatmentsTab: React.FC = () => {
  const treatments: Treatment[] = [
    {
      id: '1',
      date: '28 Feb 2026',
      day: '28',
      month: 'Feb',
      service: 'Advanced Microneedling',
      therapist: 'Grace Thompson',
      room: 'Treatment Room 2',
      reaction: 2,
      comfort: 5
    },
    {
      id: '2',
      date: '15 Feb 2026',
      day: '15',
      month: 'Feb',
      service: 'Advanced Microneedling',
      therapist: 'Grace Thompson',
      room: 'Treatment Room 2',
      reaction: 1,
      comfort: 5
    },
    {
      id: '3',
      date: '01 Feb 2026',
      day: '01',
      month: 'Feb',
      service: 'Advanced Microneedling',
      therapist: 'Grace Thompson',
      room: 'Treatment Room 1',
      reaction: 2,
      comfort: 4
    },
    {
      id: '4',
      date: '18 Jan 2026',
      day: '18',
      month: 'Jan',
      service: 'Skin Consultation',
      therapist: 'Sarah Mitchell',
      room: 'Consultation Room',
      reaction: 1,
      comfort: 5
    },
    {
      id: '5',
      date: '05 Jan 2026',
      day: '05',
      month: 'Jan',
      service: 'Chemical Peel',
      therapist: 'Grace Thompson',
      room: 'Treatment Room 2',
      reaction: 3,
      comfort: 4
    }
  ];

  const getReactionColor = (score: number) => {
    if (score <= 1) return '#059669';
    if (score <= 2) return '#10B981';
    if (score <= 3) return '#F59E0B';
    if (score <= 4) return '#F97316';
    return '#EF4444';
  };

  const getComfortColor = (score: number) => {
    if (score >= 5) return '#059669';
    if (score >= 4) return '#10B981';
    if (score >= 3) return '#F59E0B';
    if (score >= 2) return '#F97316';
    return '#EF4444';
  };

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
        Treatment History
      </h3>

      <div className="space-y-3">
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className="flex items-center gap-6 p-4 border border-[#EBEBEB] hover:border-[#C9A84C] transition-colors"
            style={{ borderRadius: '12px' }}
          >
            {/* Date */}
            <div className="text-center" style={{ minWidth: '60px' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#111111', lineHeight: 1 }}>
                {treatment.day}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#888888', textTransform: 'uppercase' }}>
                {treatment.month}
              </div>
            </div>

            {/* Service */}
            <div className="flex-1">
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>
                {treatment.service}
              </div>
              <div className="flex items-center gap-4" style={{ fontSize: '14px', color: '#888888' }}>
                <span>{treatment.therapist}</span>
                <span>•</span>
                <span>{treatment.room}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div
                  className="mb-1 px-3 py-1"
                  style={{
                    borderRadius: '8px',
                    backgroundColor: `${getReactionColor(treatment.reaction)}15`,
                    border: `1px solid ${getReactionColor(treatment.reaction)}30`
                  }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: getReactionColor(treatment.reaction)
                    }}
                  >
                    {treatment.reaction}
                  </span>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#888888' }}>
                  Reaction
                </div>
              </div>

              <div className="text-center">
                <div
                  className="mb-1 px-3 py-1"
                  style={{
                    borderRadius: '8px',
                    backgroundColor: `${getComfortColor(treatment.comfort)}15`,
                    border: `1px solid ${getComfortColor(treatment.comfort)}30`
                  }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: getComfortColor(treatment.comfort)
                    }}
                  >
                    {treatment.comfort}
                  </span>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#888888' }}>
                  Comfort
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

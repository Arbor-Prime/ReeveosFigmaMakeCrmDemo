import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface CheckInFlowProps {
  client: {
    name: string;
  };
  onBack: () => void;
}

interface ChecklistItem {
  id: string;
  question: string;
  checked: boolean;
}

export const CheckInFlow: React.FC<CheckInFlowProps> = ({ client, onBack }) => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', question: 'Any medical changes since last visit?', checked: false },
    { id: '2', question: 'Pregnancy check', checked: false },
    { id: '3', question: 'Using prescribed home care products?', checked: false },
    { id: '4', question: 'Recent sun exposure or sunbed use?', checked: false },
    { id: '5', question: 'Client expectations for today?', checked: false }
  ]);

  const [notes, setNotes] = useState('');

  const toggleChecklistItem = (id: string) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleConfirmCheckIn = () => {
    // Simulate check-in completion
    alert('Client checked in successfully!');
    onBack();
  };

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-auto" style={{ fontFamily: 'Figtree' }}>
      <div className="max-w-[900px] mx-auto p-6">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-[#111111] hover:text-[#C9A84C] transition-colors"
          style={{ minHeight: '44px', fontSize: '15px', fontWeight: 600 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Profile</span>
        </button>

        {/* Check-In Header */}
        <div
          className="p-6 mb-6"
          style={{
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', opacity: 0.9, marginBottom: '8px' }}>
            CHECK-IN
          </div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            {client.name}
          </div>
          <div className="grid grid-cols-3 gap-4" style={{ fontSize: '14px', color: '#FFFFFF', opacity: 0.9 }}>
            <div>
              <span style={{ fontWeight: 600 }}>Service:</span> Advanced Microneedling
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>Time:</span> 2:30 PM - 3:30 PM
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>Therapist:</span> Grace Thompson
            </div>
          </div>
        </div>

        {/* Auto-Detected Alerts */}
        <div
          className="p-6 mb-6"
          style={{
            backgroundColor: '#FFF3CD',
            borderRadius: '16px',
            border: '1px solid #F59E0B30',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#F59E0B', marginBottom: '16px' }}>
            AUTO-DETECTED ALERTS
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                  Consultation Status: Clear
                </div>
                <div style={{ fontSize: '14px', color: '#888888' }}>
                  No contraindications. Last updated 28 Feb 2026
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                  Last Treatment Reaction: Level 2
                </div>
                <div style={{ fontSize: '14px', color: '#888888' }}>
                  Slight redness - normal response
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                  Package Session: 4/6
                </div>
                <div style={{ fontSize: '14px', color: '#888888' }}>
                  2 sessions remaining
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={20} style={{ color: '#F59E0B', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                  Important Note
                </div>
                <div style={{ fontSize: '14px', color: '#888888' }}>
                  Sensitive to strong fragrances - use unscented products only
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Treatment Checklist */}
        <div
          className="p-6 mb-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '20px' }}>
            Pre-Treatment Checklist
          </h3>

          <div className="space-y-3">
            {checklist.map((item) => (
              <label
                key={item.id}
                className="flex items-center gap-4 p-4 border border-[#EBEBEB] hover:border-[#C9A84C] transition-colors cursor-pointer"
                style={{
                  borderRadius: '12px',
                  minHeight: '44px'
                }}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleChecklistItem(item.id)}
                  className="w-6 h-6 cursor-pointer"
                  style={{
                    accentColor: '#059669',
                    flexShrink: 0
                  }}
                />
                <span style={{ fontSize: '15px', fontWeight: 500, color: '#111111' }}>
                  {item.question}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div
          className="p-6 mb-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Additional Notes
          </h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any additional notes here..."
            className="w-full p-4 border border-[#EBEBEB] outline-none focus:border-[#C9A84C] transition-colors resize-none"
            rows={4}
            style={{
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 500,
              fontFamily: 'Figtree'
            }}
          />
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirmCheckIn}
          className="w-full text-white"
          style={{
            height: '56px',
            backgroundColor: '#059669',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 700,
            boxShadow: '0 2px 8px rgba(5,150,105,0.3)'
          }}
        >
          Confirm Check-In
        </button>
      </div>
    </div>
  );
};

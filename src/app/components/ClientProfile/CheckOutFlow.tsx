import React, { useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';

interface CheckOutFlowProps {
  client: {
    name: string;
  };
  onBack: () => void;
}

export const CheckOutFlow: React.FC<CheckOutFlowProps> = ({ client, onBack }) => {
  const [treatmentNotes, setTreatmentNotes] = useState('');
  const [followUpNotes, setFollowUpNotes] = useState('');
  const [skinReaction, setSkinReaction] = useState<number | null>(null);
  const [clientComfort, setClientComfort] = useState<number | null>(null);
  const [aftercareGiven, setAftercareGiven] = useState(false);
  const [expectationsInformed, setExpectationsInformed] = useState(false);

  const handleCompleteAppointment = () => {
    // Simulate appointment completion
    alert('Appointment completed successfully!');
    onBack();
  };

  const reactionLabels = ['None', 'Minimal', 'Mild', 'Moderate', 'Severe'];
  const comfortLabels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  const getReactionColor = (level: number) => {
    const colors = ['#059669', '#10B981', '#F59E0B', '#F97316', '#EF4444'];
    return colors[level - 1];
  };

  const getComfortColor = (level: number) => {
    const colors = ['#EF4444', '#F97316', '#F59E0B', '#10B981', '#059669'];
    return colors[level - 1];
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

        {/* Check-Out Header */}
        <div
          className="p-6 mb-6"
          style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', opacity: 0.9, marginBottom: '8px' }}>
            CHECK-OUT
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

        {/* Treatment Notes */}
        <div
          className="p-6 mb-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Treatment Notes
          </h3>
          <textarea
            value={treatmentNotes}
            onChange={(e) => setTreatmentNotes(e.target.value)}
            placeholder="What was done, areas treated, settings used..."
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

        {/* Skin Reaction */}
        <div
          className="p-6 mb-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Skin Reaction Level
          </h3>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                onClick={() => setSkinReaction(level)}
                className="flex-1 p-4 border-2 transition-all"
                style={{
                  borderRadius: '12px',
                  minHeight: '88px',
                  borderColor: skinReaction === level ? getReactionColor(level) : '#EBEBEB',
                  backgroundColor: skinReaction === level ? `${getReactionColor(level)}10` : 'white'
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: skinReaction === level ? getReactionColor(level) : '#CCCCCC',
                    marginBottom: '8px'
                  }}
                >
                  {level}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: skinReaction === level ? getReactionColor(level) : '#888888'
                  }}
                >
                  {reactionLabels[level - 1]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Client Comfort */}
        <div
          className="p-6 mb-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Client Comfort Level
          </h3>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                onClick={() => setClientComfort(level)}
                className="flex-1 p-4 border-2 transition-all"
                style={{
                  borderRadius: '12px',
                  minHeight: '88px',
                  borderColor: clientComfort === level ? getComfortColor(level) : '#EBEBEB',
                  backgroundColor: clientComfort === level ? `${getComfortColor(level)}10` : 'white'
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: clientComfort === level ? getComfortColor(level) : '#CCCCCC',
                    marginBottom: '8px'
                  }}
                >
                  {level}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: clientComfort === level ? getComfortColor(level) : '#888888'
                  }}
                >
                  {comfortLabels[level - 1]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div
          className="p-6 mb-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Post-Treatment Confirmation
          </h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 border border-[#EBEBEB] cursor-pointer hover:border-[#C9A84C] transition-colors" style={{ borderRadius: '12px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                Aftercare instructions given
              </span>
              <Switch.Root
                checked={aftercareGiven}
                onCheckedChange={setAftercareGiven}
                style={{
                  width: '52px',
                  height: '32px',
                  backgroundColor: aftercareGiven ? '#059669' : '#CBCDD4',
                  borderRadius: '16px',
                  transition: 'background-color 0.2s'
                }}
              >
                <Switch.Thumb
                  style={{
                    display: 'block',
                    width: '28px',
                    height: '28px',
                    backgroundColor: 'white',
                    borderRadius: '14px',
                    transition: 'transform 0.2s',
                    transform: aftercareGiven ? 'translateX(22px)' : 'translateX(2px)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    marginTop: '2px'
                  }}
                />
              </Switch.Root>
            </label>

            <label className="flex items-center justify-between p-4 border border-[#EBEBEB] cursor-pointer hover:border-[#C9A84C] transition-colors" style={{ borderRadius: '12px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>
                Client informed of post-treatment expectations
              </span>
              <Switch.Root
                checked={expectationsInformed}
                onCheckedChange={setExpectationsInformed}
                style={{
                  width: '52px',
                  height: '32px',
                  backgroundColor: expectationsInformed ? '#059669' : '#CBCDD4',
                  borderRadius: '16px',
                  transition: 'background-color 0.2s'
                }}
              >
                <Switch.Thumb
                  style={{
                    display: 'block',
                    width: '28px',
                    height: '28px',
                    backgroundColor: 'white',
                    borderRadius: '14px',
                    transition: 'transform 0.2s',
                    transform: expectationsInformed ? 'translateX(22px)' : 'translateX(2px)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    marginTop: '2px'
                  }}
                />
              </Switch.Root>
            </label>
          </div>
        </div>

        {/* Follow-up Notes */}
        <div
          className="p-6 mb-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Follow-up Notes
          </h3>
          <textarea
            value={followUpNotes}
            onChange={(e) => setFollowUpNotes(e.target.value)}
            placeholder="Recommend next treatment, timing, anything to watch..."
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

        {/* Auto-Send Info */}
        <div
          className="p-5 mb-6"
          style={{
            backgroundColor: '#E0F2FE',
            borderRadius: '12px',
            border: '1px solid #2563EB30'
          }}
        >
          <div className="flex items-start gap-3">
            <Info size={20} style={{ color: '#2563EB', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#2563EB', marginBottom: '6px' }}>
                On complete, the system will auto-send:
              </div>
              <ul style={{ fontSize: '14px', color: '#1E3A8A', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Aftercare email with treatment-specific video</li>
                <li>SMS notification</li>
                <li>Portal update</li>
                <li>Google Review request (2hrs later)</li>
                <li>Tip prompt for therapist</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Complete Button */}
        <button
          onClick={handleCompleteAppointment}
          className="w-full text-white"
          style={{
            height: '56px',
            backgroundColor: '#2563EB',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 700,
            boxShadow: '0 2px 8px rgba(37,99,235,0.3)'
          }}
        >
          Complete Appointment
        </button>
      </div>
    </div>
  );
};

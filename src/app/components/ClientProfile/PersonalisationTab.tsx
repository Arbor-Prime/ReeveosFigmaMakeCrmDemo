import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';

interface PersonalisationSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

export const PersonalisationTab: React.FC = () => {
  const [settings, setSettings] = useState<PersonalisationSetting[]>([
    {
      id: '1',
      label: 'Auto-rebook prompt',
      description: 'Send reminder when visit frequency suggests they\'re due',
      enabled: true
    },
    {
      id: '2',
      label: 'Product restock alerts',
      description: 'Notify client when their products are running low',
      enabled: true
    },
    {
      id: '3',
      label: 'Birthday campaign',
      description: 'Send personalised birthday offer and greeting',
      enabled: true
    },
    {
      id: '4',
      label: 'Package renewal',
      description: 'Automatic reminder when package is nearly complete',
      enabled: false
    },
    {
      id: '5',
      label: 'Seasonal campaigns',
      description: 'Include client in seasonal treatment promotions',
      enabled: true
    },
    {
      id: '6',
      label: 'Show therapist notes in client portal',
      description: 'Allow client to view treatment notes and recommendations',
      enabled: false
    }
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
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
        Personalisation Settings
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="p-5 border border-[#EBEBEB]"
            style={{ borderRadius: '16px' }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 pr-4">
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>
                  {setting.label}
                </div>
                <div style={{ fontSize: '14px', color: '#888888', lineHeight: '1.5' }}>
                  {setting.description}
                </div>
              </div>
              
              <Switch.Root
                checked={setting.enabled}
                onCheckedChange={() => toggleSetting(setting.id)}
                className="relative"
                style={{
                  width: '52px',
                  height: '32px',
                  backgroundColor: setting.enabled ? '#059669' : '#CBCDD4',
                  borderRadius: '16px',
                  transition: 'background-color 0.2s',
                  flexShrink: 0
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
                    transform: setting.enabled ? 'translateX(22px)' : 'translateX(2px)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    marginTop: '2px'
                  }}
                />
              </Switch.Root>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

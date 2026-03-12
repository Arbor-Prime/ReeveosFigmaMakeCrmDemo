import React, { useState } from 'react';
import { ArrowLeft, Plus, Phone, Mail } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Switch from '@radix-ui/react-switch';
import { OverviewTab } from './ClientProfile/OverviewTab';
import { NotesHistoryTab } from './ClientProfile/NotesHistoryTab';
import { TreatmentsTab } from './ClientProfile/TreatmentsTab';
import { ProductsTab } from './ClientProfile/ProductsTab';
import { PersonalisationTab } from './ClientProfile/PersonalisationTab';
import { CheckInFlow } from './ClientProfile/CheckInFlow';
import { CheckOutFlow } from './ClientProfile/CheckOutFlow';

type ViewMode = 'profile' | 'checkin' | 'checkout';

interface ClientProfileProps {
  onBack?: () => void;
}

export const ClientProfile: React.FC<ClientProfileProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState<ViewMode>('profile');
  const [tags, setTags] = useState(['VIP', 'Monthly Regular', 'Package Holder']);
  const [showAddTag, setShowAddTag] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');

  // Mock client data
  const client = {
    name: 'Isabella Martinez',
    initials: 'IM',
    email: 'isabella.martinez@email.com',
    phone: '+44 7700 900123',
    lifetimeValue: 2840,
    visitFrequency: 28,
    totalVisits: 12,
    packageProgress: { current: 4, total: 6 },
    preferredService: 'Microneedling'
  };

  const handleAddTag = () => {
    if (newTagInput.trim()) {
      setTags([...tags, newTagInput.trim()]);
      setNewTagInput('');
      setShowAddTag(false);
    }
  };

  const handleCheckIn = () => {
    setViewMode('checkin');
  };

  const handleCheckOut = () => {
    setViewMode('checkout');
  };

  const handleBackToProfile = () => {
    setViewMode('profile');
  };

  const getTagColor = (tag: string) => {
    switch(tag) {
      case 'VIP': return 'bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20';
      case 'Monthly Regular': return 'bg-[#059669]/10 text-[#059669] border-[#059669]/20';
      case 'Package Holder': return 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20';
      default: return 'bg-[#888888]/10 text-[#888888] border-[#888888]/20';
    }
  };

  // CircularProgress component for package progress
  const CircularProgress = ({ current, total }: { current: number; total: number }) => {
    const percentage = (current / total) * 100;
    const strokeDasharray = 2 * Math.PI * 18;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
      <div className="relative w-14 h-14">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="#EBEBEB"
            strokeWidth="4"
          />
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="4"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#111111' }}>
            {current}/{total}
          </span>
        </div>
      </div>
    );
  };

  if (viewMode === 'checkin') {
    return <CheckInFlow client={client} onBack={handleBackToProfile} />;
  }

  if (viewMode === 'checkout') {
    return <CheckOutFlow client={client} onBack={handleBackToProfile} />;
  }

  return (
    <div className="w-full h-full bg-[#FAFAF8] overflow-auto" style={{ fontFamily: 'Figtree' }}>
      <div className="max-w-[1200px] mx-auto p-6">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-[#111111] hover:text-[#C9A84C] transition-colors"
          style={{ minHeight: '44px', fontSize: '15px', fontWeight: 600 }}
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Header Section */}
        <div
          className="bg-white p-6 mb-6"
          style={{
            borderRadius: '16px',
            border: '1px solid #EBEBEB',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #C9A84C 0%, #D4B860 100%)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                {client.initials}
              </div>

              {/* Name and tags */}
              <div>
                <h1
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#111111',
                    marginBottom: '8px'
                  }}
                >
                  {client.name}
                </h1>

                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 border ${getTagColor(tag)}`}
                      style={{
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 600
                      }}
                    >
                      {tag}
                    </span>
                  ))}

                  {showAddTag ? (
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                        onBlur={handleAddTag}
                        placeholder="Tag name"
                        autoFocus
                        className="px-3 py-1 border border-[#EBEBEB] outline-none"
                        style={{
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: 500,
                          minWidth: '100px'
                        }}
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowAddTag(true)}
                      className="px-3 py-1 border-2 border-dashed border-[#EBEBEB] text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors flex items-center gap-1"
                      style={{
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 600
                      }}
                    >
                      <Plus size={14} />
                      Tag
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${client.email}`}
                    className="flex items-center gap-2 text-[#888888] hover:text-[#2563EB] transition-colors"
                    style={{ fontSize: '14px' }}
                  >
                    <Mail size={16} />
                    {client.email}
                  </a>
                  <a
                    href={`tel:${client.phone}`}
                    className="flex items-center gap-2 text-[#888888] hover:text-[#059669] transition-colors"
                    style={{ fontSize: '14px' }}
                  >
                    <Phone size={16} />
                    {client.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCheckIn}
                className="px-6 text-white"
                style={{
                  height: '44px',
                  backgroundColor: '#059669',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                Check In
              </button>
              <button
                onClick={handleCheckOut}
                className="px-6 text-white"
                style={{
                  height: '44px',
                  backgroundColor: '#2563EB',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                Check Out
              </button>
              <button
                className="px-6 text-white"
                style={{
                  height: '44px',
                  backgroundColor: '#111111',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-5 gap-4">
            <div
              className="p-4 bg-white border border-[#EBEBEB]"
              style={{ borderRadius: '16px' }}
            >
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#C9A84C', marginBottom: '4px' }}>
                £{client.lifetimeValue.toLocaleString()}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#888888' }}>
                Lifetime Value
              </div>
            </div>

            <div
              className="p-4 bg-white border border-[#EBEBEB]"
              style={{ borderRadius: '16px' }}
            >
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#059669', marginBottom: '4px' }}>
                {client.visitFrequency} days
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#888888' }}>
                Visit Frequency
              </div>
            </div>

            <div
              className="p-4 bg-white border border-[#EBEBEB]"
              style={{ borderRadius: '16px' }}
            >
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#111111', marginBottom: '4px' }}>
                {client.totalVisits}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#888888' }}>
                Total Visits
              </div>
            </div>

            <div
              className="p-4 bg-white border border-[#EBEBEB] flex flex-col items-center justify-center"
              style={{ borderRadius: '16px' }}
            >
              <CircularProgress
                current={client.packageProgress.current}
                total={client.packageProgress.total}
              />
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#888888', marginTop: '8px' }}>
                Package Progress
              </div>
            </div>

            <div
              className="p-4 bg-white border border-[#EBEBEB]"
              style={{ borderRadius: '16px' }}
            >
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>
                {client.preferredService}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#888888' }}>
                Preferred Service
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <div
            className="bg-white p-1 mb-6"
            style={{
              borderRadius: '16px',
              border: '1px solid #EBEBEB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            <Tabs.List className="flex items-center gap-1">
              {[
                { value: 'overview', label: 'Overview' },
                { value: 'notes', label: 'Notes & History' },
                { value: 'treatments', label: 'Treatments' },
                { value: 'products', label: 'Products' },
                { value: 'personalisation', label: 'Personalisation' }
              ].map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 px-4 py-3 transition-all"
                  style={{
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: 600,
                    backgroundColor: activeTab === tab.value ? '#111111' : 'transparent',
                    color: activeTab === tab.value ? '#FFFFFF' : '#888888',
                    minHeight: '44px'
                  }}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>

          <Tabs.Content value="overview">
            <OverviewTab />
          </Tabs.Content>

          <Tabs.Content value="notes">
            <NotesHistoryTab />
          </Tabs.Content>

          <Tabs.Content value="treatments">
            <TreatmentsTab />
          </Tabs.Content>

          <Tabs.Content value="products">
            <ProductsTab />
          </Tabs.Content>

          <Tabs.Content value="personalisation">
            <PersonalisationTab />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

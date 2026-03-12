import React, { useState } from 'react';

type NoteType = 'personal' | 'treatment' | 'alert';

interface Note {
  id: string;
  type: NoteType;
  content: string;
  author: string;
  date: string;
}

export const NotesHistoryTab: React.FC = () => {
  const [selectedType, setSelectedType] = useState<NoteType>('personal');
  const [noteInput, setNoteInput] = useState('');
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      type: 'personal',
      content: 'Loves a glass of Sauvignon Blanc — offer on arrival for evening appointments. Makes her feel welcome.',
      author: 'Grace Thompson',
      date: '01 Feb 2026'
    },
    {
      id: '2',
      type: 'treatment',
      content: 'Slight redness on left cheek — advised extra SPF for 48hrs. Skin responding well to course.',
      author: 'Grace Thompson',
      date: '28 Feb 2026'
    },
    {
      id: '3',
      type: 'alert',
      content: 'Holiday to Marbella planned for end of March. Avoid aggressive peels 2 weeks prior.',
      author: 'Grace Thompson',
      date: '10 Mar 2026'
    },
    {
      id: '4',
      type: 'treatment',
      content: 'Microneedling session 3/6 completed. Client very happy with skin texture improvements. No adverse reactions.',
      author: 'Grace Thompson',
      date: '15 Feb 2026'
    },
    {
      id: '5',
      type: 'personal',
      content: 'Prefers minimal small talk during treatments. Likes relaxing music (classical or ambient).',
      author: 'Sarah Mitchell',
      date: '22 Jan 2026'
    }
  ]);

  const handleAddNote = () => {
    if (noteInput.trim()) {
      const newNote: Note = {
        id: Date.now().toString(),
        type: selectedType,
        content: noteInput.trim(),
        author: 'Grace Thompson',
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      };
      setNotes([newNote, ...notes]);
      setNoteInput('');
    }
  };

  const getNoteColor = (type: NoteType) => {
    switch(type) {
      case 'personal': return '#C9A84C';
      case 'treatment': return '#2563EB';
      case 'alert': return '#EF4444';
    }
  };

  const getTypeBadgeColor = (type: NoteType) => {
    switch(type) {
      case 'personal': return 'bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20';
      case 'treatment': return 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20';
      case 'alert': return 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20';
    }
  };

  return (
    <div>
      {/* Add Note Bar */}
      <div
        className="p-6 bg-white mb-6"
        style={{
          borderRadius: '16px',
          border: '1px solid #EBEBEB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <div className="flex items-start gap-4">
          {/* Type Selector */}
          <div className="flex items-center gap-2">
            {(['personal', 'treatment', 'alert'] as NoteType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className="px-4 py-2 transition-all capitalize"
                style={{
                  height: '44px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: selectedType === type ? getNoteColor(type) : '#FAFAF8',
                  color: selectedType === type ? '#FFFFFF' : '#888888',
                  border: `1px solid ${selectedType === type ? getNoteColor(type) : '#EBEBEB'}`
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Input */}
          <input
            type="text"
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
            placeholder="Type your note here..."
            className="flex-1 px-4 py-2 border border-[#EBEBEB] outline-none focus:border-[#C9A84C] transition-colors"
            style={{
              height: '44px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 500
            }}
          />

          {/* Add Button */}
          <button
            onClick={handleAddNote}
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
            Add
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div
        className="p-6 bg-white"
        style={{
          borderRadius: '16px',
          border: '1px solid #EBEBEB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
          Client History
        </h3>

        <div className="space-y-4">
          {notes.map((note, index) => (
            <div key={note.id} className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: getNoteColor(note.type),
                    flexShrink: 0
                  }}
                />
                {index < notes.length - 1 && (
                  <div
                    style={{
                      width: '2px',
                      flex: 1,
                      backgroundColor: '#EBEBEB',
                      marginTop: '4px',
                      marginBottom: '4px',
                      minHeight: '40px'
                    }}
                  />
                )}
              </div>

              {/* Note content */}
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>
                    {note.date}
                  </span>
                  <span style={{ fontSize: '14px', color: '#888888' }}>
                    by {note.author}
                  </span>
                  <span
                    className={`px-3 py-1 border ${getTypeBadgeColor(note.type)} capitalize`}
                    style={{
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600
                    }}
                  >
                    {note.type}
                  </span>
                </div>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#111111', lineHeight: '1.6' }}>
                  {note.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { memo } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { Note } from '@/types/note';
import NoteCard from '@/components/model/note/NoteCard';
import LinkButton from '@/components/utils/LinkButton';

export type NoteCardListProps = {
  notes: Note[];
  zennUrl: string;
};

const NoteCardList: React.FC<NoteCardListProps> = memo(props => {
  const { notes, zennUrl } = props;

  return (
    <div>
      <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6'>
        {notes.map(note => (
          <NoteCard key={note.guid} note={note} />
        ))}
      </div>
      <div className='flex justify-center'>
        <LinkButton
          href={zennUrl}
          external
          buttonProps={{
            size: 'large',
            endIcon: <IoChevronForward />,
          }}
        >
          More
        </LinkButton>
      </div>
    </div>
  );
});

NoteCardList.displayName = 'NoteCardList';

export default NoteCardList;

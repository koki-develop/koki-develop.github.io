import { differenceInMonths, format, formatDistance } from 'date-fns';
import React, { memo, useMemo } from 'react';
import { Note } from '@/models/note';
import Card from '@/components/utils/Card';
import Link from '@/components/utils/Link';

export type NoteCardProps = {
  note: Note;
};

const NoteCard: React.FC<NoteCardProps> = memo(props => {
  const { note } = props;

  const publishedAtText = useMemo(() => {
    const publishedAt = new Date(note.isoDate);
    const diffMonth = differenceInMonths(new Date(), publishedAt);
    if (diffMonth > 6) {
      return format(publishedAt, 'yyyy/MM/dd');
    } else {
      return formatDistance(new Date(note.isoDate), new Date(), {
        addSuffix: true,
      });
    }
  }, [note.isoDate]);

  return (
    <Link external href={note.link}>
      <Card className='flex h-full flex-col p-4 transition hover:bg-gray-100'>
        <div className='mb-2 flex-grow'>{note.title}</div>
        <div className='flex'>
          <img
            className='mr-2'
            src='/images/icons/Zenn.svg'
            alt='Zenn'
            width={16}
            height={16}
          />
          <time className='text-sm' dateTime={note.isoDate}>
            {publishedAtText}
          </time>
        </div>
      </Card>
    </Link>
  );
});

NoteCard.displayName = 'NoteCard';

export default NoteCard;

import { ContentState, Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';
import { Box, Card, IconButton, Text } from '@chakra-ui/react';

import { NotesProps } from './type';
import { appStore, notesSelector, useShallow } from '@appStore';
import { useEffect, useState } from 'react';
import { getAllStringExceptFirstLine, getFirstLineFromString } from './utils';

const color = '#cc9900';
const Notes = (props: NotesProps) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [selectedNoteId, setSelectedNoteId] = useState<string>('0');

  const { notes, addNote, selectedNote, getCurrentId, deleteNote, editNote } =
    appStore(useShallow(notesSelector));
  const currentNote = selectedNote(selectedNoteId);

  useEffect(() => {
    if (selectedNoteId !== '0') {
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(
            selectedNoteId
              ? currentNote.title + '\n' + currentNote.description
              : '',
          ),
        ),
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNoteId]);

  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      flexDir={'column'}
      aria-label="notes-app"
    >
      <Box
        width={'100%'}
        height={'6%'}
        bg={'#332600'}
        borderBottom={'1px solid #000000'}
        display={'flex'}
        flexDir={'row'}
        gap={2}
      >
        <IconButton
          aria-label="Add Note"
          size={'sm'}
          icon={<Text fontSize={20}>+</Text>}
          onClick={() =>
            addNote({
              id: (getCurrentId() + 1) as unknown as string,
              title: 'Title',
              description: 'Description',
              date: new Date().toLocaleDateString(),
            })
          }
        />
        <IconButton
          aria-label="Delete Note"
          size={'sm'}
          icon={<Text fontSize={20}>-</Text>}
          onClick={() => {
            if (selectedNoteId !== '0') {
              deleteNote(selectedNoteId);
              setSelectedNoteId('0');
            }
          }}
        />
      </Box>
      <Box
        width={'100%'}
        height={'94%'}
        bg={'#332600'}
        borderBottom={'1px solid #000000'}
        display={'flex'}
        flexDir={'row'}
      >
        <Box
          width={'20%'}
          height={'100%'}
          bg={'#1a13009f'}
          borderRight={'1px solid #000000'}
          gap={0}
        >
          {Object.values(notes).map((note) => (
            <>
              <Card
                key={note.id}
                bg={selectedNoteId === note.id ? color : '#1a13009f'}
                margin={2}
                padding={1}
                px={3}
                onClick={() => {
                  if (selectedNoteId !== '0') {
                    editNote({
                      id: selectedNoteId,
                      title: getFirstLineFromString(
                        editorState.getCurrentContent().getPlainText(),
                      ),
                      description: getAllStringExceptFirstLine(
                        editorState.getCurrentContent().getPlainText(),
                      ),
                      date: selectedNoteId ? currentNote?.date : '',
                    });
                  }
                  setSelectedNoteId(note.id);
                }}
                _hover={{
                  cursor: 'pointer',
                }}
                color={'#ffffff'}
                borderBottom={'1px solid #000000'}
              >
                <Text variant="h5" noOfLines={1}>
                  {note.title}
                </Text>
                <Text fontSize={14}>
                  <Text>{note.date}</Text>
                  {note.description}
                </Text>
              </Card>
            </>
          ))}
        </Box>
        <Box
          width={'80%'}
          height={'100%'}
          padding={3}
          bg={'#1a1a1a'}
          overflowY={'auto'}
          color={'white'}
        >
          <Editor editorState={editorState} onChange={setEditorState} />
        </Box>
      </Box>
    </Box>
  );
};

export default Notes;

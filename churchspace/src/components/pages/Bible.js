import React, { useState, useEffect } from 'react';

function Bible() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState('');
  const [verses, setVerses] = useState([]);
  const [selectedVerse, setSelectedVerse] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = '0a6b6d5bc04efc7b187ccfee59afa85f';
  const VERSION = '06125adad2d5898a-01';

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${VERSION}/books?include-chapters=false&include-chapters-and-sections=false`,
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const data = await response.json();
      setBooks(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchChapters = async (bookSelected) => {
    try {
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${VERSION}/books/${bookSelected}/chapters`,
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch chapters');
      }

      const data = await response.json();
      setChapters(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVerses = async (chapterSelected) => {
    try {
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${VERSION}/chapters/${chapterSelected}/verses`,
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch verses');
      }

      const data = await response.json();
      setVerses(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchChapterContent = async () => {
    try {
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${VERSION}/chapters/${selectedChapter}?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false`,
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch chapter content');
      }
  
      const data = await response.json();
      const formattedResults = formatSearchResults([data.data]);
      setSearchResults(formattedResults);
      console.log(formattedResults);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVerseContent = async (verseSelected) => {
    try {
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${VERSION}/verses/${verseSelected}?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`,
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch verse content');
      }
  
      const data = await response.json();
      const formattedResults = formatSearchResults([data.data]);
      setSearchResults(formattedResults);
      console.log(formattedResults);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formatSearchResults = (results) => {
  return results.map((result) => {
    const formattedContent = result.content.map((contentItem) => {
      if (contentItem.type === 'tag' && contentItem.name === 'para') {
        return contentItem.items.map((item) => {
          if (item.type === 'verse') {
            return {
              type: 'verse',
              number: item.number,
              text: item.text,
            };
          }
          return {
            type: 'text',
            text: item.text,
          };
        });
      }
      return [];
    });

    const mergedContent = formattedContent.flat().map((item) => {
      if (item.type === 'verse') {
        return `<sup>${item.number}</sup>${item.text ? ' ' + item.text : ''}`;
      }
      return item.text ? item.text : '';
    });

    const formattedResult = {
      id: result.id,
      reference: result.reference,
      text: mergedContent.join(''),
    };

    return formattedResult;
  });
};
  
  
  const handleBookChange = (event) => {
    console.log(event.target.value);
    setSelectedBook(event.target.value);
    setSelectedChapter('');
    setSelectedVerse('');
    setSearchResults([]);

    if (event.target.value) {
      fetchChapters(event.target.value);
    } else {
      setChapters([]);
      setVerses([]);
    }
  };

  const handleChapterChange = (event) => {
    console.log(event.target.value);
    setSelectedChapter(event.target.value);
    setSelectedVerse('');
    setSearchResults([]);

    if (event.target.value) {
      fetchVerses(event.target.value);
    } else {
      setVerses([]);
    }
  };

  const handleVerseChange = (event) => {
    console.log(event.target.value);
    setSelectedVerse(event.target.value);
    setSearchResults([]);
  };

  const handleTableSearch = () =>{
    if(selectedBook!==undefined&&selectedVerse===''){
      fetchChapterContent(selectedChapter)
    }else if(selectedBook!==undefined&&selectedChapter!==undefined&&selectedVerse!=='') {
      fetchVerseContent(selectedVerse)
    }else{throw new Error('You must select at least a book and a chapter before you search');}
  }
  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${VERSION}/search?query=${searchText}&limit=10&sort=relevance&fuzziness=AUTO`,
        {
          headers: {
            'api-key': API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      setSearchResults(data.data?.verses || []);
      console.log(data.data?.verses || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-col fill">
      <div className="flex-row thin-border">
      <h1 className="flex-col quarter-width">Scripture Search</h1>

        <div className="flex-row two-third-width center">
        <div className="flex-row quarter-width center">
          <label htmlFor="book">Book:</label>
          <select id="book" value={selectedBook} onChange={handleBookChange}>
            <option value="">Select a book</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.name}
              </option>
            ))}
          </select>
          </div>
          <div className="flex-row quarter-width center">
          <label htmlFor="chapter">Chapter:</label>
          <select
            id="chapter"
            value={selectedChapter}
            onChange={handleChapterChange}
            disabled={!selectedBook}
          >
            <option value="">Select a chapter</option>
            {chapters.map((chapter) => (
              <option className="input-box" key={chapter.id} value={chapter.id}>
                {chapter.number}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-row quarter-width center">
          <label htmlFor="verse">Verse:</label>
          <select
            id="verse"
            value={selectedVerse}
            onChange={handleVerseChange}
            disabled={!selectedChapter}
          >
            <option value="">Select a verse</option>
            {verses.map((verse) => (
              <option key={verse.id} value={verse.id}>
                {verse.reference}
              </option>
            ))}
          </select>
        </div>
        <div className="quarter-width">
        <button className="button" onClick={handleTableSearch}>Verse Search</button>
        </div>
        </div>
    
      <div className="flex-column center">
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search text"
        />
        <button className="button center" onClick={handleSearch}>Word Search</button>
      </div>

      </div>
      <div className="flex-col fill scroll">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='flex-col fill'>
            {searchResults.map((result) => (
              <div className="flex-row fill" key={result.id}>
                <h3 className="flex-col quarter-width">{result.reference}</h3>
                <p className="flex-col fill">{result.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bible;
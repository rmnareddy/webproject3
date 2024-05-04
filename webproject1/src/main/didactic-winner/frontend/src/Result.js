import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Result({ result }) {
  return (
    <Accordion.Item eventKey={result.date}>
      <Accordion.Header>{result.title}</Accordion.Header>
      <Accordion.Body>
        {/* Display image or video based on media_type */}
        {result.media_type === "image" ? (
          <img src={result.url} alt={result.title} style={{ width: '100%', marginBottom: '10px' }} />
        ) : (
          <iframe title={result.title} src={result.url} frameBorder="0" allowFullScreen style={{ width: '100%', height: '500px', marginBottom: '10px' }}></iframe>
        )}
        
        {/* Display the date */}
        <p><strong>Date:</strong> {result.date}</p>

        {/* Display the media type */}
        <p><strong>Media Type:</strong> {result.media_type}</p>
        
        {/* Explanation */}
        <p>{result.explanation}</p>
        
        {/* Link to HD URL if available */}
        {result.hdurl && (
          <p><a href={result.hdurl} target="_blank" rel="noopener noreferrer">View in HD</a></p>
        )}

        {/* Copyright information */}
        {result.copyright && (
          <p><strong>Copyright:</strong> {result.copyright}</p>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Result;

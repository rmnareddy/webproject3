import React, { useState, useEffect } from 'react';
import { Form, Button, Accordion, Container, Row, Col } from 'react-bootstrap';
import Result from './Result'; // Assuming this is the path to your Result component
import useApodStore from  './zustStore';

const Page2 = () => {
  

  // const [date, setDate] = useState(today);
  // const [count, setCount] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');

  const { date, setDate, count, setCount, startDate, setStartDate, endDate, setEndDate } = useApodStore();



  // Zustand store
  const { result, results2, results3, fetchByDate, fetchByCount, fetchByDateRange } = useApodStore();

  // Fetch data for form 1 (By Date) on component mount or date change
  useEffect(() => {
    fetchByDate(date);
  }, [date, fetchByDate]);

  // Handlers for form submissions
  const handleFetchByCount = () => {
    fetchByCount(count);
  };

  const handleFetchByDateRange = () => {
    fetchByDateRange(startDate, endDate);
  };

  return (
    <Container>
      {/* Form 1 - By Date */}
      <Row className="mb-3">
        <Col>
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        {result && <Accordion.Item eventKey='0'>
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
    </Accordion.Item>}
      </Accordion>
      
      <hr />

      {/* Form 2 - By Count */}
      <Row className="mb-3">
        <Col>
          <Form.Label>Count</Form.Label>
          <Form.Control type="number" value={count} onChange={(e) => setCount(e.target.value)} />
          <Button onClick={handleFetchByCount}>Fetch</Button>
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        {results2.map((result, index) => (
          <Result key={index} result={result} />
        ))}
      </Accordion>
      <hr />

      {/* Form 3 - By Date Range */}
      <Row className="mb-3">
        <Col>
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </Col>
        <Col>
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          <Button onClick={handleFetchByDateRange}>Fetch</Button>
        </Col>
      </Row>
      <Accordion>
        {results3.map((result, index) => (
          <Result key={index} result={result} />
        ))}
      </Accordion>
    </Container>
  );
};

export default Page2;

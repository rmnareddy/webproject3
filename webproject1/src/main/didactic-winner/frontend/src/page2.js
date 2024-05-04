import React, { useState, useEffect } from 'react';
import { Form, Button, Accordion, Container, Row, Col } from 'react-bootstrap';
import Result from './Result'; // Assuming this is the path to your Result component

const Page2 = () => {
  const formatDate = (date) => {
    const localDate = new Date(date); // Assuming 'date' is in UTC format or any other valid format
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

  const today = formatDate(new Date());

  // State for form inputs
  const [date, setDate] = useState(today);
  const [count, setCount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // State for results
  const [result, setResult1] = useState(null);
  const [results2, setResults2] = useState([]);
  const [results3, setResults3] = useState([]);

  // Fetch data for form 1 (By Date) on component mount or date change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/nasa/apod?date=${date}`);
        const data = await response.json();
        setResult1(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [date]);

  // Handlers for form submissions`
  const fetchByCount = () => {
    fetch(`/nasa/apods?count=${count}`)
      .then(response => response.json())
      .then(data => setResults2(data));
  };

  const fetchByDateRange = () => {
    fetch(`/nasa/apods?start_date=${startDate}&end_date=${endDate}`)
      .then(response => response.json())
      .then(data => setResults3(data));
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
          <Button onClick={fetchByCount}>Fetch</Button>
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
          <Button onClick={fetchByDateRange}>Fetch</Button>
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

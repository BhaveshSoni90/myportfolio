import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

// Set the worker path
GlobalWorkerOptions.workerSrc = '/pdfjs-dist/build/pdf.worker.min.js';

// Path to the PDF file
const filePath = '/Bhavesh-Soni.pdf';

const CV = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        // Load the PDF document
        const pdfDoc = await getDocument(filePath).promise;
        
        // Check if the document has pages
        if (pdfDoc.numPages > 0) {
          // Load the first page
          const page = await pdfDoc.getPage(1);
          const viewport = page.getViewport({ scale: 1.5 }); // Adjust scale as needed

          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render the page into the canvas context
          await page.render({
            canvasContext: context,
            viewport,
          }).promise;
          
          setLoading(false);
        } else {
          throw new Error('No pages found in PDF');
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error('Error loading PDF:', error);
      }
    };

    loadPdf();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.intro}>
        <h2 style={styles.introTitle}>My Curriculum Vitae</h2>
        <p style={styles.introText}>
          Here you can find a detailed overview of my professional experience, skills, and accomplishments. 
          Feel free to download my CV to get more information about my background and qualifications.
        </p>
      </div>
      
      <a
        href={filePath}
        download="Bhavesh-Soni.pdf"
        style={styles.button}
      >
        Download CV
      </a>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  intro: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  introTitle: {
    fontSize: '1.8em',
    color: '#333',
    marginBottom: '10px',
  },
  introText: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default CV;

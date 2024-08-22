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
      {loading && <p>Loading PDF...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div style={styles.previewContainer}>
          <canvas ref={canvasRef} style={styles.canvas}></canvas>
        </div>
      )}
      <a
        href={filePath}
        download="Bhavesh-Soni.pdf"
        style={styles.button}
      >
        Download PDF
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
  previewContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  canvas: {
    border: '1px solid #ddd',
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

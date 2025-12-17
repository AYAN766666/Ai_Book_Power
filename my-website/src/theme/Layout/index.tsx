import React from 'react';
import Layout from '@theme-original/Layout';
import ChatAgent from '@site/src/components/ChatAgent'; // Import the ChatAgent component
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LayoutWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const bookName = siteConfig.title || 'Your Book'; // Fallback title

  return (
    <Layout {...props}>
      {props.children}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '10px',
        width: '350px', // Adjust width as needed
        maxHeight: '500px', // Adjust height as needed
        overflow: 'hidden'
      }}>
        <ChatAgent bookName={bookName} />
      </div>
    </Layout>
  );
}

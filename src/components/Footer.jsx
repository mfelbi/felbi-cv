import React from 'react';

const footerStyle = {
  width: '100%',
  backgroundColor: 'dark', // Warna latar belakang
  padding: '10px',
  textAlign: 'center',
  position: 'fixed', // Tetap di bagian bawah
  bottom: 0,
  lineHeight: '0.5', // Tinggi garis dengan ukuran teks
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0 }}>&copy; 2024 Muhammad Felbi Ramdhani</p>
    </footer>
  );
};

export default Footer;

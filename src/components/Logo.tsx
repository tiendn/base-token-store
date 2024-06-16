import React from 'react';

interface LogoProps {
  backgroundFill: string;
  shapesFill: string;
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ backgroundFill, shapesFill, width, height }) => (
  <svg width={width} height={height} viewBox="0 0 244 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.976562" y="87.4924" width="87.4925" height="242.045" rx="43.7462" transform="rotate(-90 0.976562 87.4924)" fill={backgroundFill}/>
    <circle cx="31.8581" cy="31.8581" r="31.8581" transform="matrix(1 0 0 -1 15.7773 75.6042)" fill={shapesFill}/>
    <rect x="13.1348" y="40.0457" width="45.9808" height="8.04245" fill={backgroundFill}/>
    <rect x="98.4121" y="75.666" width="63.7784" height="45.465" rx="22.7325" transform="rotate(-90 98.4121 75.666)" fill={shapesFill}/>
    <path d="M189.793 14.0739C183.585 25.3141 174.25 34.5519 162.892 40.6953C160.27 42.1212 160.27 45.8376 162.892 47.2635C174.25 53.4069 183.585 62.6447 189.793 73.8849C191.234 76.4788 194.99 76.4788 196.431 73.8849C202.639 62.6447 211.974 53.4069 223.332 47.2635C225.953 45.8376 225.953 42.1212 223.332 40.6953C211.974 34.5519 202.639 25.3141 196.431 14.0739C194.99 11.48 191.219 11.48 189.793 14.0739Z" fill={shapesFill}/>
  </svg>
);

export default Logo;

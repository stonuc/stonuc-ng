"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Caret from '../Caret';

type TypingTextProps = {
  texts: string[];
  typingSpeed?: number; // Speed of typing each character in milliseconds
  pauseDuration?: number; // Duration to pause on fully typed text before highlighting
  highlightDuration?: number; // Duration to keep the text highlighted before clearing
};

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  typingSpeed = 100, // Default typing speed: 100ms per character
  pauseDuration = 2000, // Default pause duration after typing
  highlightDuration = 1000, // Default highlight duration before clearing
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;
    let highlightTimeout: NodeJS.Timeout;

    if (isTyping && displayedText.length < texts[currentIndex].length) {
      // Typing effect: continue typing one character at a time
      typingTimeout = setTimeout(() => {
        setDisplayedText(texts[currentIndex].slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (displayedText.length === texts[currentIndex].length && !isHighlighted) {
      // Pause on fully typed text before highlighting
      pauseTimeout = setTimeout(() => {
        setIsHighlighted(true);
      }, pauseDuration);
    } else if (isHighlighted) {
      // Clear text after highlighting it
      highlightTimeout = setTimeout(() => {
        setDisplayedText('');
        setIsTyping(true);
        setIsHighlighted(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, highlightDuration);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
      clearTimeout(highlightTimeout);
    };
  }, [
    displayedText,
    isTyping,
    isHighlighted,
    texts,
    currentIndex,
    typingSpeed,
    pauseDuration,
    highlightDuration,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-mono"
    >
      {displayedText && (
        <motion.span
          key={displayedText} 
          initial={{ backgroundColor: '#60696a' }}
          animate={{
            backgroundColor: isHighlighted ? '#41afd4' : '#60696a', 
            color: isHighlighted ? '#fff' : '#fff', 
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className=''
        >
          {displayedText}
          {<Caret className='ml-1 min-h-5' />}
        </motion.span>
      )}
    </motion.div>
  );
};

export default TypingText;

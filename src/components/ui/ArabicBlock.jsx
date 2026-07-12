const ArabicBlock = ({ children, className = "" }) => (
  <p dir="rtl" className={`font-arabic text-right leading-loose break-words ${className}`}>
    {children}
  </p>
);

export default ArabicBlock;

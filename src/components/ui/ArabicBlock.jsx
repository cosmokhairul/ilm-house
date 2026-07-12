const ArabicBlock = ({ children, className = "" }) => (
  <p dir="rtl" className={`font-arabic text-right leading-loose ${className}`}>
    {children}
  </p>
);

export default ArabicBlock;

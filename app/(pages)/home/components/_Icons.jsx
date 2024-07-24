export default function Icons({ children, size="text-xl"}) {
  return (
    <div className={`p-3 ${size} rounded-full filterShadow bg-clip flip_hover`}>
      {children}
    </div>
  );
}

export const CardGrid = ({ children }) => (
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
    {children}
  </div>
)
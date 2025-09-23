interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  pages: string[];
}

export default function Navigation({ currentPage, onPageChange, pages }: NavigationProps) {
  // Filter out landing page from navigation
  const navigationPages = pages.filter(page => page !== 'landing');
  
  const getPageNumber = (page: string) => navigationPages.indexOf(page);
  const getPageLabel = (page: string) => {
    const labels: { [key: string]: string } = {
      about: 'ABOUT',
      skills: 'SKILLS',
      work: 'WORK',
      projects: 'PROJECTS',
      contact: 'CONTACT',
      resume: 'RESUME'
    };
    return labels[page] || page.toUpperCase();
  };

  return (
    <div className="border-b border-terminal-green p-4">
      <div className="flex items-center justify-between">
        <div className="text-terminal-green text-sm">DRAG ANYWHERE</div>
        
        <div className="flex items-center gap-6 text-sm">
          {navigationPages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`transition-colors ${
                currentPage === page
                  ? 'text-terminal-green'
                  : 'text-terminal-gray hover:text-terminal-white'
              }`}
            >
              {getPageNumber(page)}. {getPageLabel(page)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
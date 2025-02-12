
export default function Navbar() {
    const navItems = [
      { title: 'Test Broker', active: true },
      { title: 'Test Logger', active: false },
      { title: 'Analytics', active: false },
      { title: 'Settings', active: false },
      { title: 'Profile', active: false }
    ];
  
    return (
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex flex-row items-center justify-between w-full">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-blue-700 rounded-lg mx-2
                    ${item.active ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white'}`}
                >
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
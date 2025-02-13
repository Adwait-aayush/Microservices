import { useState } from "react";
export default function Navbar() {
   
      
        const [activeItem, setActiveItem] = useState('Test Broker');
  
        const handleTestBrokerClick = () => {
          setActiveItem('Test Broker');
          console.log('Test Broker clicked');
           const headers=new Headers();
           headers.append('Content-Type', 'application/json');
           const reqoptions={
            headers:headers,
            method:'POST',
            body: JSON.stringify({})
           }
           fetch('http://localhost:8080/Broker',reqoptions)
           .then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error('Error:', error))
        };
      
        const handleTestLoggerClick = () => {
          setActiveItem('Test Logger');
          console.log('Test Logger clicked');
          
        };
      
        const handleAnalyticsClick = () => {
          setActiveItem('Analytics');
          console.log('Analytics clicked');
        
        };
      
        const handleSettingsClick = () => {
          setActiveItem('Settings');
          console.log('Settings clicked');
          
        };
      
        const handleProfileClick = () => {
          setActiveItem('Profile');
          console.log('Profile clicked');
          // Add specific Profile logic here
        };
      
        return (
          <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex flex-row items-center justify-between w-full">
                  <div
                    onClick={handleTestBrokerClick}
                    className={`flex items-center justify-center px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-blue-700 rounded-lg mx-2
                      ${activeItem === 'Test Broker' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white'}`}
                  >
                    <span className="text-sm font-medium">Test Broker</span>
                  </div>
                  
                  <div
                    onClick={handleTestLoggerClick}
                    className={`flex items-center justify-center px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-blue-700 rounded-lg mx-2
                      ${activeItem === 'Test Logger' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white'}`}
                  >
                    <span className="text-sm font-medium">Test Logger</span>
                  </div>
                  
                  <div
                    onClick={handleAnalyticsClick}
                    className={`flex items-center justify-center px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-blue-700 rounded-lg mx-2
                      ${activeItem === 'Analytics' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white'}`}
                  >
                    <span className="text-sm font-medium">Analytics</span>
                  </div>
                  
                  <div
                    onClick={handleSettingsClick}
                    className={`flex items-center justify-center px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-blue-700 rounded-lg mx-2
                      ${activeItem === 'Settings' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white'}`}
                  >
                    <span className="text-sm font-medium">Settings</span>
                  </div>
                  
                  <div
                    onClick={handleProfileClick}
                    className={`flex items-center justify-center px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-blue-700 rounded-lg mx-2
                      ${activeItem === 'Profile' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white'}`}
                  >
                    <span className="text-sm font-medium">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        );
    
  }
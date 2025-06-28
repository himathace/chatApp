
function Dash(){

    return(

        <div className="bg-gray-50 h-screen overflow-hidden">
            <div className="flex h-full">
                <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-medium">JD</span>
                            </div>
                            <div>
                                <h2 className="font-semibold text-gray-900">John Doe</h2>
                                <p className="text-sm text-gray-500">Online</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search conversations..." 
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="px-4 py-3 bg-blue-50 border-r-2 border-blue-500 cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium">AS</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-gray-900 truncate">Alice Smith</h3>
                                        <span className="text-xs text-gray-500">2:30 PM</span>
                                    </div>
                                    <p className="text-sm text-gray-600 truncate">Hey! How's the project going?</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium">MB</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-gray-900 truncate">Mike Brown</h3>
                                        <span className="text-xs text-gray-500">1:15 PM</span>
                                    </div>
                                    <p className="text-sm text-gray-600 truncate">Thanks for the update!</p>
                                </div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium">SJ</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-gray-900 truncate">Sarah Johnson</h3>
                                        <span className="text-xs text-gray-500">11:45 AM</span>
                                    </div>
                                    <p className="text-sm text-gray-600 truncate">Let's schedule a meeting</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium">DW</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-gray-900 truncate">David Wilson</h3>
                                        <span className="text-xs text-gray-500">Yesterday</span>
                                    </div>
                                    <p className="text-sm text-gray-600 truncate">Perfect! See you then.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex-1 flex flex-col">
                    <div className="bg-white border-b border-gray-200 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-medium">AS</span>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-gray-900">Alice Smith</h2>
                                    <p className="text-sm text-green-500">Active now</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">AS</span>
                            </div>
                            <div className="flex-1">
                                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 max-w-xs">
                                    <p className="text-gray-900">Hey! How's the project going?</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">2:30 PM</p>
                            </div>
                        </div>


                        <div className="flex items-start space-x-3 justify-end">
                            <div className="flex-1">
                                <div className="bg-blue-500 rounded-lg px-4 py-2 shadow-sm max-w-xs ml-auto">
                                    <p className="text-white">It's going great! Just finished the main features. Should be ready for review by tomorrow.</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 text-right">2:32 PM</p>
                            </div>
                        </div>


                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">AS</span>
                            </div>
                            <div className="flex-1">
                                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 max-w-xs">
                                    <p className="text-gray-900">Awesome! Can't wait to see it. Let me know if you need any help with testing.</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">2:35 PM</p>
                            </div>
                        </div>


                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">AS</span>
                            </div>
                            <div className="flex-1">
                                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 max-w-xs">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationdelay: "0.1s"}}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationdelay: "0.2s"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white border-t border-gray-200 px-6 py-4">
                        <div className="flex items-center space-x-3">
                            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                </svg>
                            </button>
                            <div className="flex-1 relative">
                                <input 
                                    type="text" 
                                    placeholder="Type a message..." 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                            <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash